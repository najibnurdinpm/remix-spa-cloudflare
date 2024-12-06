// import { OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH } from "~/routes/resource.og";
const OG_IMAGE_HEIGHT = 400;
const OG_IMAGE_WIDTH = 400;

import meta from "~/data/meta.json";

export function dynamicMeta(location: any, baseUrl: string) {
  const pathName = location?.pathname;

  const metaObject: any = meta;
  const metaObjectFiltered: any = Object.keys(meta)
    .filter((key) => pathName.includes(key))
    .reduce((_obj, key) => {
      return metaObject[key];
    }, {});

  const title = metaObjectFiltered?.title;
  const description = metaObjectFiltered?.description;

  const ogImageUrl = `${baseUrl}/resource/og?title=${title}`;

  return [
    { title: `${title} ${pathName !== "/" ? "| Sledge" : ""}` },
    {
      name: "description",
      content: description,
    },
    {
      property: "og:title",
      content: `${title} ${pathName !== "/" ? "| Sledge" : ""}`,
    },
    {
      property: "og:description",
      content: description,
    },
    {
      property: "og:image",
      content: ogImageUrl,
    },
    {
      property: "og:image:width",
      content: String(OG_IMAGE_WIDTH),
    },
    {
      property: "og:image:height",
      content: String(OG_IMAGE_HEIGHT),
    },
    {
      property: "twitter:image",
      content: ogImageUrl,
    },
    {
      property: "twitter:title",
      content: `${title} ${pathName !== "/" ? "| Sledge" : ""}`,
    },
    {
      property: "twitter:description",
      content: description,
    },
  ];
}
