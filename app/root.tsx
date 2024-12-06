import { cssBundleHref } from "@remix-run/css-bundle";
import {
  json,
  LinksFunction,
  LoaderArgs,
  V2_MetaFunction,
} from "@remix-run/node";
import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useRouteError,
} from "@remix-run/react";

import { Layout } from "./components/layout";
import tailwindStyles from "~/styles/tailwind.css?url";
import { dynamicMeta } from "~/utils/dynamicMeta";

import * as gtag from "~/utils/gtags.client";
import { useEffect } from "react";

export const meta: V2_MetaFunction = () => {
  const location = useLocation();

  return dynamicMeta(location, window.location.origin);
};

export const links: LinksFunction = () => [
  {
    rel: "icon",
    href: "/favicon.png",
    type: "image/png",
  },
  ...(cssBundleHref
    ? [
        { rel: "stylesheet", href: cssBundleHref },
        { rel: "stylesheet", href: tailwindStyles },
      ]
    : [{ rel: "stylesheet", href: tailwindStyles }]),
];

export default function App() {
  const location = useLocation();
  const gaTrackingId = import.meta.env.VITE_GA_TRACKING_ID; // Misalnya menggunakan environment variable

  useEffect(() => {
    if (gaTrackingId?.length) {
      gtag.pageview(location.pathname, gaTrackingId);
    }
  }, [location, gaTrackingId]);


  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-dark text-white antialiased">
        <GoogleAnalyticsScript gaTrackingId={gaTrackingId} />
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function GoogleAnalyticsScript({
  gaTrackingId,
}: {
  gaTrackingId: string | any;
}) {
  return !gaTrackingId ? null : (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
      />
      <script
        async
        id="gtag-init"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${gaTrackingId}', {
                page_path: window.location.pathname,
              });
            `,
        }}
      />
    </>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  const routeError: any = useRouteError();

  const isRouteError = isRouteErrorResponse(routeError);

  //TODO: save for later
  const isNotFoundPost = routeError.message.includes(
    "no such file or directory"
  );

  let title = "Whoops! Something Wrong.";
  let pageType = "page";

  if (isRouteError) {
    title = "Not found";
    if (routeError.status === 404) pageType = routeError.data || pageType;
  }

  return (
    <html className="h-full" lang={"en"}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{title}</title>
        <Meta />
        <Links />
      </head>
      <body className="bg-dark h-full">
        <div className="min-h-screen h-full lg:h-fit">
          {isRouteError ? (
            <>
              {routeError.status === 404 ? (
                <NotFound type={pageType} />
              ) : (
                <GenericError
                  error={{ message: `${routeError.status} ${routeError.data}` }}
                />
              )}
            </>
          ) : (
            <GenericError error={error instanceof Error ? error : undefined} />
          )}
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function GenericError({
  error,
}: {
  error?: { message: string; stack?: string };
}) {
  const heading = (
    <h1 className="text-[48px] lg:text-[min(10vw,_144px)] font-medium leading-[48px] lg:leading-[min(10vw,_144px)] tracking-[-2.88px]">
      <span className="bg-[linear-gradient(102deg,_#43C6AC_9.83%,_#F8FFAE_58.53%)] bg-clip-text [-webkit-text-fill-color:transparent]">
        Whoops!
      </span>{" "}
      Something Wrong.
    </h1>
  );
  let description = `We’re investigating the problem impacting demo store outage, sorry for the inconvenience. Please come back later.`;

  // TODO hide error in prod?
  if (error) {
    description += `\n${error.message}`;
    // eslint-disable-next-line no-console
    console.error(error);
  }

  return (
    <div
      className="pt-[80px] pb-[56px] flex flex-col-reverse lg:flex-row gap-[57px] lg:gap-0 text-white text-center lg:text-start 
      justify-center lg:justify-start mx-auto max-w-[1440px] [@media(max-width:1440px)]:overflow-x-hidden min-h-screen h-full"
    >
      <div className="flex flex-col max-w-[625px] mx-auto lg:m-0 px-[40px] lg:px-[80px] lg:pr-[0] h-full lg:h-auto">
        {heading}
        <p className="font-inter text-[14px] lg:text-[20px] leading-[22.4px] lg:leading-[32px] tracking-[-0.4px] mt-[16px] max-w-[515px]">
          {description}
        </p>
        {error?.stack && (
          <pre
            style={{
              padding: "2rem",
              background: "hsla(10, 50%, 50%, 0.1)",
              color: "red",
              overflow: "auto",
              maxWidth: "100%",
              marginTop: "20px",
            }}
            dangerouslySetInnerHTML={{
              __html: addLinksToStackTrace(error.stack),
            }}
          />
        )}
        <a
          href="mailto:support@sledge-app.com"
          target={"_blank"}
          className="font-inter text-[14px] lg:text-[20px] leading-[22.4px] lg:leading-[32px] tracking-[-0.4px] font-normal mt-auto"
        >
          support@sledge-app.com
        </a>
      </div>
      <div className="w-full">
        <img
          className="max-w-[223.64px] w-full lg:max-w-full max-h-[656.43px] m-auto lg:ml-[60px]"
          src="/assets/images/whoops.png"
          alt="whoops"
        />
      </div>
    </div>
  );
}

export function NotFound({ type = "page" }: { type?: string }) {
  const heading = `We’ve lost this ${type}`;
  const description = `We couldn’t find the ${type} you’re looking for. Try checking the URL or heading back to the home page.`;

  return (
    <div className="container">
      <h1>{heading}</h1>
      <h5>{description}</h5>
    </div>
  );
}

function addLinksToStackTrace(stackTrace: string) {
  return stackTrace?.replace(
    /^\s*at\s?.*?[(\s]((\/|\w\:).+)\)\n/gim,
    (all, m1) =>
      all.replace(
        m1,
        `<a href="vscode://file${m1}" class="hover:underline">${m1}</a>`
      )
  );
}
