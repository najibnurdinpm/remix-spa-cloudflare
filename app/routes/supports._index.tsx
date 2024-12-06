import { Button } from "~/components/button";
import { Input, Link } from "~/components/global";
import { IconSend } from "~/components/icon";
import { Section } from "~/components/layout";
import { GradientText } from "~/components/typography";

export default function Support() {
  return (
    <div className="flex max-w-[1290px] mx-auto pb-[72px]">
      <div className="min-w-[553px] hidden xl:flex flex-col">
        <img
          src="/assets/images/bg-shading.jpg"
          alt="shading"
          width={865.05}
          height={713.51}
          className="absolute h-[713.51px] -z-50 mt-14 left-[-340px] brightness-[80%]"
        />
        <img
          width={381.78}
          height={201.53}
          src="/assets/images/support-hero-2.png"
          alt="support page"
          className="mt-[170px]"
        />
        <div className="space-y-3 mt-auto">
          <h1 className="font-medium text-[32px] leading-[38.4px] tracking-[-0.64px]">
            Striving to Listen to What
            <br /> Users Have to Say
          </h1>
          <p className="font-inter font-medium text-[16px] leading-[25.6px] tracking-[-0.32px] text-[#828282]">
            Duis varius in malesuada nunc faucibus. Amet integer <br /> maecenas
            cursus feugiat a. Urna sodales ullamcorper <br /> ac adipiscing
            morbi malesuada.
          </p>
        </div>
      </div>
      <div className="w-full relative">
        <img
          src="/assets/images/support-page.png"
          className="absolute right-20 top-5 hidden md:block xl:hidden max-w-[250px] lg:max-w-sm"
          alt="support page"
        />
        <Section
          position="start"
          pb="pb-0"
          title={
            <>
              We're{" "}
              <GradientText
                deg="95.97deg"
                className="from-[#43C6AC]/[34.74] to-[#F8FFAE]/[73.44] max-w-[770px]"
              >
                Here
              </GradientText>{" "}
              to Help
            </>
          }
          subtitle={
            <div className="max-w-full md:max-w-[354px] xl:max-w-full">
              Duis varius in malesuada nunc faucibus. Amet integer maecenas
              cursus feugiat a. Urna sodales ullamcorper ac adipiscing morbi
              malesuada.
            </div>
          }
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[110px]">
            <Input
              labelText="First Name"
              name="first_name"
              placeholder="Edward"
            />
            <Input
              labelText="Last Name"
              name="last_name"
              placeholder="Newgate"
            />
            <Input
              labelText="Email"
              name="email"
              placeholder="example@gmail.com"
              type="email"
              colSpan="col-span-2"
            />
            <Input
              labelText="Message"
              name="message"
              placeholder="Send us about your message..."
              element={"textarea"}
              colSpan="col-span-2"
            />
            <div className="flex flex-wrap justify-between mt-[32px] col-span-2 gap-y-[20px]">
              <div className="flex gap-[16px] items-center">
                <div className="relative flex justify-center items-center cursor-pointer">
                  <img
                    width={20}
                    height={20}
                    src="/assets/images/checkbox-border.png"
                    alt=""
                  />
                  <input
                    className="bg-transparent absolute top-[1px] border-0 focus:border-0 focus:ring-0 focus:ring-offset-0 checked:bg-transparent 
                    text-transparent cursor-pointer"
                    type="checkbox"
                    name="agree"
                    id="agree"
                  />
                </div>
                <label
                  htmlFor="agree"
                  className="font-inter font-medium text-[#677487] text-[14px] leading-[22.4px] tracking-[-0.28px]"
                >
                  You agree to our friendly{" "}
                  <Link className="underline" to="/supports/privacy-policy">
                    privacy policy
                  </Link>
                  .
                </label>
              </div>
              <Button variant="gradientBackground" active={true}>
                <div className="flex gap-x-[8px]">
                  <IconSend />
                  Send Message
                </div>
              </Button>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
