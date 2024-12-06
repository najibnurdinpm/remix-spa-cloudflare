const dynamicIntegrationHydrogen = {
  wishlist: `import { Widget, WidgetHeader } from "@sledge-app/react-wishlist";
  
const SledgeWishlistWidget = () => (
  <Widget.Root>
    <WidgetHeader>
      <WidgetHeader.Title />
      <WidgetHeader.SearchForm />
      <WidgetHeader.ClearTrigger />
      <WidgetHeader.ShareTrigger />
      <WidgetHeader.Sort />
      <WidgetHeader.Limit />
    </WidgetHeader>
    <Widget.List />
  </Widget.Root>
);`,
  
  review: `import { Widget, WidgetHeader } from '@sledge-app/react-product-review';

const SledgeReviewWidget = () => (
    <Widget.Root
        data={{
            productId: "Fill with your data",
            productVariantId: "Fill with your data",
        }}
    >
        <WidgetHeader>
            <WidgetHeader.Summary />
            <WidgetHeader.AddTrigger />
            <WidgetHeader.Sort />
        </WidgetHeader>
        <Widget.List />
    </Widget.Root>
);`,

  instantSearch: `import { SearchIconWidget } from "@sledge-app/react-instant-search";

const SledgeInstantSearchWidget = () => <SearchIconWidget />;
  `,
  plp: `import { ProductFilterWidget } from "@sledge-app/react-instant-search";

const SledgeInstantSearchWidget = () => (
  <ProductFilterWidget
    data={{
      collectionId: "Fill with your data",
    }}
  />
);
  `,
};

export default dynamicIntegrationHydrogen;
