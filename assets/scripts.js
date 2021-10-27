---
---

const pages = [
	{% for p in site.html_pages %}
	{
		title: "{{ p.title }}",
		content: "{{ p.content | jsonify }}"
	},
	{% endfor %}
];

(function() {
	console.log("hello world");
})();
