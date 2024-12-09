import { useState, useEffect } from 'react';
import type { Highlighter } from 'shiki';
import { CardGradient } from '../card';

type CodePreviewProps = {
  code: string;
  language?: 'liquid' | 'html' | 'javascript' | 'shellscript';
  showLineNumber?: boolean;
  withWindow?: boolean;
};

export default function CodePreview({
  code = '',
  language = 'liquid',
  withWindow = false,
  showLineNumber = true,
}: CodePreviewProps) {
  const [highlighter, setHighlighter] = useState<Highlighter | null>(null);

  useEffect(() => {
    const loadHighlighter = async () => {
      try {
        const { getHighlighter } = await import('shiki');
        const highlighterInstance = await getHighlighter({
          theme: 'css-variables',
          langs: ['liquid', 'shellscript', 'html', 'javascript'],
          paths: {
            languages: '/assets/shiki/languages',
            themes: '/assets/shiki/themes',
            wasm: '/assets/shiki',
          },
        });
        setHighlighter(highlighterInstance);
      } catch (error) {
        console.error('Failed to load Shiki highlighter:', error);
      }
    };

    loadHighlighter();
  }, []);

  const renderCodeContent = () => {
    if (!highlighter) {
      return (
        <pre>
          <code>
            <span className="line" />
          </code>
        </pre>
      );
    }

    return (
      <div
        className="font-firacode"
        dangerouslySetInnerHTML={{
          __html: highlighter.codeToHtml(code, { lang: language }),
        }}
      />
    );
  };

  const codeElement = (
    <div className={`${showLineNumber ? 'preview-code' : ''} text-sm`}>
      {renderCodeContent()}
    </div>
  );

  if (withWindow) {
    return (
      <CardGradient
        parentPosition="center"
        contentPosition="center"
        mockup="window"
        windowColor={false}
        borderAnimation={false}
        gradient="linear-gradient(180.68deg, #676767 39.16%, #676767 39.16%, rgba(103,103,103,0) 58.4%)"
        delay="8s"
      >
        <div className="pt-[70px] pb-[24px] w-full px-[32px]">
          {codeElement}
        </div>
      </CardGradient>
    );
  }

  return codeElement;
}
