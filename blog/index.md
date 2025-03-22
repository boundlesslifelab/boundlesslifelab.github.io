---
title: "Blog"
permalink: /blog/
layout: default
---

# 📝 Blog

<ul style="border-left: 2px solid #ddd; padding-left: 20px; list-style: none;">
{% for post in site.posts %}
  <li>
    <strong>{{ post.date | date: "%B %d, %Y" }}</strong> <br>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>
