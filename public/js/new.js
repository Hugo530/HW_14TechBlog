const newFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;

  if(title && body) {
    await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    document.location.replace('/dashboard');
  } else {
    alert('Post must include title and body!');
  }
};

document
  .querySelector('#new-post-form')
  .addEventListener('submit', newFormHandler);
