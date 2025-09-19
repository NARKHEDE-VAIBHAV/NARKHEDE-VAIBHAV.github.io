---
layout: default
---

<h1>{{ page.title }}</h1>

<ul>
  {% assign folder = page.category %}
  {% assign posts_in_folder = site.pages | where_exp:"p","p.path contains folder" %}
  {% assign sorted_posts = posts_in_folder | sort: "path" %}
  
  {% for p in sorted_posts %}
    {% if p.name != 'index.md' and p.name != 'index.html' %}
      <li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
