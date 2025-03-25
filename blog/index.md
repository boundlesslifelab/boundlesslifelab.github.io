---
title: "Blog"
permalink: /blog/
layout: default
---
# Blog Posts

{% for post in site.posts %}
<div class="blog-card">
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <p class="excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
  <a href="{{ post.url }}" class="continue-reading">Read More →</a>
</div>
{% endfor %}

<style>
:root {
  --primary-color: #2D3748;
  --accent-color: #4299E1;
  --background-color: #FFFFFF;
  --card-background: #FFFFFF;
  --text-color: #2D3748;
  --text-light: #718096;
  --border-color: #E2E8F0;
  --hover-shadow: rgba(0, 0, 0, 0.1);
}

body {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  line-height: 1.7;
  color: var(--text-color);
  font-size: 16px;
  background-color: #F7FAFC;
}

h1 {
  text-align: center;
  font-weight: 700;
  color: var(--primary-color);
  margin: 2rem 0 3rem;
  font-size: 2.5rem;
  letter-spacing: -0.5px;
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
  padding: 2rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.blog-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px var(--hover-shadow);
}

.post-meta {
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 0.875rem;
  color: var(--text-light);
  margin-bottom: 0.5rem;
}

.post-date {
  font-weight: 500;
}

.post-categories {
  display: flex;
  gap: 0.5rem;
}

.category {
  background-color: #EDF2F7;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.blog-card h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.3px;
  line-height: 1.3;
}

.blog-card h2 a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.2s ease;
}

.blog-card h2 a:hover {
  color: var(--accent-color);
}

.excerpt {
  margin: 0;
  font-size: 1rem;
  color: var(--text-light);
  line-height: 1.6;
}

.continue-reading {
  align-self: flex-start;
  text-decoration: none;
  color: var(--accent-color);
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
}

.continue-reading:hover {
  border-bottom-color: var(--accent-color);
}

@media (max-width: 640px) {
  body {
    padding: 20px 16px;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  .blog-card {
    padding: 1.5rem;
  }
  
  .blog-card h2 {
    font-size: 1.25rem;
  }
}
</style>
