// set up public folder. 
// set up sessions and target the textbox in the comments. id specific. api requests, post request.
console.log("test")

// Desmonds code. attaching comment to page with on click submit button.
async function newFormHandler(event) {
    event.preventDefault();
    const commentData = document.querySelector('#commentData').value;
    // Send fetch request to add a new dish
    const response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({
      commentData
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the dish is added, the 'all' template will be rerendered
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add comment');
    }
  }
  
  document.querySelector('.comment').addEventListener('submit', newFormHandler);
    