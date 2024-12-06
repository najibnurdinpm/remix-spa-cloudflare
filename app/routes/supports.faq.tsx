import { useState } from "react";
import { FadeInWhenVisible } from "~/components/animation";
import { InstallNowBtn } from "~/components/button";
import { Accordion } from "~/components/global";
import { IconGrayCircle } from "~/components/icon";
import { GradientText } from "~/components/typography";

const content = [
  {
    icon: <IconGrayCircle />,
    title: (
      <h3>
        <GradientText deg="97.17deg" className=" from-[#43C6AC] to-[#F8FFAE]">
          General
        </GradientText>{" "}
        questions
      </h3>
    ),
    subTitle: (
      <>
        General question regarding getting started with Sledge app, pricing and
        billing.
      </>
    ),
    accordions: [
      {
        id: 1,
        isHighlighted: false,
        question: "What is Sledge?",
        answer:
          "Sledge is a multipurpose app that empowers Shopify and Shopify Plus merchants to boost their development time and grow their brands. Sledge provides important features that merchants can use in just a few minutes while merchants can focus on building other store features.",
      },
      {
        id: 2,
        isHighlighted: false,
        question: "What features can I get from Sledge?",
        answer:
          "Instant search, Product Filters, Wishlist & Product Review are currently available for all Sledge users, we're also working on adding new features like Cookie Consent, Currency Converter, Related Products, Announcement Bar and Recently Viewed. More apps will be available in the future since we're always in active development.",
      },
      {
        id: 3,
        isHighlighted: false,
        question: "Is there additional charge for upcoming features?",
        answer:
          "No, upcoming features is already included in your current subscription. You won't be charged for new features.",
      },
      {
        id: 4,
        isHighlighted: false,
        question: "Do you offer free trial? How long?",
        answer:
          "Absolutely. You will have 14 days free trial and you can use all Sledge features.",
      },
      {
        id: 5,
        isHighlighted: false,
        question: "Is there a refund?",
        answer:
          "Currently we don't offer a refund, we strongly advise to optimize 14 days free before deciding to keep using Sledge or not.",
      },
    ],
  },
  {
    icon: <IconGrayCircle />,
    title: (
      <h3>
        <GradientText deg="97.17deg" className=" from-[#43C6AC] to-[#F8FFAE]">
          Development
        </GradientText>{" "}
        questions
      </h3>
    ),
    subTitle: (
      <>Development questions regarding Sledge's technical integration.</>
    ),
    accordions: [
      {
        id: 6,
        isHighlighted: false,
        question: "Do you have documentation I can look up?",
        answer:
          "Yes totally, we provide a documentation that covers wide area utilizing Sledge features, from basic integration to advanced customization. Go to Docs on top menu and you'll be redirected to our Documentation.",
      },
      {
        id: 7,
        isHighlighted: false,
        question: "What tech stack Sledge supports?",
        answer:
          "Sledge support Liquid by default, so it will works on your theme. However if you prefer a headless route, Sledge also supports Hydrogen and Next.js Commerce. Sledge also works on no-code tools like Webflow.",
      },
      {
        id: 8,
        isHighlighted: false,
        question: "Is Sledge injecting scripts to my theme?",
        answer:
          "Absolutely not! We hate it like you do! Sledge advocates developer to pick and build Sledge features based on your store requirement or store branding.",
      },
      {
        id: 9,
        isHighlighted: false,
        question: "Is it hard to implement Sledge features/widgets?",
        answer:
          "No at all! We provide basic features if you like to start with that and provide advanced customization if you need a more custom integration.",
      },
      {
        id: 10,
        isHighlighted: false,
        question: "Do you provide code sample?",
        answer:
          "Yes! Go to Docs on top menu and you'll be redirected to our Documentation, all code sample are available in our documentation.",
      },
      {
        id: 11,
        isHighlighted: false,
        question: "Do you support server side fetching?",
        answer:
          "Yes! Sledge default to render every API calls on the browser, but if you need to fetch data on the server we provide the API too.",
      },
    ],
  },
];

