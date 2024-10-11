async function loadPosts() {
  try {
    const response = await fetch('./documents/posts.json');
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

function displayPosts(posts) {
  const postsContainer = document.getElementById('content');
  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.innerHTML = `<h3><a href="./post.html?page=${post.id}">${post.title}</a></h3><p>${post.date}</p><div class="post-divider"></div>`;
    postsContainer.appendChild(postElement);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadPosts().then(displayPosts);
});