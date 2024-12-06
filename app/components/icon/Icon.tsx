import { AnimatePresence, motion } from "framer-motion";

type IIcon = {
  fill?: string;
  className?: string;
  isActive?: boolean;
  width?: string;
  height?: string;
  animationOnCard?: boolean;
};

export function IconEllipse({ fill = "currentColor", className }: IIcon) {
  return (
    <svg
      width="12.06"
      height="12.06"
      viewBox="0 0 12.06 12.06"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="6.02804" cy="6.11202" r="6.02804" fill={fill} />
    </svg>
  );
}

export function IconArrow({ fill = "currentColor", className }: IIcon) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2.66699 7.8171C2.66699 7.56397 2.85509 7.35477 3.09915 7.32166L3.16699 7.3171L11.9563 7.3175L8.781 4.15514C8.58532 3.9603 8.58464 3.64372 8.77948 3.44804C8.95661 3.27015 9.23435 3.25341 9.4304 3.39822L9.48658 3.44652L13.5199 7.46252C13.5457 7.4882 13.5681 7.516 13.5871 7.54535C13.5925 7.55418 13.598 7.56322 13.6031 7.57244C13.6079 7.58035 13.6122 7.58855 13.6163 7.59685C13.6219 7.60893 13.6274 7.6214 13.6325 7.63413C13.6365 7.64394 13.6399 7.65348 13.643 7.6631C13.6467 7.67503 13.6503 7.68774 13.6534 7.70065C13.6557 7.70966 13.6575 7.71833 13.659 7.72704C13.6613 7.73999 13.6632 7.7534 13.6645 7.76696C13.6657 7.77731 13.6664 7.78756 13.6668 7.79782C13.6669 7.80404 13.667 7.81055 13.667 7.8171L13.6667 7.83647C13.6664 7.84628 13.6657 7.85608 13.6647 7.86586L13.667 7.8171C13.667 7.84865 13.6641 7.87952 13.6585 7.90945C13.6572 7.9166 13.6556 7.92394 13.6539 7.93125C13.6504 7.9463 13.6463 7.96079 13.6415 7.975C13.6392 7.98206 13.6365 7.9896 13.6336 7.99709C13.6278 8.01214 13.6214 8.02648 13.6145 8.04045C13.6112 8.04702 13.6076 8.05389 13.6038 8.0607C13.5975 8.07181 13.5911 8.08236 13.5843 8.09265C13.5795 8.09993 13.5742 8.10751 13.5686 8.11496L13.5643 8.12073C13.5508 8.13833 13.5362 8.155 13.5205 8.17065L13.5199 8.17111L9.48661 12.1878C9.29095 12.3826 8.97436 12.382 8.77951 12.1863C8.60236 12.0084 8.5868 11.7306 8.73244 11.5352L8.78097 11.4792L11.955 8.3175L3.16699 8.3171C2.89085 8.3171 2.66699 8.09324 2.66699 7.8171Z"
        fill={fill}
      />
    </svg>
  );
}

export function IconCaret({ fill = "currentColor", className }: IIcon) {
  return (
    <svg
      className={className}
      fill={fill}
      width="18px"
      height="18px"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      stroke="{fill}"
      transform="matrix(1, 0, 0, 1, 0, 0)"
    >
      <g strokeWidth={0} />
      <g strokeLinecap="round" strokeLinejoin="round" />
      <g>
        <path d="M96,212a4,4,0,0,1-2.82861-6.82837L170.34326,128,93.17139,50.82837a4.00009,4.00009,0,0,1,5.65722-5.65674l80,80a4,4,0,0,1,0,5.65674l-80,80A3.98805,3.98805,0,0,1,96,212Z" />
      </g>
    </svg>
  );
}

