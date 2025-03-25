---
title: "Blog"
permalink: /blog/
layout: default
---
# Blog

Exploring thoughts on growth, mindset, and resilience.

{% for post in site.posts %}
<article class="blog-post">
  <header>
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    {% if post.date %}
    <time datetime="{{ post.date | date_to_xmlschema }}">
      {{ post.date | date: "%B %d, %Y" }}
    </time>
    {% endif %}
  </header>

  <p class="excerpt">
    {{ post.excerpt | strip_html | truncatewords: 30 }}
  </p>

  <footer>
    <a href="{{ post.url }}" class="read-more">Continue reading</a>
  </footer>
</article>
{% endfor %}

<style>
body {
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  color: #333;
  padding: 20px;
}

h1 {
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  font-weight: 300;
  color: #222;
}

.blog-post {
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
}

.blog-post:last-child {
  border-bottom: none;
}

.blog-post header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 15px;
}

.blog-post h2 {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 500;
}

.blog-post h2 a {
  color: #333;
  text-decoration: none;
  transition: color 0.2s ease;
}

.blog-post h2 a:hover {
  color: #007ACC;
}

time {
  color: #888;
  font-size: 0.9rem;
}

.excerpt {
  color: #666;
  margin-bottom: 15px;
}

.read-more {
  color: #007ACC;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.read-more:hover {
  color: #005a8c;
}

@media (max-width: 600px) {
  .blog-post header {
    flex-direction: column;
    align-items: flex-start;
  }

  time {
    margin-top: 5px;
  }
}
</style>
