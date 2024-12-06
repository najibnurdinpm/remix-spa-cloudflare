import { ContentComponent } from "~/components/section/support";
import { GradientText } from "~/components/typography";
// import { IData } from "~/components/section/support/type";

const data = {
  hero: {
    title: (
      <div className="px-0 lg:px-20 xl:px-0">
        Privacy{" "}
        <GradientText
          deg="95.41deg"
          className="from-[#43C6AC]/[62.35] to-[#F8FFAE]/[84.6]"
        >
          Policy
        </GradientText>
      </div>
    ),
    subTitle: (
      <div className="px-5 lg:px-20 xl:px-0">
        Transparency is the key. We protect your data and respect your privacy
      </div>
    ),
    lastUpdate: "Jun 27,2023",
  },
  content: [
    {
      title: (
        <>
          Welcome to{" "}
          <GradientText
            deg="173deg"
            className="from-[#43C6AC]/[62.35] to-[#F8FFAE]/[84.6]"
          >
            Sledge
          </GradientText>
        </>
      ),
      description: (
        <>
          Sledge ("we," "us," or "our") take your privacy seriously. This privacy policy describe how we collects, handle, and disclose personal information in connection  with your use of our website.
          <br/><br/>
By accessing or using the Website, you acknowledge that you have read, understood, and agreed to the terms of this Privacy Policy.
        </>
      ),
    },
    {
      title: (
        <>
          Information We Collect
        </>
      ),
      description: (
        <>
          Personal information. Refer to information you provide to us, may include:
          <ul>
            <li>Account information, such as your first and last name, email address, phone number, physical address, company name, and company location.</li>
            <li>Payment information, to complete your order of our service.</li>
            <li>Optional information, including your preference on how to communicate with us for asking questions, feedback, comments or for marketing purpose.</li>
            <li>Usage data. Refer to information we may automatically collect about the way you interact with our website. This usage data may include information such as computer’s or mobile device operating system type, manufacturer, model, technical specification about the device, IP address, language setting, network information,browser type, referring URLs and general location information such as city or country.</li>
            <li>Cookies and similar technologies.</li>
            <li>Cookies are files sent to you6r browser and stored on your device. The purpose is to help you navigate between pages  efficiently, remembering your preference and personal setting, security purpose, help us understand user activity, and facilitating online advertising.</li>
            <li>Similar technologies such as beacons, tags, and scrips to collect and track information that will help us analyze and improve our service</li>
          </ul>
          <br/><br/>
          You can choose to disable cookies through your browser settings, but please note that certain features of the Website may not function properly as a result.
        </>
      ),
    },
    {
      title: (
        <>
          How We Use The Information
        </>
      ),
      description: (
        <>
          We may use the information we collect for various purposes, including but not limited to:

          <ul>
            <li>Provide, operate, and improve our service</li>
            <li>Processing and completing the transaction with you, and sending related information</li>
            <li>Improving our website and user experience</li>
            <li>Communicate with you about your account, including renewal, update, instruction, and so on.</li>
            <li>Communicate with you about our product and service, announcement, special offer, and administrative message.</li>
            <li>Provide customer support by responding to your question, request, and feedback, along with additional support.</li>
            <li>Conducting research or analysis </li>
            <li>Complying with applicable laws, lawful request, and legal process.</li>
          </ul>

          We will not sell, trade, or transfer your personal information to third parties without your consent, except as required by law or as necessary to fulfill our services.
        </>
      ),
    },
    {
      title: (
        <>
          Your Choices
        </>
      ),
      description: (
        <>
          Most browser let you remove or reject cookies. Follow the instruction in your browser settings to do this. Please note that by blocking or deleting all cookies on the Site, you may not be able to take full advantage of the site including unable to properly log in on to the site.For more information about cookies, including how to see what cookies have been set on your device, how to manage and delete them, visit https:///www.allaboutcookies.org/
        </>
      ),
    },
    {
      title: (
        <>
          Our Customer
        </>
      ),
      description: (
        <>
          Customer who separately use cookies or similar technologies on their website apart from Sledge are independently and solely responsible for management of the data collected through those cookies, compliance with all laws related to usage of these technologies and notifying End User as required by applicable laws.
        </>
      ),
    },
    {
      title: (
        <>
          Third-Party Links
        </>
      ),
      description: (
        <>
          Our Website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those third-party sites. We encourage you to review their respective privacy policies.
        </>
      ),
    },
    {
      title: (
        <>
          Data Security
        </>
      ),
      description: (
        <>
          We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or alteration. However, no security measures are completely secure, and we cannot guarantee absolute security.
        </>
      ),
    },
    {
      title: (
        <>
          Children's Privacy
        </>
      ),
      description: (
        <>
          Our Website is not intended for individuals under the age of 13. We do not knowingly collect personal information from children. If you believe that we may have collected information from a child under 13 without consent of the child’s parent or guardian as required by law we will promptly delete the information.
        </>
      ),
    },
    {
      title: (
        <>
          Updates to this Privacy Policy
        </>
      ),
      description: (
        <>
          We reserve the right to update or modify this Privacy Policy at any time. The updated policy will be posted on this page with the effective date. We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use, and protect your information.
        </>
      ),
    },
    {
      title: (
        <>
          Contact Us
        </>
      ),
      description: (
        <>
          If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at contact@sledge-app.com
        </>
      ),
    },
  ],
};

export default function PrivacyPolicy() {
  return (
    <>
      <ContentComponent
        hero={data.hero}
        content={data.content}
      ></ContentComponent>
    </>
  );
}
