---
title: "Blog"
permalink: /blog/
layout: default
---

# 📝 Blog

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">

{% for post in site.posts %}
<div style="border: 1px solid #ddd; padding: 15px; border-radius: 8px;">
  <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
  <p><em>{{ post.date | date: "%B %d, %Y" }}</em></p>
  <p>{{ post.excerpt }}</p>
</div>
{% endfor %}

</div>
