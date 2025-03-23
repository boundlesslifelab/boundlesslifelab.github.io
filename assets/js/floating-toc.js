document.addEventListener('DOMContentLoaded', function() {
  // Get all headings in the main content
  const content = document.querySelector('.main-content');
  if (!content) return;
  
  const headings = content.querySelectorAll('h2, h3, h4');
  if (headings.length === 0) return;
  
  const tocList = document.getElementById('floating-toc-list');
  if (!tocList) return;
  
  // Create TOC items
  headings.forEach(function(heading) {
    // Ensure the heading has an id
    if (!heading.id) {
      heading.id = heading.textContent.toLowerCase().replace(/[^\w]+/g, '-');
    }
    
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#' + heading.id;
    link.textContent = heading.textContent;
    
    // Add different padding based on heading level
    if (heading.tagName === 'H3') {
      listItem.style.paddingLeft = '1rem';
    } else if (heading.tagName === 'H4') {
      listItem.style.paddingLeft = '2rem';
    }
    
    listItem.appendChild(link);
    tocList.appendChild(listItem);
    
    // Highlight active section on scroll
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Highlight active section on scroll
  const tocLinks = tocList.querySelectorAll('a');
  
  function setActiveLink() {
    let found = false;
    
    for (let i = headings.length - 1; i >= 0; i--) {
      const heading = headings[i];
      const rect = heading.getBoundingClientRect();
      
      if (rect.top <= 100) {
        tocLinks.forEach(link => {
          link.parentElement.classList.remove('active');
          if (link.getAttribute('href') === '#' + heading.id) {
            link.parentElement.classList.add('active');
            found = true;
          }
        });
        
        if (found) break;
      }
    }
  }
  
  window.addEventListener('scroll', setActiveLink);
  setActiveLink(); // Set initial active link
});
