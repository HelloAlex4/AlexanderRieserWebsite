// Function to read the 'page' parameter from the URL
function getPageFromUrl() {
  // Check if window is available (for browser environments)
  if (typeof window !== 'undefined') {
    // Get the query string (everything after the '?')
    const queryString = window.location.search;
    
    // Create a URLSearchParams object
    const urlParams = new URLSearchParams(queryString);
    
    // Get the 'page' parameter
    const page = urlParams.get('page');

    return page;
  } else {
    console.error('Window object not available');
    return null;
  }
}

async function loadPage(page) {
  try {
    // Fetch the markdown file
    const response = await fetch(`./documents/${page}.md`);
    const markdownContent = await response.text();

    // Convert markdown to HTML
    const htmlContent = marked.parse(markdownContent);

    // Display the HTML content
    document.getElementById('content').innerHTML = htmlContent;
  } catch (error) {
    console.error('Error loading page:', error);
  }
}

// Example usage
document.addEventListener('DOMContentLoaded', () => {
  const page = getPageFromUrl();
  if (page) {
    console.log('Page:', page);
    loadPage(page);
  } else {
    console.log('No page parameter found in URL');
    window.location.href = '../index.html';
  }
});
