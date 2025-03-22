---
title: "Blog"
permalink: /blog/
---

# 📝 Blog

Welcome to my blog! Here you’ll find articles on various topics.

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url }})
  🗓️ *Published on {{ post.date | date: "%B %d, %Y" }}*
{% endfor %}
