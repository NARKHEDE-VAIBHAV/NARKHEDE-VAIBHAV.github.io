---
layout: default
title: "linux Posts"
---

<h2>All linux Posts</h2>
<ul class="post-list">
  {% assign folder = "linux/" %}
  {% assign posts = site.pages 
     | where_exp:"p","p.path contains folder" 
     | sort: "name" %}
  {% for p in posts %}
    {% if p.name != 'index.md' and p.name != 'index.html' %}
      <li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
