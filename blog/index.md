---
title: "Blog"
permalink: /blog/
layout: default
---

# 📝 Blog

| Date | Title |
|------|-------|
{% for post in site.posts %}
| {{ post.date | date: "%b %d, %Y" }} | [{{ post.title }}]({{ post.url }}) |
{% endfor %}
