import { Resvg } from "@resvg/resvg-js";
import type { SatoriOptions } from "satori";
import satori from "satori";

// import { OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH } from "~/routes/resource.og";

const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;

declare module "react" {
  interface HTMLAttributes<T> {
    tw?: string;
  }
}

// Load the font from the "public" directory
const fontSans = (baseUrl: string) =>
  fetch(new URL(`${baseUrl}/fonts/Inter/Inter-ExtraBold.ttf`)).then((res) =>
    res.arrayBuffer()
  );

export async function createOGImage(title: string, requestUrl: string) {
  const fontSansData = await fontSans(requestUrl);
  const options: SatoriOptions = {
    width: OG_IMAGE_WIDTH,
    height: OG_IMAGE_HEIGHT,
    fonts: [
      {
        name: "Inter",
        data: fontSansData,
        style: "normal",
      },
    ],
  };

  // Design the image and generate an SVG with "satori"
  const svg = await satori(
    <div
      style={{
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        display: "flex",
      }}
    >
      <img src={`${requestUrl}/assets/images/opengraph/static.png`} />,
    </div>,
    options
  );
  // const svg = await satori(
  //   <div
  //     tw="bg-red-300"
  //     style={{
  //       width: options.width,
  //       height: options.height,
  //       background: "linear-gradient( 135deg, #FD6585 10%, #0D25B9 100%)",
  //       color: "white",
  //       fontFamily: "Inter",
  //       fontSize: 100,
  //       display: "flex",
  //       alignItems: "center",
  //       justifyContent: "center",
  //     }}
  //   >
  //     <div>{title}</div>
  //   </div>,
  //   options
  // );

  // Convert the SVG to PNG with "resvg"
  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  return pngData.asPng();
}
