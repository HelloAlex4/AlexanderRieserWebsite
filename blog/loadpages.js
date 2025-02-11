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

    // Configure marked to handle LaTeX
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function(code) {
        return code;
      },
      breaks: true,
      gfm: true,
      math: true
    });

    // Convert markdown to HTML
    const htmlContent = marked.parse(markdownContent);

    // Display the HTML content
    document.getElementById('content').innerHTML = htmlContent;
    document.getElementById('header-title').innerHTML = post.title;
    document.getElementById('date').innerHTML = post.date;
    document.getElementById('author').innerHTML = `By ${post.author}`;

    // Display tags
    const tagsElement = document.getElementById('tags');
    tagsElement.innerHTML = post.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ');

    // Trigger MathJax to process the new content
    if (window.MathJax) {
      MathJax.typesetPromise();
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
