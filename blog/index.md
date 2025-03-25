---
title: "Blog"
permalink: /blog/
layout: page
nav_exclude: true
---

# 📝 Insights & Writings

<div class="blog-grid">
{% for post in site.posts %}
  <article class="blog-post-card">
    <header class="post-header">
      <h2 class="post-title">
        <a href="{{ post.url }}">{{ post.title }}</a>
      </h2>
      {% if post.date %}
      <time datetime="{{ post.date | date_to_xmlschema }}" class="post-date">
        {{ post.date | date: "%B %d, %Y" }}
      </time>
      {% endif %}
    </header>

    {% if post.excerpt %}
    <div class="post-excerpt">
      {{ post.excerpt | strip_html | truncatewords:30 }}
    </div>
    {% endif %}

    <footer class="post-footer">
      {% if post.tags.size > 0 %}
      <div class="post-tags">
        {% for tag in post.tags %}
        <span class="tag">{{ tag }}</span>
        {% endfor %}
      </div>
      {% endif %}

      <a href="{{ post.url }}" class="read-more">Read More →</a>
    </footer>
  </article>
{% endfor %}
</div>

{% if site.posts.size == 0 %}
<p class="no-posts">No blog posts have been published yet.</p>
{% endif %}

<style>
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.blog-post-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.25rem;
  transition: box-shadow 0.3s ease;
  background-color: #ffffff;
}

.blog-post-card:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.post-header {
  margin-bottom: 1rem;
}

.post-title a {
  color: #333;
  text-decoration: none;
  font-weight: 600;
}

.post-title a:hover {
  color: #0066cc;
}

.post-date {
  color: #666;
  font-size: 0.875rem;
}

.post-excerpt {
  color: #555;
  margin-bottom: 1rem;
}

.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f0f0f0;
  padding-top: 1rem;
}

.post-tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  background-color: #f4f4f4;
  color: #333;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
}

.read-more {
  color: #0066cc;
  text-decoration: none;
  font-weight: 500;
}

.no-posts {
  text-align: center;
  color: #666;
  padding: 2rem;
}
</style>
