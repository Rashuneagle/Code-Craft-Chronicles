var newPostForm = document.querySelector("#newPostForm");

newPostForm.addEventListener("submit", event => {
  event.preventDefault();

  var title = document.querySelector("#postTitle").value;
  var content = document.querySelector("#postContent").value;
  var image = document.querySelector("#postImage").value;

  if (!title || !content) {
    alert('Title and content are required. Please fill them out.');
    return;
  }

  const postObj = {
    title: title,
    content: content,
    image: image
  };

  fetch('/api/newPosts', {
    method: 'POST',
    body: JSON.stringify(postObj),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    throw new Error('Error - Please Try Again');
  })
  .then(data => {
    console.log(data);
    location.replace('/dashboard');
  })
  .catch(error => {
    console.error('Error:', error);
    alert(error.message);
  });
});
