---
title: "Blog"
permalink: /blog/
layout: default
---

# Blog  

Welcome to the blog! Explore insights on growth, mindset, resilience, and more.  

{% for post in site.posts %}
<div style="border-left: 3px solid #007ACC; padding: 15px; margin-bottom: 20px; background: #f8f9fa; border-radius: 5px;">
  <h3 style="margin: 0;"><a href="{{ post.url }}" style="color: #007ACC; text-decoration: none;">{{ post.title }}</a></h3>
  
  <p>{{ post.excerpt | strip_html | truncatewords: 30 }} </p>
  <p><a href="{{ post.url }}" style="color: #007ACC; font-weight: bold;">Read more →</a></p>

</div>
{% endfor %}
