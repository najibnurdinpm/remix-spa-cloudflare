type INotificationBubble = {
    title?:string,
    description?:string,
}

const NotificationBubble = ({
    title,
    description,
    ...props
  }: INotificationBubble) => {


    return (
        <div className="w-full bg-[#0B1816] border-l-4 border-[#43C6AC] p-[17px_16px_16px_33px] relative z-10">
      <h2 className="font-sans text-[24px] font-bold leading-[120%] text-[#FFF] mb-[6px]">
          {title}
      </h2>
      <div className="flex justify-start items-start flex-col md:flex-row md:justify-between md:items-end">
        <p className="font-inter text-[#9C9C9C] text-xs leading-[160%] -tracking-[0.24px] max-w-[252px]">{description}</p>
        <a className="p-[12px_16px] bg-[#43C6AC1A] rounded-[360px] font-inter text-sm text-[#43C6AC] font-semibold leading-[110%] -tracking-[0.28px] text-center -mt-[10px] ml-[auto] flex gap-[8px] md:m-0" target="_blank" href="https://docs.sledge-app.com/server-side-fetching">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <g id="vuesax/linear/document">
          <g id="document">
          <path id="Vector" d="M6.46533 14.0684H10.2153C13.3403 14.0684 14.5903 12.8184 14.5903 9.69336V5.94336C14.5903 2.81836 13.3403 1.56836 10.2153 1.56836H6.46533C3.34033 1.56836 2.09033 2.81836 2.09033 5.94336V9.69336C2.09033 12.8184 3.34033 14.0684 6.46533 14.0684Z" stroke="#43C6AC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path id="Vector_2" d="M10.6841 5.94336H5.99658" stroke="#43C6AC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path id="Vector_3" d="M10.6841 9.69336H5.99658" stroke="#43C6AC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          </g>
          </svg> See Docs
        </a>
      </div>
    </div>
    )
}



export default NotificationBubble;