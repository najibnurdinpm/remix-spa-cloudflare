import { defer, LoaderFunction } from "@remix-run/node";
import {
  useActionData,
  useLoaderData,
  useSearchParams,
  useLocation,
} from "@remix-run/react";
import { useEffect, useState } from "react";
import { IconFilters } from "~/components/icon";
import { Section } from "~/components/layout";
import { GradientText } from "~/components/typography";
import { getPosts } from "~/utils/post";
import { Button } from "~/components/button";
import { Modal } from "~/components/global/Modal";
import { BlogCard, BlogMenu, BlogPagintaion } from "~/components/blog";

export const loader: LoaderFunction = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const page: any = searchParams.get("page") || 1;
  const limit: any = searchParams.get("limit") || 6;

  const data = await getPosts(page, Number(limit), searchParams);

  return defer(data);
};

export default function Blog() {
  let post = useLoaderData<typeof loader>();
  const [page, setPage] = useState(1);
  const actionData = useActionData();
  if (actionData) post = actionData;

  const { data, filters, currentPage, total, total_pages } = post;

  const [searchParams, setSearchParams]: any = useSearchParams();
  const location = useLocation();

  const getCurrenFIlters: any[] = [];
  const getCurrentPage: any = Number(searchParams.get("page")) || 1;

  //getCurrenFIlters data
  for (let [key, value] of searchParams) {
    if (key !== "page") {
      if (value.includes(",")) {
        value = value.split(",");
      }

      if (typeof value === "object") {
        value.map((j: any) => {
          getCurrenFIlters.push({
            key,
            value: j,
          });
        });
      } else {
        getCurrenFIlters.push({
          key,
          value,
        });
      }
    }
  }

  const [selectedState, setSelectedState] = useState({
    filters: getCurrenFIlters,
    page: getCurrentPage,
  });

  const [isModalOpen, setModalOpen] = useState(false);

  const handleSetSearchParams = (
    setState: any,
    key: string,
    selectedStateObject: any,
    value: string,
    activeFilters: boolean
  ) => {
    setState((prev: any) => {
      if (!activeFilters) {
        prev.set(
          key,
          [...new Set(selectedStateObject)]
            .filter((v: any) => v.key === key && v.value)
            .map((j: any) => j.key === key && j.value)
            .join(prev.has(key) ? "," : "")
        );
      } else {
        prev.set(
          key,
          [...new Set(selectedStateObject)]
            .filter((v: any) => v.key === key && v.value !== value && v.value)
            .map((j: any) => j.key === key && j.value)
        );
      }
      if (prev.get(key).split(",").includes("")) {
        prev.delete(key);
      }
      prev.set("page", 1);
      return prev;
    });
  };

  useEffect(() => {
    setPage(getCurrentPage);
  }, [location]);

  return (
    <>
      <Section
        animation={false}
        titleSize="small"
        title={
          <>
            <GradientText
              deg="96.7deg"
              className="from-[#43C6AC]/[17.72] to-[#F8FFAE]/[42.11]"
            >
              Sledge Help
            </GradientText>{" "}
          </>
        }
        subtitle={
          <>
            Lorem ipsum dolor sit amet consectetur. Tempus blandit aenean
            faucibus <br /> ultrices ut venenatis turpis risus. Placerat amet.
          </>
        }
      >
        <button
          className="flex px-4 py-2 gap-[10px] lg:hidden bg-[#1F1F1F] items-center rounded-[8px] mt-[24px] mx-auto"
          onClick={() => setModalOpen(true)}
        >
          <IconFilters />
          <span className="font-inter text-[14px] font-semibold leading-[14px] tracking-[-0.28px]">
            Filters
          </span>
        </button>

        <div className="max-w-[1070px] mx-auto flex flex-col lg:flex-row mt-[64px]">
          <BlogMenu
            selectedState={selectedState}
            setSearchParams={setSearchParams}
            filters={filters}
            handleSetSearchParams={handleSetSearchParams}
          />
          <Modal
            title="Filters"
            hideOnDesktop
            isModalOpen={isModalOpen}
            setModalOpen={setModalOpen}
          >
            <BlogMenu
              isMobile
              selectedState={selectedState}
              setSearchParams={setSearchParams}
              filters={filters}
              handleSetSearchParams={handleSetSearchParams}
            />
          </Modal>
          {!total ? (
            <div className="flex justify-center mt-20 lg:ml-auto w-full">
              <div className="flex items-center flex-col gap-5">
                <span className="font-inter text-[18px] text-white">
                  Can't find the instructions you need?
                </span>
                {/* TODO: maybe add go to contact us or open chat section button*/}
                <div className="flex gap-4">
                  <Button
                    to={"/blog"}
                    py="py-[12px] lg:py-[16.2px]"
                    px="px-[17px] lg:px-6"
                    className="min-w-[114px] md:min-w-0 w-fit"
                    variant={"borderAnimation"}
                    onClick={() => {
                      selectedState.filters = [];
                    }}
                  >
                    Reset Filters
                  </Button>
                  <Button
                    py="py-[12px] lg:py-[16.2px]"
                    px="px-[17px] lg:px-6"
                    active={true}
                    variant={"gradientBackground"}
                    buttonPosition={"center"}
                    onClick={() => {
                      const chatButton = document.querySelector<HTMLElement>(
                        ".woot-widget-bubble"
                      );
                      chatButton?.click();
                    }}
                  >
                    Get Support
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="lg:ml-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-[30px] mb-[9px]">
                {data.map((item: any, index: number) => {
                  return <BlogCard key={item.slug} item={item} />;
                })}
              </div>
            </div>
          )}
        </div>
      </Section>

      {!total ? null : (
        <BlogPagintaion
          firstPage={page}
          page={currentPage || page}
          lastPage={total_pages}
          totalData={total}
          setPage={setPage}
          setSearchParams={setSearchParams}
        />
      )}
    </>
  );
}
