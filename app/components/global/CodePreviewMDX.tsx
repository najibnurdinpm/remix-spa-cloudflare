import { useEffect, useState } from "react";
import { CardGradient } from "~/components/card";
import { IntegrationBadge } from "~/components/global";
import { IconCopy } from "~/components/icon";

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
  const [copiedActive, setCopiedActive] = useState(false);

  const copy = (code: string) => {
    setCopiedActive(true);
    setTimeout(() => setCopiedActive(false), 3000);

    // copy function
    navigator.clipboard.writeText(code);
  };

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


  const Code = () => !withWindow ? (
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
      gradient="linear-gradient(180deg, #43C6AC 48%, #F8FFAE 50%, #151515 51.6%)"
      delay="8s"
      className="mdx-code"
    >
      <div className=" pt-[60px] pb-[16px] w-full px-[32px]">
        <div className={`${showLineNumber ? "preview-code" : ""} text-sm`}>
          {!highlighter ? (
            <pre>
              <code>
                <span className="line" />
              </code>
            </pre>
          ) : (
            <div
              className="font-firacode not-italic"
              dangerouslySetInnerHTML={{
                __html: highlighter.codeToHtml(code, { lang: language }),
              }}
            />
          )}
        </div>
      </div>
    </CardGradient>
  )

  return (
    <div className="flex gap-6 relative">
      <Code />

      <div
        className="w-12 absolute -right-16 top-4 z-10 hidden md:block"
        onClick={() =>
          copy(code)
        }
      >
        <IntegrationBadge
          roundedFull={false}
          icon={<IconCopy />}
          size="xs"
          pointerEvent={true}
        />
        {copiedActive && (
          <div className="absolute">copied</div>
        )}
      </div>
    </div>
  );
}
