// Function to read the 'id' parameter from the URL
function getIdFromUrl() {
  if (typeof window !== 'undefined') {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('page');
  } else {
    console.error('Window object not available');
    return null;
  }
}

async function fetchPostsData() {
  try {
    const response = await fetch('./documents/posts.json');
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching posts data:', error);
    return null;
  }
}

async function loadPage(id) {
  try {
    const postsData = await fetchPostsData();
    if (!postsData) return;

    const post = postsData.find(p => p.id === id);
    if (!post) {
      console.error('Post not found');
      return;
    }

    // Fetch the markdown file
    const response = await fetch(`./documents/${post.fileName}`);
    const markdownContent = await response.text();

    // Configure marked to preserve LaTeX delimiters
    marked.setOptions({
      breaks: true,
      gfm: true,
      pedantic: false,
      sanitize: false
    });

    // Convert markdown to HTML
    let htmlContent = marked.parse(markdownContent);

    // Insert processed content into the page
    document.getElementById('content').innerHTML = htmlContent;

    // Update metadata
    document.getElementById('header-title').innerHTML = post.title;
    document.getElementById('date').innerHTML = post.date;
    document.getElementById('author').innerHTML = `By ${post.author}`;
    document.getElementById('tags').innerHTML = post.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ');

    // Wait for MathJax to be ready and then typeset
    if (window.MathJax) {
      await MathJax.startup.promise;
      await MathJax.typesetPromise([document.getElementById('content')]);
    }

  } catch (error) {
    console.error('Error loading page:', error);
  }
}


// Example usage
document.addEventListener('DOMContentLoaded', () => {
  const id = getIdFromUrl();
  if (id) {
    console.log('Post ID:', id);
    loadPage(id);
  } else {
    console.log('No id parameter found in URL, going to root page');
    window.location.href = './index.html';
  }
});
