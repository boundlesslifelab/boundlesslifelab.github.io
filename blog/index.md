---
title: "Blog"
permalink: /blog/
layout: default
---
# Blog Posts

{% for post in site.posts %}
<div class="blog-card">
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
</div>
{% endfor %}

<style>
:root {
  --primary-color: #2D3748;
  --accent-color: #4299E1;
  --background-color: #F7FAFC;
  --card-background: #FFFFFF;
  --text-color: #2D3748;
  --border-color: #E2E8F0;
  --hover-shadow: rgba(0, 0, 0, 0.06);
}

body {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--background-color);
}

h1 {
  text-align: center;
  font-weight: 700;
  color: var(--primary-color);
  margin: 2rem 0 2.5rem;
  font-size: 2.5rem;
  position: relative;
  padding-bottom: 1rem;
}

h1::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background-color: var(--accent-color);
  border-radius: 2px;
}

.blog-card {
  background: var(--card-background);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem 2rem;
  margin-bottom: 1.5rem;
  transition: box-shadow 0.3s ease;
}

.blog-card:hover {
  box-shadow: 0 6px 12px var(--hover-shadow);
}

.blog-card h2 {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 600;
}

.blog-card h2 a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.2s ease;
}

.blog-card h2 a:hover {
  color: var(--accent-color);
}

@media (max-width: 640px) {
  body {
    padding: 20px 16px;
  }
  
  h1 {
    font-size: 2rem;
  }

  .blog-card {
    padding: 1.25rem 1.5rem;
  }

  .blog-card h2 {
    font-size: 1.25rem;
  }
}
</style>
