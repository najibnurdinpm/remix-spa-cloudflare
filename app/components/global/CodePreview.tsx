import { useEffect, useState } from "react";
import { CardGradient } from "../card";

type ICodePreview = {
  code: string;
  language: "liquid" | "html" | "javascript" | "shellscript";
  showLineNumber?: boolean;
  withWindow?: boolean;
};
export default function CodePreview({
  code = ``,
  language = "liquid",
  withWindow = false,
  showLineNumber = true,
}: ICodePreview) {
  let [highlighter, setHighlighter]: any = useState();

  useEffect(() => {
    import("shiki").then((d) => {
      d.getHighlighter({
        theme: "css-variables",
        langs: ["liquid", "shellscript"],
        paths: {
          languages: "../assets/shiki/languages",
          themes: "../assets/shiki/themes",
          wasm: "../assets/shiki",
        },
      }).then((d) => setHighlighter(d));
    });
  }, []);

  return (
    <>
      {!withWindow ? (
        <div className={`${showLineNumber ? "preview-code" : ""} text-sm`}>
          {!highlighter ? (
            <pre>
              <code>
                <span className="line" />
              </code>
            </pre>
          ) : (
            <div
              className="font-firacode"
              dangerouslySetInnerHTML={{
                __html: highlighter.codeToHtml(code, { lang: language }),
              }}
            />
          )}
        </div>
      ) : (
        <CardGradient
          parentPosition="center"
          contentPosition="center"
          mockup="window"
          windowColor={false}
          borderAnimation={false}
          gradient={
            "linear-gradient(180.68deg, #676767 39.16%, #676767 39.16%, rgba(103,103,103,0) 58.4%)"
          }
          delay={"8s"}
        >
          <div className=" pt-[70px] pb-[24px] w-full px-[32px]">
            <div className={`${showLineNumber ? "preview-code" : ""} text-sm`}>
              {!highlighter ? (
                <pre>
                  <code>
                    <span className="line" />
                  </code>
                </pre>
              ) : (
                <div
                  className="font-firacode"
                  dangerouslySetInnerHTML={{
                    __html: highlighter.codeToHtml(code, { lang: language }),
                  }}
                />
              )}
            </div>
          </div>
        </CardGradient>
      )}
    </>
  );
}
