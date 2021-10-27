---
---

const pages = [
	{% for p in site.html_pages %}
	{% assign lines = p.content | newline_to_br | split: "<br />" %}
	{
		title: "{{ p.title }}",
		headers: [
			{% for line in lines %}
			"{{ line }}",
			{% endfor %}
		]
	},
	{% endfor %}
];

(function() {
	console.log("hello world");
})();
