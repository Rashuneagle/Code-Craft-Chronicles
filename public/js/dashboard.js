const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#movie-name').value.trim();
    const year = document.querySelector('#movie-year').value.trim();
    const description = document.querySelector('#movie-desc').value.trim();
  
    if (name && year && description) {
      const response = await fetch(`/api/movies`, {
        method: 'POST',
        body: JSON.stringify({ name, year, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create movie');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/movies/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete movie');
      }
    }
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    // Ensure the element exists before adding the event listener
    const newMovieForm = document.querySelector("#newMovieForm");
    
    if (newMovieForm) { // Check if the element is found
      newMovieForm.addEventListener("submit", event => {
        event.preventDefault();
  
        // form handling code
      });
    } else {
      console.error('Error: #newMovieForm not found.');
    }
  });
  
  document
    .querySelector('.movie-list')
    .addEventListener('click', delButtonHandler);
  