---
---

const pages = [
	{% for p in site.html_pages %}
	{
		title: "{{ p.title }}",
		content: "{{ p.content | newline_to_br | split "<br />" }}"
	},
	{% endfor %}
];

(function() {
	console.log("hello world");
})();
