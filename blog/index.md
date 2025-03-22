---
title: "Blog"
permalink: /blog/
layout: default
---

# 📝 Blog

A collection of my thoughts and writings.

---

{% for post in site.posts %}
<div style="border: 1px solid #ddd; padding: 10px; margin-bottom: 15px; border-radius: 8px;">
  <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
  <p><em>{{ post.date | date: "%B %d, %Y" }}</em></p>
</div>
{% endfor %}
