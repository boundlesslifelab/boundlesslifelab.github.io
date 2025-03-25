---
title: "Blog"
permalink: /blog/
layout: default
---
# Thoughts

{% for post in site.posts %}
<div class="blog-card">
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <p class="excerpt">{{ post.excerpt | strip_html | truncatewords: 15 }}</p>
  <a href="{{ post.url }}" class="continue-reading">Continue reading</a>
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
  font-size: 18px;
}

h1 {
  text-align: center;
  font-weight: 300;
  color: #222;
  margin-bottom: 40px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  font-size: 2.2rem;
}

.blog-card {
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 20px;
  transition: box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
}

.blog-card:hover {
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.blog-card h2 {
  margin: 0 0 10px 0;
  font-size: 1.4rem;
  font-weight: 500;
}

.blog-card h2 a {
  color: #333;
  text-decoration: none;
  transition: color 0.2s ease;
}

.blog-card h2 a:hover {
  color: #007ACC;
}

.excerpt {
  margin: 0 0 15px 0;
  font-size: 1rem;
  color: #666;
  flex-grow: 1;
}

.continue-reading {
  align-self: flex-start;
  text-decoration: none;
  color: white;
  background-color: #00CED1;  /* Bright turquoise/aqua */
  padding: 10px 16px;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.continue-reading:hover {
  background-color: #20B2AA;  /* Slightly darker aqua */
  transform: translateY(-2px);
}
</style>
