async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="review-title"]').value;
    const review = document.querySelector('input[name="review"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        review
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      alert(response.statusText);
    }
  };