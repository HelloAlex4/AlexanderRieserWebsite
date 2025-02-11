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

const renderer = new marked.Renderer();

// Preserve normal paragraph behavior while handling LaTeX
const originalParagraphRenderer = renderer.paragraph.bind(renderer);
renderer.paragraph = function (text) {
  if (text.startsWith("$$") && text.endsWith("$$")) {
    return `<div class="math-block">${text.slice(2, -2)}</div>`; // Remove the $$
  }
  return originalParagraphRenderer(text);
};

// Apply the custom renderer
marked.use({ renderer });

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

    // Convert markdown to HTML but preserve math blocks
    const htmlContent = marked.parse(markdownContent);
    document.getElementById('content').innerHTML = htmlContent;

    // Ensure KaTeX or MathJax re-renders after inserting content
    if (window.MathJax) {
      MathJax.typesetPromise();
    } else if (typeof renderMathInElement === "function") {
      renderMathInElement(document.getElementById("content"));
    }

    // Update page metadata
    document.getElementById('header-title').innerHTML = post.title;
    document.getElementById('date').innerHTML = post.date;
    document.getElementById('author').innerHTML = `By ${post.author}`;
    document.getElementById('tags').innerHTML = post.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ');

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
