import { SHOPIFY_APPS_URL } from "~/utils/const";
import * as gtag from "~/utils/gtags.client";
import Button from "./Button";

export default function InstallNowBtn({
  variant,
  buttonPosition,
  className,
  source,
  children = (
    <>
      <span>Install Now</span>
    </>
  ),
}: {
  variant?: "borderAnimation" | "gradientBackground";
  buttonPosition?: "center" | "start" | "end";
  className?: string;
  source?: string;
  children?: any;
}) {
  // const { gaTrackingId } = useRouteLoaderData("root") as { gaTrackingId: any };
  return (
    <Button
      to={SHOPIFY_APPS_URL}
      target={"_blank"}
      active={true}
      variant={variant}
      buttonPosition={buttonPosition}
      className={className}
      onClick={() => {
        gtag.event({
          action: "install_now",
          category: "promotion",
          label: `Install Now - ${source}`,
          value: `Install Now - ${source}`,
        });
      }}
    >
      {children}
    </Button>
  );
}
