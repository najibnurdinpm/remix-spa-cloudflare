import type { V2_MetaFunction } from "@remix-run/node";
import { Background } from "~/components/background";
import { CodePreview } from "~/components/global";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Blog Detail | Sledge" }];
};

const code = `<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@sledge-app/js@latest/dist/style.css"
/>

<script data-sledge-api-key="API-Key-from-Admin-Panel"
data-sledge-instant-search-api-key="Instant-Search-API-Key-from-
Admin-Panel"
data-user-id="user-id-from-your-website" 
data-user-fullname="user-fullname-from-your-website" id="sledge-
embed-script" src="https://cdn.jsdelivr.net/npm/@sledge-app/js@latest/dist/sledge.min.js">
</script>`;

export default function BlogDetail() {
  return (
    <>
      <BlogHeader />
      <Background
        className="top-[-199px] md:top-[-350px] left-[-150px] md:left-[-100px] z-[82]"
        position={"center"}
      />
      <BlogContent />
    </>
  );
}

function BlogHeader() {
  return (
    <div className="relative z-[9999] bg-dark">
      <div className="flex justify-center max-w-[1070px] px-5 lg:px-20 xl:px-0 flex-col mx-auto pt-12 lg:pb-[64px] z-[1]">
        <div className="flex flex-col md:flex-row gap-[80px]">
          <div className="flex flex-col">
            <div>
              <h2 className="font-medium text-[40px] leading-[56px] tracking-[-0.8px]">
                What’s new in v1.0?
              </h2>
              <p className="max-w-[550px] mt-[16px] font-inter text-[16px] leading-[25.6px] tracking-[-0.32px] text-gray-3">
                A franchised restaurant is a restaurant operated by a local
                businessperson trading under the McDonald's name. Currently over
                88% of our restaurants in the UK are franchised, but from a
                customer point of view, there's no noticeable difference. For
                employees however.
              </p>
            </div>
            <div className="flex justify-between mt-[32px] lg:mt-auto">
              <div className="flex gap-[16px] items-center">
                <img
                  className="rounded-[360px]"
                  src="/assets/images/blog-detail_profile.png"
                  width={32}
                  height={32}
                  alt="profile picture"
                />
                <span className="font-inter text-[16px] leading-[25.6px] tracking-[-0.32px] text-gray-3">
                  Courtney Henry
                </span>
              </div>
              <span className="font-inter text-[16px] leading-[25.6px] tracking-[-0.32px] text-gray-3">
                21 March 2023
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-[linear-gradient(155deg,_#43C6AC_0%,_#F8FFAE_100%)] rounded-[24px] w-fit h-[478px] px-[113px] text-[#000]">
            <h3 className="font-[600] font-inter text-[80px] leading-[80px] tracking-[-1.6px]">
              V1.0
            </h3>
            <p className="font-medium font-inter text-[16px] leading-[25.6px] tracking-[-0.32px]">
              Sledge Update New Updated
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogContent() {
  return (
    <div className="bg-[#111] relative">
      <div className="max-w-[690px] flex justify-center px-5 lg:px-20 xl:px-0 flex-col mx-auto lg:pt-12 pb-[60px] lg:pb-[100px]">
        <h3 className="text-[32px] leading-[44.8px] tracking-[-0.64px] capitalize mt-[48px] mb-[16px]">
          Integration With Webflow
        </h3>
        <p className="font-inter text-[16px] leading-[25.6px] tracking-[-0.32px] text-gray-3">
          A franchised restaurant is a restaurant operated by a local
          businessperson trading under the McDonald's name. Currently over 88%
          of our restaurants in the UK are franchised, but from a customer point
          of view, there's no noticeable difference. For employees however.
        </p>
        <img
          className="my-[40px]"
          width={248}
          height={72}
          src="/assets/images/blog-detail_integration.png"
          alt="integration"
        />
        <p className="font-inter text-[16px] leading-[25.6px] tracking-[-0.32px] text-gray-3 mb-[64px]">
          Lorem ipsum dolor sit amet consectetur. Nulla pretium cras ut iaculis
          est pellentesque porttitor. Tempor fringilla vestibulum bibendum
          viverra volutpat in porta at. Luctus dolor faucibus odio ut eget sed
          sit. Morbi a sodales elementum porta cras gravida a vel. Mus porttitor
          eget odio at. Purus dui lectus sapien commodo quis arcu. Nibh egestas
          facilisis porttitor dictumst sem semper cras fermentum. Cras mollis
          tincidunt dolor in habitant porta at. Purus sed mauris lectus
          imperdiet et quam viverra non arcu.
        </p>

        <CodePreview
          showLineNumber={false}
          code={code}
          withWindow={true}
          language={"javascript"}
        />
        <h3 className="text-[32px] leading-[44.8px] tracking-[-0.64px] capitalize mt-[48px] mb-[16px]">
          Changed the Other
        </h3>
        <p className="font-inter text-[16px] leading-[25.6px] tracking-[-0.32px] text-gray-3">
          Previously, others would be reset as soon as a reconnect would happen
          under the hood, even if that reconnect happened quickly. This meant
          that even if a network interuption lasted just milliseconds, live
          avatars or other presence indicators would have a flash of unrendered
          content, before reappearing. We’ve fixed this. In Liveblocks 1.1,
          others will ignore short reconnections, similar to the lost connection
          API, and will only reset if a noticeable problem occurs, preventing
          any unwanted user interface flashes.
        </p>
        <h3 className="text-[32px] leading-[44.8px] tracking-[-0.64px] capitalize mt-[48px] mb-[16px]">
          Configuring the lost connection timeout
        </h3>
        <p className="font-inter text-[16px] leading-[25.6px] tracking-[-0.32px] text-gray-3">
          It’s possible to configure how quickly you’d like to inform your users
          about problems reconnecting using the new lostConnectionTimeout client
          option. The default value is 5 seconds, and we recommend setting it
          between 3 and 15 seconds.
        </p>
      </div>
    </div>
  );
}
