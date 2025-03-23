.floating-toc {
  position: sticky;
  top: 4rem;
  right: 0;
  float: right;
  width: 240px;
  margin-left: 1rem;
  padding: 1.25rem;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  background-color: #fafafa;
  font-size: 0.8rem;
  
  @media (max-width: 1064px) {
    display: none;
  }
}

.floating-toc-label {
  font-weight: 600;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  font-size: 0.7rem;
  color: #555555;
  letter-spacing: 0.5px;
  border-bottom: 1px solid #eeebee;
  padding-bottom: 0.5rem;
}

.floating-toc-list {
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
}

.floating-toc-list li {
  margin-bottom: 0.25rem;
  line-height: 1.3;
}

.floating-toc-list li a {
  color: #5c5962;
  text-decoration: none;
  font-size: 0.75rem;
  display: block;
  padding: 0.2rem 0;
}

/* H1 styling - most prominent */
.floating-toc-list li.toc-h1 {
  margin-top: 0.75rem;
  margin-bottom: 0.5rem;
}

.floating-toc-list li.toc-h1:first-child {
  margin-top: 0;
}

.floating-toc-list li.toc-h1 > a {
  font-weight: 800;
  color: #222222;
  font-size: 0.85rem;
  letter-spacing: 0.3px;
  padding-bottom: 0.3rem;
  border-bottom: 1px dashed #eeebee;
}

/* H2 styling - second level headings */
.floating-toc-list li.toc-h2 {
  margin-top: 0.5rem;
}

.floating-toc-list li.toc-h2:first-child {
  margin-top: 0;
}

.floating-toc-list li.toc-h2 > a {
  font-weight: 700;
  color: #333333;
  font-size: 0.8rem;
  letter-spacing: 0.2px;
}

/* Hover and active states */
.floating-toc-list li a:hover {
  color: #27262b;
  text-decoration: underline;
}

.floating-toc-list li.active > a {
  color: #2c84fa;
  font-weight: 500;
}

.floating-toc-list li.toc-h1.active > a {
  font-weight: 800;
}

.floating-toc-list li.toc-h2.active > a {
  font-weight: 700;
}

.floating-toc-list li ul {
  padding-left: 0.5rem;
  margin-top: 0.25rem;
  list-style: none;
}