export function IconDrawer({ fill = "currentColor", className }: IIcon) {
  return (
    <svg
      className={className}
      width={30}
      height={26}
      viewBox="0 0 30 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.25"
        y="0.25"
        width="29.5"
        height="5.5"
        rx="2.75"
        fill="#484848"
        stroke="url(#paint0_linear_1176_17918)"
        strokeWidth="0.5"
      />
      <rect
        x="0.25"
        y="10.25"
        width="29.5"
        height="5.5"
        rx="2.75"
        fill="#484848"
        stroke="url(#paint1_linear_1176_17918)"
        strokeWidth="0.5"
      />
      <rect
        x="0.25"
        y="20.25"
        width="29.5"
        height="5.5"
        rx="2.75"
        fill="#484848"
        stroke="url(#paint2_linear_1176_17918)"
        strokeWidth="0.5"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1176_17918"
          x1="8.5"
          y1="4.5"
          x2="10.5"
          y2={-2}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#676767" />
          <stop offset={1} stopColor="#676767" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1176_17918"
          x1="16.5"
          y1="6.5"
          x2={15}
          y2={16}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#676767" />
          <stop offset={1} stopColor="#676767" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1176_17918"
          x1={12}
          y1={27}
          x2="13.5"
          y2={20}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#676767" />
          <stop offset={1} stopColor="#676767" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconTwitter({ fill = "currentColor", className }: IIcon) {
  return (
    <svg
      className={className}
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.5841 5.75952C26.6099 6.19118 25.5634 6.48285 24.4632 6.61468C25.5984 5.93544 26.4477 4.86639 26.8526 3.60702C25.7861 4.2405 24.6188 4.68641 23.4016 4.92535C22.583 4.05136 21.4988 3.47206 20.3173 3.2774C19.1358 3.08274 17.923 3.28361 16.8674 3.84881C15.8117 4.41402 14.9722 5.31194 14.4791 6.40317C13.986 7.4944 13.867 8.71789 14.1406 9.88368C11.9796 9.77518 9.86548 9.21349 7.93558 8.23507C6.00567 7.25665 4.30306 5.88337 2.93825 4.20435C2.47158 5.00935 2.20325 5.94268 2.20325 6.93668C2.20273 7.83151 2.42309 8.71263 2.84477 9.50187C3.26646 10.2911 3.87644 10.9641 4.62058 11.461C3.75757 11.4336 2.9136 11.2004 2.15892 10.7808V10.8508C2.15883 12.1059 2.59295 13.3223 3.38763 14.2937C4.18231 15.2651 5.28858 15.9316 6.51875 16.1802C5.71816 16.3969 4.87881 16.4288 4.06408 16.2735C4.41116 17.3534 5.08724 18.2977 5.99768 18.9743C6.90811 19.6508 8.00732 20.0257 9.14142 20.0465C7.21622 21.5578 4.83862 22.3776 2.39108 22.374C1.95753 22.3741 1.52434 22.3488 1.09375 22.2982C3.57814 23.8956 6.47015 24.7433 9.42375 24.74C19.4221 24.74 24.8879 16.459 24.8879 9.27702C24.8879 9.04368 24.8821 8.80802 24.8716 8.57468C25.9348 7.80582 26.8525 6.85373 27.5817 5.76302L27.5841 5.75952Z"
        fill={fill}
      />
    </svg>
  );
}

export function IconYoutube({ fill = "currentColor", className }: IIcon) {
  return (
    <svg
      className={className}
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_823)">
        <path
          d="M27.4174 7.59175C27.2588 7.02619 26.95 6.51415 26.5237 6.11008C26.0854 5.69359 25.5482 5.39566 24.9627 5.24442C22.7717 4.66692 13.9937 4.66692 13.9937 4.66692C10.3343 4.62528 6.67572 4.80841 3.03872 5.21525C2.45328 5.37767 1.91704 5.68225 1.47772 6.10192C1.04605 6.51725 0.733387 7.02942 0.570053 7.59058C0.177695 9.70429 -0.0129393 11.8505 0.000720047 14.0003C-0.01328 16.1481 0.176887 18.2936 0.570053 20.4099C0.729887 20.9688 1.04139 21.4786 1.47422 21.8904C1.90705 22.3023 2.44605 22.5998 3.03872 22.7573C5.25889 23.3336 13.9937 23.3336 13.9937 23.3336C17.6578 23.3753 21.321 23.1922 24.9627 22.7853C25.5482 22.634 26.0854 22.3361 26.5237 21.9196C26.9554 21.5078 27.2622 20.9956 27.4162 20.4379C27.8188 18.325 28.0146 16.1779 28.0007 14.0271C28.031 11.8671 27.8355 9.70991 27.4174 7.59058V7.59175ZM11.2031 17.9949V10.0068L18.5064 14.0014L11.2031 17.9949Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_823">
          <rect width={28} height={28} fill={fill} />
        </clipPath>
      </defs>
    </svg>
  );
}

export function IconLinkedin({ fill = "currentColor", className }: IIcon) {
  return (
    <svg
      className={className}
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.16553 3.31084C1.16553 2.74213 1.39145 2.19671 1.79359 1.79457C2.19573 1.39243 2.74115 1.16651 3.30986 1.16651H24.6855C24.9674 1.16605 25.2465 1.22118 25.507 1.32875C25.7675 1.43632 26.0043 1.59422 26.2037 1.7934C26.403 1.99258 26.5612 2.22913 26.6691 2.48952C26.7769 2.7499 26.8323 3.029 26.8322 3.31084V24.6865C26.8325 24.9684 26.7772 25.2476 26.6695 25.5081C26.5618 25.7686 26.4038 26.0053 26.2045 26.2047C26.0053 26.4041 25.7686 26.5622 25.5082 26.6701C25.2477 26.7779 24.9686 26.8333 24.6867 26.8332H3.30986C3.02817 26.8332 2.74923 26.7777 2.48899 26.6698C2.22875 26.562 1.99231 26.4039 1.79318 26.2047C1.59404 26.0055 1.43611 25.7689 1.32842 25.5086C1.22073 25.2483 1.16537 24.9694 1.16553 24.6877V3.31084ZM11.3249 10.9525H14.8004V12.6978C15.302 11.6945 16.5854 10.7915 18.5139 10.7915C22.211 10.7915 23.0872 12.79 23.0872 16.4568V23.2492H19.3457V17.2922C19.3457 15.2038 18.844 14.0255 17.57 14.0255C15.8025 14.0255 15.0675 15.296 15.0675 17.2922V23.2492H11.3249V10.9525ZM4.90819 23.0893H8.65086V10.7915H4.90819V23.0882V23.0893ZM9.18636 6.78051C9.19342 7.10096 9.1364 7.41959 9.01864 7.71771C8.90089 8.01582 8.72477 8.28742 8.50063 8.51654C8.27649 8.74567 8.00884 8.92773 7.71339 9.05201C7.41794 9.1763 7.10064 9.24033 6.78011 9.24033C6.45958 9.24033 6.14228 9.1763 5.84683 9.05201C5.55138 8.92773 5.28373 8.74567 5.05959 8.51654C4.83545 8.28742 4.65934 8.01582 4.54158 7.71771C4.42383 7.41959 4.3668 7.10096 4.37386 6.78051C4.38771 6.1515 4.64731 5.55293 5.09706 5.11297C5.54681 4.67302 6.15096 4.42666 6.78011 4.42666C7.40927 4.42666 8.01341 4.67302 8.46316 5.11297C8.91291 5.55293 9.17251 6.1515 9.18636 6.78051Z"
        fill={fill}
      />
    </svg>
  );
}

export function IconInstagram({ fill = "currentColor", className }: IIcon) {
  return (
    <svg
      className={className}
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0001 10.3555C11.9931 10.3555 10.3552 11.9934 10.3552 14.0004C10.3552 16.0075 11.9931 17.6453 14.0001 17.6453C16.0072 17.6453 17.6451 16.0075 17.6451 14.0004C17.6451 11.9934 16.0072 10.3555 14.0001 10.3555ZM24.9322 14.0004C24.9322 12.491 24.9458 10.9953 24.8611 9.48871C24.7763 7.73871 24.3771 6.18558 23.0974 4.90589C21.815 3.62347 20.2646 3.22699 18.5146 3.14222C17.0052 3.05745 15.5095 3.07113 14.0029 3.07113C12.4935 3.07113 10.9978 3.05745 9.49115 3.14222C7.74115 3.22699 6.18802 3.6262 4.90833 4.90589C3.62591 6.18831 3.22943 7.73871 3.14466 9.48871C3.0599 10.9981 3.07357 12.4938 3.07357 14.0004C3.07357 15.5071 3.0599 17.0055 3.14466 18.5121C3.22943 20.2621 3.62865 21.8153 4.90833 23.095C6.19076 24.3774 7.74115 24.7739 9.49115 24.8586C11.0005 24.9434 12.4962 24.9297 14.0029 24.9297C15.5122 24.9297 17.0079 24.9434 18.5146 24.8586C20.2646 24.7739 21.8177 24.3746 23.0974 23.095C24.3798 21.8125 24.7763 20.2621 24.8611 18.5121C24.9486 17.0055 24.9322 15.5098 24.9322 14.0004ZM14.0001 19.6086C10.8966 19.6086 8.39193 17.1039 8.39193 14.0004C8.39193 10.8969 10.8966 8.39222 14.0001 8.39222C17.1036 8.39222 19.6083 10.8969 19.6083 14.0004C19.6083 17.1039 17.1036 19.6086 14.0001 19.6086ZM19.838 9.4723C19.1134 9.4723 18.5283 8.88714 18.5283 8.16253C18.5283 7.43792 19.1134 6.85277 19.838 6.85277C20.5626 6.85277 21.1478 7.43792 21.1478 8.16253C21.148 8.33459 21.1143 8.50501 21.0485 8.66401C20.9828 8.82302 20.8863 8.96749 20.7646 9.08916C20.643 9.21083 20.4985 9.30729 20.3395 9.37304C20.1805 9.43878 20.0101 9.47252 19.838 9.4723Z"
        fill={fill}
      />
    </svg>
  );
}

export function IconStar({ className, fill = "#23BC45" }: IIcon) {
  return (
    <svg
      className={className}
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_404)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.44476 8.87785L0.948216 6.81117C0.477014 6.43435 0.683682 5.67657 1.28164 5.59115L4.82254 5.43339L6.33465 1.64243C6.44005 1.43232 6.6543 1.30005 6.88921 1.30005C7.12412 1.30005 7.33837 1.433 7.44377 1.64243L8.95588 5.43339L12.4968 5.59115C13.0947 5.67657 13.3014 6.43435 12.8302 6.81117L10.3337 8.87785L11.015 12.9127C11.0935 13.4631 10.5217 13.8751 10.025 13.6264L6.88921 11.6334L3.75338 13.6257C3.256 13.8744 2.68491 13.4624 2.76344 12.912L3.44476 8.87785Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_404">
          <rect
            width="13.7778"
            height="13.7778"
            fill="white"
            transform="translate(0 0.611084)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export function IconStarBlank({ className }: IIcon) {
  return (
    <svg
      className={className}
      width="14"
      height="15"
      viewBox="0 0 10 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_523)">
        <path
          d="M3.17306 5.42528L3.1916 5.31546L3.10581 5.24445L1.5069 3.92084L1.50692 3.92082L1.50437 3.91878C1.33689 3.78485 1.4071 3.5169 1.6166 3.48052L3.87372 3.37996L3.99824 3.37441L4.04442 3.25864L5.0093 0.839623C5.04509 0.77385 5.11366 0.732943 5.18874 0.732943C5.26348 0.732943 5.33229 0.773993 5.36822 0.839762L6.33305 3.25864L6.37923 3.37441L6.50375 3.37996L8.76087 3.48052C8.97037 3.5169 9.04058 3.78485 8.8731 3.91878L8.87309 3.91876L8.87057 3.92084L7.27166 5.24445L7.18587 5.31546L7.20441 5.42527L7.64029 8.00663C7.66648 8.20129 7.46737 8.34666 7.29117 8.26543L5.29227 6.99503L5.18875 6.92924L5.08522 6.99502L3.08635 8.26495C2.90972 8.34628 2.71098 8.20085 2.73718 8.00619L3.17306 5.42528Z"
          stroke="#8D9196"
          strokeWidth="0.386052"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_523">
          <rect
            width="8.82403"
            height="8.82403"
            fill="white"
            transform="translate(0.777344 0.098877)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export function IconHeart({
  width = "11",
  height = "11",
  className = "",
}: IIcon) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_465)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.556 1.94971C6.26429 1.50191 7.20518 1.3782 8.01801 1.63869C9.78611 2.20889 10.335 4.13642 9.84404 5.67017C9.08654 8.07903 5.85134 9.87588 5.71412 9.95124C5.66534 9.97825 5.61132 9.99175 5.55731 9.99175C5.50329 9.99175 5.44971 9.97869 5.40093 9.95211C5.26458 9.87763 2.05291 8.10735 1.27013 5.6706L1.2697 5.67017C0.778343 4.13599 1.32546 2.20802 3.09181 1.63869C3.9212 1.37036 4.82506 1.48841 5.556 1.94971ZM3.29219 2.26073C1.86299 2.72159 1.50405 4.25882 1.89217 5.4711C2.50288 7.37119 4.91567 8.90755 5.55687 9.28782C6.20025 8.90363 8.63046 7.35028 9.22157 5.47284C9.60969 4.25926 9.24945 2.72203 7.81807 2.26073C7.1246 2.03814 6.31569 2.17361 5.75725 2.60572C5.64051 2.69546 5.47846 2.6972 5.36085 2.60834C4.76931 2.16359 3.99655 2.03335 3.29219 2.26073ZM7.39989 3.12579C7.99362 3.31789 8.40962 3.84365 8.46058 4.46526C8.47496 4.64516 8.34123 4.80285 8.16132 4.81722C8.15218 4.81809 8.14346 4.81853 8.13432 4.81853C7.96574 4.81853 7.82286 4.68915 7.80892 4.5184C7.78017 4.16034 7.54059 3.85803 7.19952 3.74782C7.02746 3.69207 6.93337 3.50781 6.98869 3.33662C7.04488 3.16499 7.2274 3.07177 7.39989 3.12579Z"
          fill="url(#paint0_linear_1_465)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1_465"
          x1="5.55662"
          y1="1.49707"
          x2="5.55662"
          y2="9.99175"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43C6AC" />
          <stop offset="1" stopColor="#F8FFAE" />
        </linearGradient>
        <clipPath id="clip0_1_465">
          <rect
            width="10.4544"
            height="10.4544"
            fill="white"
            transform="translate(0.227539 0.19043)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export function IconHeartWhite({
  fill = "white",
  width = "20",
  height = "20",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.1961 3.36593C11.5511 2.50927 13.3511 2.2726 14.9061 2.77093C18.2886 3.86177 19.3386 7.54927 18.3995 10.4834C16.9503 15.0918 10.7611 18.5293 10.4986 18.6734C10.4053 18.7251 10.302 18.7509 10.1986 18.7509C10.0953 18.7509 9.99279 18.7259 9.89946 18.6751C9.63862 18.5326 3.49446 15.1459 1.99696 10.4843L1.99612 10.4834C1.05612 7.54843 2.10279 3.8601 5.48196 2.77093C7.06862 2.2576 8.79779 2.48343 10.1961 3.36593ZM5.86529 3.96093C3.13112 4.8426 2.44446 7.78343 3.18696 10.1026C4.35529 13.7376 8.97112 16.6768 10.1978 17.4043C11.4286 16.6693 16.0778 13.6976 17.2086 10.1059C17.9511 7.78427 17.262 4.84343 14.5236 3.96093C13.197 3.5351 11.6495 3.79427 10.5811 4.62093C10.3578 4.7926 10.0478 4.79593 9.82279 4.62593C8.69112 3.7751 7.21279 3.52593 5.86529 3.96093ZM13.7236 5.61585C14.8595 5.98335 15.6553 6.98918 15.7528 8.17835C15.7803 8.52252 15.5245 8.82418 15.1803 8.85168C15.1628 8.85335 15.1461 8.85418 15.1286 8.85418C14.8061 8.85418 14.5328 8.60668 14.5061 8.28002C14.4511 7.59502 13.9928 7.01668 13.3403 6.80585C13.0111 6.69918 12.8311 6.34668 12.937 6.01918C13.0445 5.69085 13.3936 5.51252 13.7236 5.61585Z"
        fill={fill}
      />
    </svg>
  );
}

