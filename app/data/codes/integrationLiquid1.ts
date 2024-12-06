export default `{% assign user_id = "" %}
{% assign user_fullname = "" %}
{% if customer %}
    {% assign user_id = customer.id %}
    {% assign user_fullname = customer.name %}
    {% if customer.name == null or customer.name == "" %}{% assign user_fullname = customer.email | split: "@" | first %}{% endif %}
{% endif %}

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@sledge-app/js@latest/dist/style.css"
/>

<script
    data-sledge-api-key="API-Key-from-Admin-Panel" 
    data-sledge-instant-search-api-key="Instant-Search-API-Key-from-Admin-Panel" 
    data-user-id="{{ user_id }}"
    data-user-fullname="{{ user_fullname }}"
    id="sledge-embed-script" 
    src="https://cdn.jsdelivr.net/npm/@sledge-app/js@latest/dist/sledge.min.js"
>
</script>`;