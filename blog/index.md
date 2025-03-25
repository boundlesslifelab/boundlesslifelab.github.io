---
title: "Blog"
permalink: /blog/
layout: default
---
# Thoughts

{% for post in site.posts %}
<div class="blog-entry">
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
</div>
{% endfor %}

<style>
body {
  max-width: 800px;
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

.blog-entry {
  margin-bottom: 20px;
}

.blog-entry h2 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 400;
}

.blog-entry a {
  color: #333;
  text-decoration: none;
  transition: color 0.2s ease;
}

.blog-entry a:hover {
  color: #007ACC;
}
</style>
