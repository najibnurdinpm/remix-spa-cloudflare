import {
  json,
  type LoaderFunction,
  type V2_MetaFunction,
} from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { useEffect, useMemo } from "react";
import { getPost, getPosts } from "~/utils/post";
import { getMDXComponent } from "mdx-bundler/client";
import Code from "~/components/global/CodePreviewMDX";
import { Info } from "~/components/global";
import {
  BlogDetailHeader,
  BlogDetailRecommendedPosts,
} from "~/components/blog";
import { Button } from "~/components/button";

export const loader: LoaderFunction = async ({ params, request }) => {
  const slug = params.slug;
  const { origin } = new URL(request.url);
  const baseUrl = origin;

  if (!slug) throw new Response("Not found", { status: 404 });

  const post = await getPost(slug);
  console.log("postttt", post);
  const { frontmatter, code } = post;

  const apiUrl = new URL(
    `${baseUrl}/blog?topics=tutorials&technologies=${frontmatter[
      "data-technologies"
    ]?.join()}`
  );

  const generatedRecommendedPostData = (
    await getPosts(1, 0, apiUrl.searchParams)
  ).data;

  if (post) {
    return json({ frontmatter, code, baseUrl, generatedRecommendedPostData });
  } else {
    throw new Response("Not found", { status: 404 });
  }
};

export const meta: V2_MetaFunction = ({ data, matches }: any) => {
  const parentMeta = matches
    .flatMap((match: any) => match.meta ?? [])
    .filter(
      (meta: any) =>
        Object.keys(meta)[0] !== "title" &&
        meta.property !== "og:title" &&
        meta.property !== "og:description" &&
        meta.property !== "og:image" &&
        meta.property !== "twitter:image" &&
        meta.property !== "twitter:title" &&
        meta.property !== "twitter:description" &&
        meta.name !== "description"
    );

  return [
    ...parentMeta,
    {
      title: `${data?.frontmatter?.title?.replace(
        /(<([^>]+)>)/gi,
        ""
      )} | Sledge`,
    },
    {
      property: "og:title",
      content: `${data?.frontmatter?.title?.replace(
        /(<([^>]+)>)/gi,
        ""
      )} | Sledge`,
    },
    {
      name: "description",
      content: data?.frontmatter?.description.replace(/(<([^>]+)>)/gi, ""),
    },
    {
      property: "og:description",
      content: data?.frontmatter?.description.replace(/(<([^>]+)>)/gi, ""),
    },
    {
      property: "og:image",
      content: `${data.baseUrl}/${data?.frontmatter?.image}`,
    },
    {
      property: "twitter:image",
      content: `${data.baseUrl}/${data?.frontmatter?.image}`,
    },
    {
      property: "twitter:title",
      content: `${data?.frontmatter?.title?.replace(
        /(<([^>]+)>)/gi,
        ""
      )} | Sledge`,
    },
    {
      property: "twitter:description",
      content: data?.frontmatter?.description.replace(/(<([^>]+)>)/gi, ""),
    },
  ];
};

export default function BlogDetail() {
  const { code, frontmatter, generatedRecommendedPostData } = useLoaderData();
  const Component = useMemo(() => getMDXComponent(code), [code]);

  const recommendedPostsData = getRecommendedPosts(
    "tutorials",
    frontmatter["data-technologies"]?.join()
  );

  return (
    <>
      <BlogDetailHeader
        title={frontmatter.title}
        description={frontmatter.description}
        author={frontmatter.author}
        authorImage={frontmatter.authorImage}
        image={frontmatter.image}
        date={
          frontmatter.date &&
          new Date(frontmatter.date).toLocaleString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })
        }
      />
      <div className="bg-[#111111]">
        <img
          src="/assets/images/background-center.png"
          className="absolute mx-auto w-full top-[600px] md:top-[100px] lg:top-[-200px] z-0 pointer-events-none"
          alt=""
        />
        <div className="blog-content px-5 lg:px-0 max-w-[690px] m-auto pt-16 pb-24 relative">
          <Component
            components={{
              CodeMDX({ code, language, showLineNumber, withWindow }: any) {
                return (
                  <Code
                    showLineNumber={showLineNumber}
                    code={code}
                    withWindow={withWindow}
                    language={language}
                  />
                );
              },
              Info({ content }: any) {
                return <Info content={content} />;
              },
              Button({ children, to }: any) {
                return (
                  <Button
                    to={to}
                    target="_blank"
                    active={true}
                    variant="borderAnimation"
                    className={"!no-underline group w-[calc(180px_+_17px)]"}
                    textColor={"text-white !justify-start"}
                  >
                    {children}
                    <svg
                      className="absolute right-[18px] transition-all duration-200 group-hover:right-[13px]"
                      width={17}
                      height={17}
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.72266 4.34412L13.7693 8.39078L9.72266 12.4374"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.4375 8.39075H13.6575"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>
                );
              },
              RecommendedPosts({ type, autoGenerate, sectionTitle }: any) {
                return (
                  <BlogDetailRecommendedPosts
                    recommendedPostsData={recommendedPostsData}
                    generatedRecommendedPostData={generatedRecommendedPostData}
                    type={type}
                    autoGenerate={autoGenerate}
                    sectionTitle={sectionTitle}
                  />
                );
              },
            }}
          />
        </div>
      </div>
    </>
  );
}

function getRecommendedPosts(
  topics = "tutorials",
  technologies: "next.js" | "hydrogen"
) {
  const fetcher = useFetcher();
  const url = `/blog?topics=${topics}&technologies=${technologies}&limit=0`;

  useEffect(() => {
    if (fetcher.type === "init") fetcher.load(url);
  }, [fetcher, url]);

  return fetcher.data?.data;
}