export default function Faq() {
  const [data, setData] = useState(content);

  function handleHover(
    firstIndex: number,
    secondIndex: number,
    condition: "in" | "out"
  ) {
    let items = [...data];
    let item = { ...items[firstIndex] };
    item.accordions[secondIndex].isHighlighted =
      condition === "in" ? true : false;
    if (condition === "out")
      items.map((v, i) => {
        v.accordions.map((j, k) => {
          j.isHighlighted = false;
        });
      });
    items[firstIndex] = item;
    setData(items);
  }

  return (
    <div>
      <Hero />
      <Content data={data} handleHover={handleHover} />
    </div>
  );
}

function Hero() {
  return (
    <div className="lg:max-w-[1440px] bg-dark2 overflow-hidden relative m-auto pt-[50px] lg:pt-[66px] md:pb-10 lg:pb-[72px] px-5 md:px-[45px] lg:px-20 xl:px-0">
      <FadeInWhenVisible
        variant={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        duration={1}
      >
        <div className="max-w-[1290px] m-auto text-center lg:text-left">
          <h1 className="text-4xl lg:text-[64px] leading-snug lg:leading-[76.8px] font-medium">
            Frequently{" "}
            <GradientText
              deg="97.17deg"
              className=" from-[#43C6AC] to-[#F8FFAE]"
            >
              Asked <br className="hidden lg:block" />
            </GradientText>
            Questions
          </h1>

          <InstallNowBtn
            variant="gradientBackground"
            buttonPosition="start"
            className="mt-10 mx-auto lg:mx-0 block lg:hidden w-fit"
            source={"Faq"}
          />
        </div>
      </FadeInWhenVisible>
      <FadeInWhenVisible
        variant={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        duration={1.5}
      >
        <img
          className="lg:absolute right-0 md:px-0 md:top-4 lg:bottom-0  lg:max-w-[45vw] xl:max-w-[750px] lg:mt-[50px]"
          src="/assets/images/faq-hero.png"
          alt="integration hero"
        />
      </FadeInWhenVisible>
    </div>
  );
}

function Content({ data, handleHover }: any) {
  return (
    <div className="lg:max-w-[1440px] relative m-auto pt-[50px] lg:pt-[80px] pb-[20px] lg:pb-[40px] px-5 lg:px-20 xl:px-0 bg-[#111111]">
      {data.map((ct: any, firstIndex: number) => {
        const { icon, title, subTitle, accordions } = ct;

        return (
          <FadeInWhenVisible
            variant={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            key={firstIndex}
          >
            <div className="grid grid-cols-1 xl:grid-flow-col-dense gap-x-[17px] max-w-[1292px] mx-auto mb-[60px] lg:mb-[100px]">
              <div className="lg:w-[520px] mb-[20px] lg:mb-[40px] xl:mb-0">
                <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-x-[32px] mb-[0px] lg:mb-[16px] text-[32px] md:text-[40px] font-medium leading-[48px] tracking-[-0.8px] space-y-[14px] lg:space-y-0">
                  {icon}
                  {title}
                </div>
                <p className="font-inter font-[400] text-[14px] lg:text-[16px] leading-[25.6px] tracking-[-0.32px] text-[#828282] lg:max-w-[416px] lg:ml-[104px] text-center lg:text-start">
                  {subTitle}
                </p>
              </div>
              <div className="lg:w-[751px] flex flex-col gap-4">
                {accordions.map((item: any, secondIndex: number) => {
                  const { question, answer, isHighlighted }: any = item;
                  return (
                    <div className="rounded-md" key={secondIndex}>
                      <Accordion
                        key={`accordion-${firstIndex}-${secondIndex}`}
                        className={`accordion-${firstIndex}-${secondIndex}`}
                        onMouseEnter={() =>
                          handleHover(firstIndex, secondIndex, "in")
                        }
                        onMouseLeave={() =>
                          handleHover(firstIndex, secondIndex, "out")
                        }
                        handleHover={handleHover}
                        question={question}
                        isHighlighted={isHighlighted}
                        answer={answer}
                      ></Accordion>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeInWhenVisible>
        );
      })}
    </div>
  );
}
