---
title: "Blog"
permalink: /blog/
layout: default
---
# Thoughts

{% for post in site.posts %}
<div class="blog-card">
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <p class="excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
</div>
{% endfor %}

<style>
body {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

h1 {
  text-align: center;
  font-weight: 300;
  color: #222;
  margin-bottom: 40px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.blog-card {
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 20px;
  transition: box-shadow 0.2s ease;
}

.blog-card:hover {
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.blog-card h2 {
  margin: 0 0 10px 0;
  font-size: 1.2rem;
  font-weight: 500;
}

.blog-card a {
  color: #333;
  text-decoration: none;
  transition: color 0.2s ease;
}

.blog-card a:hover {
  color: #007ACC;
}

.excerpt {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}
</style>
