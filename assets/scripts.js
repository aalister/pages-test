---
---
const pages = [
	{%- for p in site.html_pages %}
	{url: "{{ p.url | relative_url }}", title: "{{ p.title | replace: '"', "'" }}", headers: [
		{%- assign headers = p.content | markdownify | split: "<h" | shift %}
		{%- for header in headers %}
			{%- assign header = header | split: "</h" | first %}
			{%- assign level = header | slice: 0 %}
			{%- assign id = header | split: 'id="' | last | split: '"' | first %}
			{%- assign content = header | split: ">" | last -%}
			{level: {{ level }}, id: {{ id }}, content: "{{ content | replace: '"', "'" }}"},
		{%- endfor -%}
		]},
	{%- endfor %}
];

(function() {
	console.log("hello world");
})();
