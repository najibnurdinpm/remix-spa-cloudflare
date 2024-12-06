import parseFrontMatter from "front-matter";
import { readFile } from "./fs.server";
import path from "path";
import { bundleMDX } from "./mdx.server";
import haskell from "highlight.js/lib/languages/haskell";
import fs from "fs";

export type Post = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
};

export type PostMarkdownAttributes = {
  title: string;
};

export async function getPost(slug: string) {
  const source = await readFile(
    path.join(`${__dirname}/../posts`, slug + ".mdx"),
    "utf-8"
  );
  //@ts-ignore
  const rehypeHighlight = await import("rehype-highlight").then(
    (mod) => mod.default
  );
  //@ts-ignore
  const { default: remarkGfm } = await import("remark-gfm");
  //@ts-ignore
  const { default: rehypeAutolinkHeadings } = await import(
    "rehype-autolink-headings"
  );
  //@ts-ignore
  const { default: rehypeToc } = await import("rehype-toc");
  //@ts-ignore
  const { default: rehypeSlug } = await import("rehype-slug");

  const post = await bundleMDX({
    source,
    //@ts-ignore
    xdmOptions(options: any, frontmatter: any) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        // remarkMdxImages,
        remarkGfm,
        // remarkBreaks,
        // [remarkFootnotes, { inlineNotes: true }],
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeAutolinkHeadings,
        rehypeSlug,
        rehypeToc,
        [
          rehypeHighlight,
          { format: "detect", ignoreMissing: true, languages: { haskell } },
        ],
      ];

      return options;
    },
  }).catch((e) => {
    console.error(e);
    throw e;
  });

  return post;
}

export async function getPosts(page = 1, limit = 6, searchParams: any) {
  // console.log("searchParams", searchParams);
  let postsPath: any = await fs.readdirSync(`${__dirname}/../posts`, {
    withFileTypes: true,
  });

  // MDX only
  postsPath = postsPath.filter((file: any) => {
    return path.extname(file.name).toLowerCase() === ".mdx";
  });

  // sort
  postsPath = postsPath.sort(function (a: any, b: any) {
    const aStat: any = fs.statSync(`${__dirname}/../posts/` + a.name);
    const bStat: any = fs.statSync(`${__dirname}/../posts/` + b.name);

    return bStat.birthtime - aStat.birthtime;
  });

  //container data variables
  let dataPost: {
    data: any[];
    total: any;
    filters: any;
  } = {
    data: [],
    total: 0,
    filters: [],
  };
  //define ignored items from MDX meta to filters
  let ignoreAttributes: any = [];
  //temp items in filters
  let attributesKey: any[] = [];
  //define filters
  let filters: any[] = [];

  for (const dirent of postsPath) {
    const file = await readFile(
      path.join(`${__dirname}/../posts`, dirent.name)
    );
    const { attributes }: any = parseFrontMatter(file.toString());

    //fillterong to get ignored attributesß
    ignoreAttributes.push(
      ...Object.keys(attributes).filter(
        (attr: any) => !attr.includes("data-") && attr
      )
    );

    //push data
    const pushDataAttr = () => {
      Object.keys(attributes).map((i) => attributesKey.push(i));

      const dataAttributes = Object.keys(attributes)
        .filter((r) => {
          if (!ignoreAttributes.includes(r)) {
            return r;
          }
        })
        .map((i) => {
          const temp: any = {};
          temp[i.split("-")[1]] = attributes[i];
          return temp;
        });

      dataPost.data.push({
        slug: dirent.name.replace(/\.mdx/, ""),
        //@ts-ignore
        subtitle: attributes.subtitle,
        description: attributes.description,
        title: attributes.title,
        image: attributes.image,
        ...dataAttributes.reduce((a, b) => Object.assign(a, b), {}),
        badges: [],
      });
    };
    pushDataAttr();
  }

  attributesKey = [...new Set(attributesKey)];

  //push filters
  const pushFilter = () => {
    attributesKey
      .filter((r) => {
        if (!ignoreAttributes.includes(r)) {
          return r;
        }
      })
      .map((item: any) => {
        const attr = item.split("-")[1];

        const temp: any = [];

        Object.keys(groupBy(dataPost.data, attr)).map((i: any) => {
          if (i.includes(",")) i = i.split(",");

          if (typeof i === "object") {
            i.forEach((j: any) => temp.push(j));
          } else {
            temp.push(i);
          }
        });

        filters.push({
          attribute: attr,
          data: temp,
        });
      });

    dataPost.filters = filters.map((key: any) => {
      key.data = [...new Set(key.data)];
      return key;
    });
  };
  pushFilter();

  //filtering from searchParams
  const filteringData = () => {
    for (const [key, value] of searchParams) {
      if (key !== "page" && key !== "limit" && key !== "_data")
        dataPost.data = dataPost.data.filter((item: any) => {
          return (
            item[key] &&
            item[key].some((v: string) => value.split(",").includes(v))
          );
        });
    }

    const paginated = paginator(dataPost.data, limit, page);

    //push badges
    dataPost.data.map((data: any) => {
      attributesKey
        .filter((i) => i.includes("data-"))
        .map((v) => {
          const key = v.split("-")[1];
          if (data[key]) {
            data.badges.push(data[key]);
          }
        });

      const badges: any = [];
      data.badges.map((badge: any) => badges.push(...badge));
      data.badges = badges;
    });

    if (limit === 0) {
      return dataPost;
    }

    return Object.assign(dataPost, paginated);
  };

  return filteringData();
}

// paginate
function paginator(items: any, per_page_items: number, current_page: number) {
  let page = current_page,
    per_page = per_page_items,
    offset = (page - 1) * per_page,
    paginatedItems = items.slice(offset).slice(0, per_page_items),
    total_pages = Math.ceil(items.length / per_page);

  return {
    data: paginatedItems,
    currentPage: page,
    per_page: per_page,
    pre_page: page - 1 ? page - 1 : null,
    next_page: total_pages > page ? page + 1 : null,
    total: items.length,
    total_pages: total_pages,
  };
}

function groupBy(arr: any, property: any) {
  return arr.reduce(function (memo: any, x: any) {
    if (!memo[x[property]]) {
      if (x[property]) memo[x[property]] = [];
    }
    if (x[property]) memo[x[property]].push(x);
    return memo;
  }, {});
}
