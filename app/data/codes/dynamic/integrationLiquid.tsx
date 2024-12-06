const dynamicIntegrationLiquid = {
  wishlist: `<head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@sledge-app/js@latest/dist/style.css"
  />
</head>

<body>
  <div data-component="wishlist-widget"></div>

  <script
    type="module"
    data-api-key="Fill with your data"
    data-instant-search-api-key="Fill with your data"
    data-user-id="Fill with your data"
    data-user-email="Fill with your data"
    data-user-fullname="Fill with your data"
    id="sledge-embed-script"
    src="https://cdn.jsdelivr.net/npm/@sledge-app/js@latest/dist/sledge.min.js"
  ></script>
</body>
`,
  review: `<head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@sledge-app/js@latest/dist/style.css"
  />
</head>

<body>
  <div
    data-component="product-review-widget"
    data-product-id="Fill with your data"
    data-product-variant-id="Fill with your data"
  ></div>

  <script
    type="module"
    data-api-key="Fill with your data"
    data-instant-search-api-key="Fill with your data"
    data-user-id="Fill with your data"
    data-user-email="Fill with your data"
    data-user-fullname="Fill with your data"
    id="sledge-embed-script"
    src="https://cdn.jsdelivr.net/npm/@sledge-app/js@latest/dist/sledge.min.js"
  ></script>
</body>
`,
  instantSearch: `<head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@sledge-app/js@latest/dist/style.css"
  />
</head>

<body>
  <div
    data-component="instant-search-icon-widget"
  ></div>

  <script
    type="module"
    data-api-key="Fill with your data"
    data-instant-search-api-key="Fill with your data"
    data-user-id="Fill with your data"
    data-user-email="Fill with your data"
    data-user-fullname="Fill with your data"
    id="sledge-embed-script"
    src="https://cdn.jsdelivr.net/npm/@sledge-app/js@latest/dist/sledge.min.js"
  ></script>
</body>`,
  plp: `<head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@sledge-app/js@latest/dist/style.css"
  />
</head>

<body>
  <div
    data-component="instant-search-product-filter-widget"
    data-collection-id="Fill with your data"
  ></div>

  <script
    type="module"
    data-api-key="Fill with your data"
    data-instant-search-api-key="Fill with your data"
    data-user-id="Fill with your data"
    data-user-email="Fill with your data"
    data-user-fullname="Fill with your data"
    id="sledge-embed-script"
    src="https://cdn.jsdelivr.net/npm/@sledge-app/js@latest/dist/sledge.min.js"
  ></script>
</body>
`,
};

export default dynamicIntegrationLiquid;
