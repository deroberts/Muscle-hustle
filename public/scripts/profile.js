const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#review-name').value.trim();
    const id = document.querySelector('#review-id').value.trim();
    const description = document.querySelector('#review-desc').value.trim();
  
    if (name && description && id) {
      const response = await fetch(`/api/user`, {
        method: 'POST',
        body: JSON.stringify({ name, description, id}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/user');
      } else {
        alert('Failed to create User');
      }
    }
  };
  
  // delete user 
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/user/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/user');
      } else {
        alert('Failed to delete User');
      }
    }
  };
  
  
  document
    .querySelector('.profile-list')
    .addEventListener('click', delButtonHandler);
  