export function IconSearch({ className }: IIcon) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.8247 1.3335C11.4047 1.3335 14.3167 4.2455 14.3167 7.8255C14.3167 9.51453 13.6685 11.055 12.6078 12.2112L14.695 14.294C14.8903 14.4893 14.891 14.8053 14.6956 15.0006C14.5983 15.0993 14.4696 15.148 14.3416 15.148C14.2143 15.148 14.0863 15.0993 13.9883 15.002L11.8759 12.8955C10.7647 13.7854 9.35582 14.3182 7.8247 14.3182C4.2447 14.3182 1.33203 11.4055 1.33203 7.8255C1.33203 4.2455 4.2447 1.3335 7.8247 1.3335ZM7.8247 2.3335C4.79603 2.3335 2.33203 4.79683 2.33203 7.8255C2.33203 10.8542 4.79603 13.3182 7.8247 13.3182C10.8527 13.3182 13.3167 10.8542 13.3167 7.8255C13.3167 4.79683 10.8527 2.3335 7.8247 2.3335Z"
        fill="#677487"
      />
    </svg>
  );
}

export function IconClose({ className }: IIcon) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.66836 14.1188L3.88086 13.3313L8.21211 9.0001L3.88086 4.66885L4.66836 3.88135L8.99961 8.2126L13.3309 3.88135L14.1184 4.66885L9.78711 9.0001L14.1184 13.3313L13.3309 14.1188L8.99961 9.7876L4.66836 14.1188Z"
        fill="#677487"
      />
    </svg>
  );
}

