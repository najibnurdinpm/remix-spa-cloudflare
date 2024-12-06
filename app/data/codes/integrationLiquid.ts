const integrationLiquid = `<div
    data-component="instant-search-icon-widget"
    data-icon-size="sm"
    data-on-after-add-to-cart="onAfterAddToCart(element, state)"
    data-on-after-add-wishlist="onAfterAddWishlist(element, state)"
    data-on-after-remove-wishlist="onAfterRemoveWishlist(element, state)"
    data-on-after-render-product="onAfterRenderProduct(element, state)"
    class="header__icon"
>
  <div data-component="product-card-wrapper" style="display: none">
      <div data-component="product-card-image"></div>
      <div data-component="product-card-out-stock">Sold out</div>
      <div data-component="product-card-title">{ product_title }</div>
      <div data-component="product-card-price">{ product_currency }{ product_price }</div>
      <div data-component="product-card-text">
          <div>{ product_variant_title }</div>
          <div>Vendor: { product_vendor } | SKU: { product_sku }</div>
      </div>
      <div data-component="product-card-rating"></div>
      <div data-component="product-card-button-add-to-cart">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.83562 1.50023C10.796 1.50023 12.4155 2.99397 12.6152 4.90442L12.6709 4.90507C13.7584 4.90507 15.0806 5.62732 15.5269 7.65307L16.1186 12.2333C16.3309 13.7116 16.0654 14.8973 15.3281 15.7478C14.5946 16.5938 13.4336 17.0416 11.9704 17.0416H5.7094C4.10215 17.0416 2.9824 16.6478 2.28565 15.8386C1.5859 15.0271 1.3519 13.8098 1.5904 12.2213L2.1724 7.70182C2.5549 5.62957 3.95365 4.90507 5.03665 4.90507C5.13014 4.04293 5.51889 3.22275 6.13562 2.60797C6.84437 1.90372 7.82162 1.50023 8.81987 1.50023H8.83562ZM12.6709 6.03007H5.03665C4.7059 6.03007 3.6004 6.16357 3.28315 7.87657L2.70415 12.3766C2.5159 13.6388 2.6614 14.5523 3.13765 15.1051C3.6079 15.6511 4.4494 15.9166 5.7094 15.9166H11.9704C12.7564 15.9166 13.8296 15.7598 14.4776 15.0113C14.9921 14.4181 15.1691 13.5346 15.0041 12.3848L14.4199 7.84582C14.1709 6.72757 13.5139 6.03007 12.6709 6.03007ZM11.023 8.11815C11.3335 8.11815 11.6027 8.37015 11.6027 8.68065C11.6027 8.99115 11.368 9.24315 11.0575 9.24315H11.023C10.7125 9.24315 10.4605 8.99115 10.4605 8.68065C10.4605 8.37015 10.7125 8.11815 11.023 8.11815ZM6.65042 8.11815C6.96092 8.11815 7.23017 8.37015 7.23017 8.68065C7.23017 8.99115 6.99467 9.24315 6.68417 9.24315H6.65042C6.33992 9.24315 6.08792 8.99115 6.08792 8.68065C6.08792 8.37015 6.33992 8.11815 6.65042 8.11815ZM8.83337 2.62522H8.82212C8.11637 2.62522 7.42862 2.90947 6.92987 3.40522C6.5236 3.80967 6.25789 4.34137 6.17193 4.90472L11.4814 4.90493C11.2887 3.61626 10.1743 2.62522 8.83337 2.62522Z"
                  fill="#393D4E"
              ></path></svg
          ><span>Add To Cart</span>
      </div>
  </div>
</div>`;

export default integrationLiquid;
