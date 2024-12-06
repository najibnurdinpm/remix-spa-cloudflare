import { useLocation, Link } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import { Badge, SliderPagintaion } from "../global";

interface IRecommendedData {
  title: string;
  slug: string;
  image: string;
  badges: string[];
}

interface IRecommended {
  recommendedPostsData: IRecommendedData[];
  type?: any;
  generatedRecommendedPostData: IRecommendedData[];
  autoGenerate?: boolean;
  sectionTitle?: string;
}

export default function BlogDetailRecommendedPosts({
  recommendedPostsData,
  type = "list",
  generatedRecommendedPostData,
  autoGenerate = false,
  sectionTitle = "Tutorial Series",
}: IRecommended) {
  const { pathname } = useLocation();
  const sliderRef: any = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlide, setTotalSlide] = useState(0);

  const isCard = type === "card";
  const Component = isCard ? Slider : "ol";
  const containerClass = isCard
    ? "[&_.slick-track]:flex [&_.slick-track]:gap-4"
    : "list-decimal pl-5";

  const sliderSettings: Settings = {
    dots: false,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: false,
    draggable: false,
    beforeChange(current, next) {
      setCurrentSlide(next);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideNextPrev = (next: boolean) => {
    if (next) sliderRef.current.slickNext();
    else sliderRef.current.slickPrev();
  };

  useEffect(() => {
    if (isCard) setTotalSlide(sliderRef.current.innerSlider.state.slideCount);
  }, [isCard, sliderRef]);

  const data = autoGenerate
    ? generatedRecommendedPostData
    : recommendedPostsData;

  return (
    <>
      <h2>
        {sectionTitle} : {data?.length} Articles
      </h2>
      <Component ref={sliderRef} {...sliderSettings} className={containerClass}>
        {data?.map((post) => {
          const { badges, image, slug, title } = post;
          const active = pathname.replace("/blog/", "") === slug;

          return (
            <>
              {isCard ? (
                <Link
                  key={slug}
                  to={"/blog/" + slug}
                  className="flex gap-3 justify-center items-center text-green !no-underline"
                >
                  <div className="flex-[1_0_55%]">
                    <img
                      src={image}
                      className="w-full pointer-events-none"
                      alt={slug}
                    />
                  </div>
                  <div className="flex-[1_0_45%]">
                    <h6 className="pointer-events-none">{title}</h6>
                    {active && (
                      <Badge className="pointer-events-none mt-3 w-fit">
                        Recently Opened
                      </Badge>
                    )}
                  </div>
                </Link>
              ) : (
                <li className="font-inter" key={slug}>
                  <Link
                    to={"/blog/" + slug}
                    className="text-green !no-underline"
                  >
                    {title}
                  </Link>
                </li>
              )}
            </>
          );
        })}
      </Component>
      {isCard && (
        <SliderPagintaion
          slideNextPrev={slideNextPrev}
          currentSlide={currentSlide}
          totalSlide={totalSlide}
        />
      )}
    </>
  );
}
