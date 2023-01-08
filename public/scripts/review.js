const newReviewForm = document.querySelector('.new-review-form');

async function newFormHandler(event) {
    event.preventDefault();

  
    const title = document.getElementById('review-name').value;
    const review = document.getElementById('review-desc').value;
  
    const response = await fetch(`/api/reviews`, {
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
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };

  if (newReviewForm) {
    newReviewForm.addEventListener('submit', newFormHandler);
  }