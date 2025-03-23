document.addEventListener('DOMContentLoaded', function() {
  // Get all headings in the main content
  const content = document.querySelector('.main-content');
  if (!content) return;
  
  // Include h1 headings now
  const headings = content.querySelectorAll('h1, h2, h3, h4');
  if (headings.length === 0) return;
  
  const tocList = document.getElementById('floating-toc-list');
  if (!tocList) return;
  
  // Clear any existing content
  tocList.innerHTML = '';
  
  // Create TOC items
  headings.forEach(function(heading) {
    // Skip headings that might be hidden or part of other components
    if (window.getComputedStyle(heading).display === 'none') return;
    
    // Ensure the heading has an id
    if (!heading.id) {
      heading.id = heading.textContent.toLowerCase().replace(/[^\w]+/g, '-');
    }
    
    const listItem = document.createElement('li');
    const headingTag = heading.tagName.toLowerCase();
    // Add class based on heading level
    listItem.classList.add('toc-' + headingTag);
    
    const link = document.createElement('a');
    link.href = '#' + heading.id;
    link.textContent = heading.textContent;
    
    // Add different padding based on heading level
    if (headingTag === 'h2') {
      listItem.style.paddingLeft = '0.5rem';
    } else if (headingTag === 'h3') {
      listItem.style.paddingLeft = '1rem';
    } else if (headingTag === 'h4') {
      listItem.style.paddingLeft = '1.5rem';
    }
    
    listItem.appendChild(link);
    tocList.appendChild(listItem);
  });
  
  // If no items were added, hide the TOC
  if (tocList.children.length === 0) {
    const floatingToc = document.querySelector('.floating-toc');
    if (floatingToc) {
      floatingToc.style.display = 'none';
    }
    return;
  }
  
  // Fix for scroll behavior
  tocList.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Get the sticky header height if it exists
        const header = document.querySelector('.site-header') || document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
        
        // Calculate position with offset for header
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
        
        // Scroll to the target position
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
  
  // Highlight active section on scroll
  const tocLinks = tocList.querySelectorAll('a');
  
  function setActiveLink() {
    let found = false;
    
    for (let i = headings.length - 1; i >= 0; i--) {
      const heading = headings[i];
      // Skip hidden headings
      if (window.getComputedStyle(heading).display === 'none') continue;
      
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
