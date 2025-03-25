---
title: "Blog"
permalink: /blog/
layout: default
---
# Thoughts & Insights

{% for post in site.posts %}
<article class="blog-post-card">
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  
  <p class="excerpt">
    {{ post.excerpt | strip_html | truncatewords: 40 }}
  </p>

  <a href="{{ post.url }}" class="read-more">Continue reading</a>
</article>
{% endfor %}

<style>
body {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 300;
  color: #222;
  margin-bottom: 50px;
  letter-spacing: -0.5px;
}

.blog-post-card {
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}

.blog-post-card:hover {
  box-shadow: 0 6px 12px rgba(0,0,0,0.08);
  transform: translateY(-3px);
}

.blog-post-card h2 {
  margin: 0 0 20px 0;
  font-size: 1.8rem;
  font-weight: 500;
  color: #333;
}

.blog-post-card h2 a {
  color: #333;
  text-decoration: none;
  transition: color 0.2s ease;
}

.blog-post-card h2 a:hover {
  color: #007ACC;
}

.excerpt {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.read-more {
  display: inline-block;
  background-color: #007ACC;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.read-more:hover {
  background-color: #005a8c;
}

@media (min-width: 768px) {
  .blog-post-card {
    display: grid;
    grid-template-columns: 3fr 1fr;
    align-items: center;
    gap: 30px;
  }

  .read-more {
    justify-self: end;
  }
}

@media (max-width: 767px) {
  .blog-post-card {
    text-align: center;
  }
}
</style>
