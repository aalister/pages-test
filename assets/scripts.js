---
---
const pages = [
	{%- for p in site.html_pages %}
	{url: "{{ p.url }}", title: "{{ p.title | replace: '"', "'" }}", headers: [
		{%- assign headers = p.content | markdownify | split: "<h" | shift %}
		{%- for header in headers %}
			{%- assign level = header | slice: 0 %}
			{%- assign content = header | split: "</h" | first | split: ">" | last -%}
			{level: {{ level }}, content: "{{ content | replace: '"', "'" }}"},
		{%- endfor -%}
		]},
	{%- endfor %}
];

(function() {
	console.log("hello world");
})();
