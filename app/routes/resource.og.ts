import type { LoaderArgs } from "@remix-run/node";
import { createOGImage } from "~/utils/createOGImage.server";
import { useEffect } from "react";

export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

// export const loader = async ({ request }: LoaderArgs) => {
//   const { origin, searchParams } = new URL(request.url);
//   const title = searchParams.get("title") ?? `Hello world`;

//   const png = await createOGImage(title, origin);

//   // Respond with the PNG buffer
//   return new Response(png, {
//     status: 200,
//     headers: {
//       // Tell the browser the response is an image
//       "Content-Type": "image/png",
//       // Tip: You might want to heavily cache the response in production
//       // 'cache-control': 'public, immutable, no-transform, max-age=31536000',
//     },
//   });
// };