export function IconCookie({ className }: IIcon) {
  return (
    <svg
      className={className}
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_590)">
        <mask
          id="mask0_1_590"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={-1}
          width={20}
          height={21}
        >
          <path d="M20 -0.00012207H0V19.9999H20V-0.00012207Z" fill="white" />
        </mask>
        <g mask="url(#mask0_1_590)">
          <mask
            id="mask1_1_590"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x={-1}
            y={0}
            width={21}
            height={20}
          >
            <path
              d="M-0.00195312 1.90735e-06H19.998V20H-0.00195312V1.90735e-06Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask1_1_590)">
            <path
              d="M6.86637 6.86872C6.86637 7.56043 6.30559 8.12122 5.61383 8.12122C4.92211 8.12122 4.36133 7.56043 4.36133 6.86872C4.36133 6.17696 4.92211 5.61622 5.61383 5.61622C6.30559 5.61622 6.86637 6.17696 6.86637 6.86872Z"
              stroke="url(#paint0_linear_1_590)"
              strokeWidth="0.683575"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.4425 14.0707C13.4425 14.7625 12.8818 15.3232 12.19 15.3232C11.4983 15.3232 10.9375 14.7625 10.9375 14.0707C10.9375 13.379 11.4983 12.8182 12.19 12.8182C12.8818 12.8182 13.4425 13.379 13.4425 14.0707Z"
              stroke="url(#paint1_linear_1_590)"
              strokeWidth="0.683575"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.18055 13.1313C7.18055 13.6501 6.75996 14.0707 6.24113 14.0707C5.72234 14.0707 5.30176 13.6501 5.30176 13.1313C5.30176 12.6125 5.72234 12.1919 6.24113 12.1919C6.75996 12.1919 7.18055 12.6125 7.18055 13.1313Z"
              stroke="url(#paint2_linear_1_590)"
              strokeWidth="0.683575"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.3121 8.4343C10.3121 8.78016 10.0317 9.06055 9.68582 9.06055C9.33992 9.06055 9.05957 8.78016 9.05957 8.4343C9.05957 8.08844 9.33992 7.80805 9.68582 7.80805C10.0317 7.80805 10.3121 8.08844 10.3121 8.4343Z"
              stroke="url(#paint3_linear_1_590)"
              strokeWidth="0.683575"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.3213 12.1919L15.6344 12.8182"
              stroke="url(#paint4_linear_1_590)"
              strokeWidth="0.683575"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.1904 10.9395L12.8167 10.6263"
              stroke="url(#paint5_linear_1_590)"
              strokeWidth="0.683575"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.42285 9.68686L3.73598 10.3131"
              stroke="url(#paint6_linear_1_590)"
              strokeWidth="0.683575"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.80664 15.9495L8.43289 15.6363"
              stroke="url(#paint7_linear_1_590)"
              strokeWidth="0.683575"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.11914 3.42426L8.43227 3.73743"
              stroke="url(#paint8_linear_1_590)"
              strokeWidth="0.683575"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.49316 10.6262L7.80629 10.9393"
              stroke="url(#paint9_linear_1_590)"
              strokeWidth="0.683575"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.251 17.5151V17.202"
              stroke="url(#paint10_linear_1_590)"
              strokeWidth="0.683575"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.6852 5.30309L9.37207 5.61621"
              stroke="url(#paint11_linear_1_590)"
              strokeWidth="0.683575"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.0314 2.83096L13.9416 3.36999C13.8677 3.813 14.1178 4.24628 14.5383 4.40401L15.3337 4.70225C15.859 4.89925 16.4388 4.59483 16.5749 4.05053L16.8584 2.91651C17.0351 2.20979 16.3749 1.5796 15.6771 1.78893L14.6881 2.08561C14.345 2.18854 14.0903 2.47764 14.0314 2.83096Z"
              stroke="url(#paint12_linear_1_590)"
              strokeWidth="0.683575"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.2001 6.24239L16.8219 6.43145C16.5253 6.57977 16.3957 6.93352 16.5263 7.23832L16.8306 7.94821C17.0148 8.37801 17.588 8.46164 17.8873 8.10243L18.3768 7.51508C18.6062 7.23969 18.5582 6.82825 18.2714 6.61317L17.8559 6.30153C17.6661 6.15918 17.4122 6.13629 17.2001 6.24239Z"
              stroke="url(#paint13_linear_1_590)"
              strokeWidth="0.683575"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.7056 4.36362C19.7056 4.70948 19.4252 4.98987 19.0794 4.98987C18.7335 4.98987 18.4531 4.70948 18.4531 4.36362C18.4531 4.01776 18.7335 3.73737 19.0794 3.73737C19.4252 3.73737 19.7056 4.01776 19.7056 4.36362Z"
              stroke="url(#paint14_linear_1_590)"
              strokeWidth="0.683575"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.2896 16.4045C18.4646 15.0673 19.2791 13.4053 19.5776 11.5695C19.6117 11.3598 19.4229 11.1889 19.2128 11.2198C19.0672 11.2411 18.9185 11.2525 18.767 11.2525C17.3723 11.2525 16.1918 10.3401 15.787 9.07993C15.7178 8.86454 15.5418 8.69868 15.3196 8.65634C13.0034 8.2154 11.2518 6.18192 11.2518 3.73735C11.2518 2.71064 11.5618 1.75696 12.0919 0.962629C12.218 0.773762 12.1128 0.522198 11.89 0.478097C10.9483 0.291612 9.95797 0.240363 8.93879 0.350051C6.90438 0.569035 5.05812 1.42747 3.59863 2.7136"
              stroke="url(#paint15_linear_1_590)"
              strokeWidth="0.683575"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.71224 3.59988C1.32091 5.18254 0.434306 7.21441 0.307431 9.42824C-0.014756 15.0486 4.44759 19.707 9.99802 19.707C12.4534 19.707 14.694 18.7939 16.4029 17.2905"
              stroke="url(#paint16_linear_1_590)"
              strokeWidth="0.683575"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1_590"
          x1="5.61385"
          y1="8.12122"
          x2="5.61385"
          y2="5.61622"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43C6AC" />
          <stop offset={1} stopColor="#F8FFAE" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_590"
          x1="12.19"
          y1="15.3232"
          x2="12.19"
          y2="12.8182"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43C6AC" />
          <stop offset={1} stopColor="#F8FFAE" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1_590"
          x1="6.24115"
          y1="14.0707"
          x2="6.24115"
          y2="12.1919"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43C6AC" />
          <stop offset={1} stopColor="#F8FFAE" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1_590"
          x1="9.68582"
          y1="9.06055"
          x2="9.68582"
          y2="7.80805"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43C6AC" />
          <stop offset={1} stopColor="#F8FFAE" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_1_590"
          x1="15.4779"
          y1="12.8182"
          x2="15.4779"
          y2="12.1919"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43C6AC" />
          <stop offset={1} stopColor="#F8FFAE" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_1_590"
          x1="12.5036"
          y1="10.9395"
          x2="12.5036"
          y2="10.6263"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43C6AC" />
          <stop offset={1} stopColor="#F8FFAE" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_1_590"
          x1="3.57941"
          y1="10.3131"
          x2="3.57941"
          y2="9.68686"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43C6AC" />
          <stop offset={1} stopColor="#F8FFAE" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_1_590"
          x1="8.11977"
          y1="15.9495"
          x2="8.11977"
          y2="15.6363"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43C6AC" />
          <stop offset={1} stopColor="#F8FFAE" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_1_590"
          x1="8.2757"
          y1="3.73743"
          x2="8.2757"
          y2="3.42426"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43C6AC" />
          <stop offset={1} stopColor="#F8FFAE" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_1_590"
          x1="7.64973"
          y1="10.9393"
          x2="7.64973"
          y2="10.6262"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43C6AC" />
          <stop offset={1} stopColor="#F8FFAE" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_1_590"
          x1="11.751"
          y1="17.5151"
          x2="11.751"
          y2="17.202"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43C6AC" />
          <stop offset={1} stopColor="#F8FFAE" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_1_590"
          x1="9.52863"
          y1="5.61621"
          x2="9.52863"
          y2="5.30309"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43C6AC" />
          <stop offset={1} stopColor="#F8FFAE" />
        </linearGradient>
        <linearGradient
          id="paint12_linear_1_590"
          x1="15.408"
          y1="4.76245"
          x2="15.408"
          y2="1.74816"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43C6AC" />
          <stop offset={1} stopColor="#F8FFAE" />
        </linearGradient>
        <linearGradient
          id="paint13_linear_1_590"
          x1="17.4988"
          y1="8.32788"
          x2="17.4988"
          y2="6.17626"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43C6AC" />
          <stop offset={1} stopColor="#F8FFAE" />
        </linearGradient>
        <linearGradient
          id="paint14_linear_1_590"
          x1="19.0794"
          y1="4.98987"
          x2="19.0794"
          y2="3.73737"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43C6AC" />
          <stop offset={1} stopColor="#F8FFAE" />
        </linearGradient>
        <linearGradient
          id="paint15_linear_1_590"
          x1="11.5901"
          y1="16.4045"
          x2="11.5901"
          y2="0.292921"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43C6AC" />
          <stop offset={1} stopColor="#F8FFAE" />
        </linearGradient>
        <linearGradient
          id="paint16_linear_1_590"
          x1="8.34694"
          y1="19.707"
          x2="8.34694"
          y2="3.59988"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43C6AC" />
          <stop offset={1} stopColor="#F8FFAE" />
        </linearGradient>
        <clipPath id="clip0_1_590">
          <rect width={20} height={20} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function IconArrowRightAnimation({ animationOnCard }: IIcon) {
  return (
    <>
      {animationOnCard && (
        <AnimatePresence>
          <motion.div
            className="bg-transparent w-fit h-fit"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 44L23.4405 43.9923C12.6588 43.6957 4 34.8529 4 24C4 12.98 12.96 4 24 4C35.02 4 44 12.98 44 24C44 35.04 35.02 44 24 44ZM20.04 32C20.64 32.6 21.58 32.6 22.16 32L29.14 25.06C29.42 24.78 29.58 24.4 29.58 24C29.58 23.6 29.42 23.22 29.14 22.94L22.16 16C21.88 15.7 21.5 15.56 21.12 15.56C20.72 15.56 20.34 15.7 20.04 16C19.46 16.6 19.46 17.54 20.06 18.12L25.96 24L20.06 29.88C19.46 30.46 19.46 31.42 20.04 32Z"
                fill="url(#paint0_linear_1_549)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_549"
                  x1="7"
                  y1="56.5"
                  x2="44"
                  y2="10"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#43C6AC" />
                  <stop offset="1" stopColor="#F8FFAE" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </AnimatePresence>
      )}
      {!animationOnCard && (
        <AnimatePresence>
          <motion.div
            className="bg-transparent w-fit h-fit"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 4C35.028 4 44 12.972 44 24C44 35.028 35.028 44 24 44C12.972 44 4 35.028 4 24C4 12.972 12.972 4 24 4ZM24 7C14.626 7 7 14.626 7 24C7 33.374 14.626 41 24 41C33.374 41 41 33.374 41 24C41 14.626 33.374 7 24 7ZM22.1752 15.9954L29.1472 22.9374C29.4292 23.2194 29.5872 23.6014 29.5872 23.9994C29.5872 24.3994 29.4292 24.7814 29.1472 25.0634L22.1752 32.0034C21.8832 32.2954 21.4992 32.4414 21.1172 32.4414C20.7332 32.4414 20.3472 32.2954 20.0552 31.9994C19.4712 31.4114 19.4732 30.4634 20.0592 29.8794L25.9632 23.9994L20.0592 18.1214C19.4732 17.5374 19.4712 16.5874 20.0552 15.9994C20.6392 15.4094 21.5872 15.4134 22.1752 15.9954Z"
                fill="#9C9C9C"
              />
            </svg>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}

export function IconArrowRightGradient({ className = "" }: IIcon) {
  return (
    <>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 44L23.4405 43.9923C12.6588 43.6957 4 34.8529 4 24C4 12.98 12.96 4 24 4C35.02 4 44 12.98 44 24C44 35.04 35.02 44 24 44ZM20.04 32C20.64 32.6 21.58 32.6 22.16 32L29.14 25.06C29.42 24.78 29.58 24.4 29.58 24C29.58 23.6 29.42 23.22 29.14 22.94L22.16 16C21.88 15.7 21.5 15.56 21.12 15.56C20.72 15.56 20.34 15.7 20.04 16C19.46 16.6 19.46 17.54 20.06 18.12L25.96 24L20.06 29.88C19.46 30.46 19.46 31.42 20.04 32Z"
          fill="url(#paint0_linear_1_549)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_549"
            x1="7"
            y1="56.5"
            x2="44"
            y2="10"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#43C6AC" />
            <stop offset="1" stopColor="#F8FFAE" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}

export function IconArrowRightWhite({ className = "" }: IIcon) {
  return (
    <>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 4C35.028 4 44 12.972 44 24C44 35.028 35.028 44 24 44C12.972 44 4 35.028 4 24C4 12.972 12.972 4 24 4ZM24 7C14.626 7 7 14.626 7 24C7 33.374 14.626 41 24 41C33.374 41 41 33.374 41 24C41 14.626 33.374 7 24 7ZM22.1752 15.9954L29.1472 22.9374C29.4292 23.2194 29.5872 23.6014 29.5872 23.9994C29.5872 24.3994 29.4292 24.7814 29.1472 25.0634L22.1752 32.0034C21.8832 32.2954 21.4992 32.4414 21.1172 32.4414C20.7332 32.4414 20.3472 32.2954 20.0552 31.9994C19.4712 31.4114 19.4732 30.4634 20.0592 29.8794L25.9632 23.9994L20.0592 18.1214C19.4732 17.5374 19.4712 16.5874 20.0552 15.9994C20.6392 15.4094 21.5872 15.4134 22.1752 15.9954Z"
          fill="#9C9C9C"
        />
      </svg>
    </>
  );
}

export function IconArrowRightWithState({
  className = "",
  isActive,
  width = "32",
  height = "32",
}: IIcon) {
  return (
    <>
      {isActive ? (
        <div className={className}>
          <svg
            width={width}
            height={height}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 44L23.4405 43.9923C12.6588 43.6957 4 34.8529 4 24C4 12.98 12.96 4 24 4C35.02 4 44 12.98 44 24C44 35.04 35.02 44 24 44ZM20.04 32C20.64 32.6 21.58 32.6 22.16 32L29.14 25.06C29.42 24.78 29.58 24.4 29.58 24C29.58 23.6 29.42 23.22 29.14 22.94L22.16 16C21.88 15.7 21.5 15.56 21.12 15.56C20.72 15.56 20.34 15.7 20.04 16C19.46 16.6 19.46 17.54 20.06 18.12L25.96 24L20.06 29.88C19.46 30.46 19.46 31.42 20.04 32Z"
              fill="url(#paint0_linear_1_549)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_549"
                x1="7"
                y1="56.5"
                x2="44"
                y2="10"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#43C6AC" />
                <stop offset="1" stopColor="#F8FFAE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ) : (
        <div className={className}>
          <svg
            width={width}
            height={height}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 4C35.028 4 44 12.972 44 24C44 35.028 35.028 44 24 44C12.972 44 4 35.028 4 24C4 12.972 12.972 4 24 4ZM24 7C14.626 7 7 14.626 7 24C7 33.374 14.626 41 24 41C33.374 41 41 33.374 41 24C41 14.626 33.374 7 24 7ZM22.1752 15.9954L29.1472 22.9374C29.4292 23.2194 29.5872 23.6014 29.5872 23.9994C29.5872 24.3994 29.4292 24.7814 29.1472 25.0634L22.1752 32.0034C21.8832 32.2954 21.4992 32.4414 21.1172 32.4414C20.7332 32.4414 20.3472 32.2954 20.0552 31.9994C19.4712 31.4114 19.4732 30.4634 20.0592 29.8794L25.9632 23.9994L20.0592 18.1214C19.4732 17.5374 19.4712 16.5874 20.0552 15.9994C20.6392 15.4094 21.5872 15.4134 22.1752 15.9954Z"
              fill="#9C9C9C"
            />
          </svg>
        </div>
      )}
    </>
  );
}

export function IconBadgePopup({ className = "" }: IIcon) {
  return (
    <svg
      className={className}
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={48} height={48} rx={8} fill="#222222" />
      <rect x={10} y={10} width={28} height={28} rx={4} fill="#2D2D2D" />
    </svg>
  );
}

export function IconBadgeSeperatePage({ className = "" }: IIcon) {
  return (
    <svg
      className={className}
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={48} height={48} rx={8} fill="#222222" />
    </svg>
  );
}

export function IconSend({ className = "" }: IIcon) {
  return (
    <svg
      className={className}
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.2899 1.72124C13.9565 1.37898 13.4629 1.25148 13.0027 1.38569L2.27167 4.50627C1.78614 4.64116 1.442 5.02838 1.34929 5.52029C1.25459 6.02092 1.58539 6.65644 2.01757 6.92219L5.37294 8.98446C5.71708 9.19585 6.16126 9.14284 6.44605 8.85561L10.2883 4.98945C10.4817 4.78813 10.8018 4.78813 10.9952 4.98945C11.1887 5.18407 11.1887 5.49948 10.9952 5.70081L7.14633 9.56764C6.86088 9.85419 6.80753 10.3005 7.01761 10.6467L9.06779 14.0358C9.30789 14.4384 9.72139 14.6666 10.1749 14.6666C10.2283 14.6666 10.2883 14.6666 10.3416 14.6599C10.8619 14.5928 11.2754 14.2371 11.4288 13.7338L14.6101 3.01645C14.7501 2.5601 14.6234 2.0635 14.2899 1.72124Z"
        fill="black"
      />
    </svg>
  );
}

export function IconGrayCircle({ className = "" }: IIcon) {
  return (
    <svg
      className={className}
      width={72}
      height={72}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width={71} height={71} rx="35.5" fill="#1F1F1F" />
      <rect
        x="0.5"
        y="0.5"
        width={71}
        height={71}
        rx="35.5"
        stroke="url(#paint0_linear_1_6173)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_6173"
          x1={72}
          y1="-2.14577e-06"
          x2={36}
          y2={72}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#676767" />
          <stop offset={1} stopColor="#676767" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconFilters() {
  return (
    <svg
      width={18}
      height={17}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0827 10.6252L16.0827 6.37516C16.0827 2.83349 14.666 1.41683 11.1243 1.41683L6.87435 1.41683C3.33268 1.41683 1.91602 2.8335 1.91602 6.37516L1.91602 10.6252C1.91602 14.1668 3.33268 15.5835 6.87435 15.5835L11.1243 15.5835C14.666 15.5835 16.0827 14.1668 16.0827 10.6252Z"
        stroke="white"
        strokeWidth="1.0625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.6043 5.97119L10.8418 5.97119"
        stroke="white"
        strokeWidth="1.0625"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.77773 5.9707L4.39648 5.9707"
        stroke="white"
        strokeWidth="1.0625"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.46068 5.97083C9.46068 4.95371 8.63613 4.12917 7.61901 4.12917C6.60189 4.12917 5.77734 4.95371 5.77734 5.97083C5.77734 6.98796 6.60189 7.8125 7.61901 7.8125C8.63614 7.8125 9.46068 6.98796 9.46068 5.97083Z"
        stroke="white"
        strokeWidth="1.0625"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.6039 11.0288L12.2227 11.0288"
        stroke="white"
        strokeWidth="1.0625"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.15898 11.0288L4.39648 11.0288"
        stroke="white"
        strokeWidth="1.0625"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.2224 11.0289C12.2224 10.0118 11.3979 9.18727 10.3807 9.18727C9.3636 9.18727 8.53906 10.0118 8.53906 11.0289C8.53906 12.0461 9.3636 12.8706 10.3807 12.8706C11.3979 12.8706 12.2224 12.0461 12.2224 11.0289Z"
        stroke="white"
        strokeWidth="1.0625"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
