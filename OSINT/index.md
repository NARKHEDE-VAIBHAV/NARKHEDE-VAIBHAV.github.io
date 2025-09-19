---
layout: default
title: "OSINT Posts"
---

<h2>All OSINT Posts</h2>
<ul class="post-list">
  {% assign folder = "OSINT/" %}
  {% assign posts = site.pages 
     | where_exp:"p","p.path contains folder" 
     | sort: "name" %}
  {% for p in posts %}
    {% if p.name != 'index.md' and p.name != 'index.html' %}
      <li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
