export default function BlogMenu({
  selectedState,
  setSearchParams,
  filters,
  isMobile,
  handleSetSearchParams,
}: any) {
  return (
    <ul
      className={`space-y-[8px] sm:space-y-0 lg:space-y-[8px] block ${
        isMobile
          ? "block sm:flex flex-wrap gap-10 lg:hidden"
          : "hidden lg:block"
      }`}
    >
      {filters.map((filter: any, index: number) => {
        const { attribute, data } = filter;
        return (
          <div key={attribute}>
            <div
              className={`font-bold text-[18px] leading-[19.8px] tracking-[-0.32px] text-gray-4 capitalize mb-[24px] ${
                index !== 0 && "mt-[32px] sm:mt-0 lg:mt-[32px]"
              }`}
            >
              {attribute}
            </div>
            {data.map((value: any) => {
              const id = `${attribute}_${value}`;
              const activeFilters = selectedState.filters
                .map((filter: any) => filter.key + "_" + filter.value)
                .includes(id);
              return (
                <div
                  key={id}
                  className="flex items-center lg:pl-[4px] gap-2 mb-[16px]"
                >
                  <input
                    type="checkbox"
                    className="peer custom-checkbox bg-transparent checked:bg-green h-[20px] w-[20px] text-green rounded-[4px] cursor-pointer focus:ring-0 checked:!bg-[url('/assets/images/check.png')] checked:[background-size:14px]"
                    id={id}
                    checked={activeFilters}
                    onChange={() => {
                      if (!activeFilters) {
                        selectedState.filters.push({
                          key: attribute,
                          value: value,
                        });
                      } else {
                        selectedState.filters = selectedState.filters.filter(
                          (i: any) => {
                            return i.value !== value;
                          }
                        );
                      }

                      handleSetSearchParams(
                        setSearchParams,
                        attribute,
                        selectedState.filters,
                        value,
                        activeFilters
                      );
                    }}
                  />
                  <label
                    className="capitalize text-gray-5 font-inter text-[14px] leading-[20px] cursor-pointer peer-checked:text-green"
                    htmlFor={id}
                  >
                    {value.replace("-", " ")}
                  </label>
                </div>
              );
            })}
          </div>
        );
      })}
    </ul>
  );
}
