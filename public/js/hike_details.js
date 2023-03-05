// set up public folder. 
// set up sessions and target the textbox in the comments. id specific. api requests, post request.
console.log("test")

// Desmonds code. attaching comment to page with on click submit button.
async function newFormHandler(event) {
    event.preventDefault();
    let targetEl=document.querySelector('#commentData');
    const content = targetEl.value;
    let hike_id = targetEl.dataset.hikeid;
    
    // const hike_id = document.querySelector('#commentData').value;
    // Send fetch request to add a new dish
    const response = await fetch(`/api/comment/${hike_id}`, {
      method: 'POST',
      body: JSON.stringify({
      content,
      
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the dish is added, the 'all' template will be rerendered
    if (response.ok) {
      document.location.replace(`/api/hike/${hike_id}`);
    } else {
      alert('Failed to add comment');
    }
  }
  
  document.querySelector('#commentForm').addEventListener('submit', newFormHandler);


async function newRatingHandler(event) {
    event.preventDefault();
    let targetEl=document.querySelector('#ratingButton');
    let selectOption= document.querySelector('#ratingButton');
    const rating = selectOption.value;
    let hike_id = targetEl.dataset.hikeid;
    
    // const hike_id = document.querySelector('#commentData').value;
    // Send fetch request to add a new dish
    const response = await fetch(`/api/hike/${hike_id}`, {
      method: 'PUT',
      body: JSON.stringify({
      content,
      
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the dish is added, the 'all' template will be rerendered
    if (response.ok) {
      document.location.replace(`/api/hike/${hike_id}`);
    } else {
      alert('Failed to add comment');
    }
  }
  
  document.querySelector('#selectBox').addEventListener('submit', newRatingHandler);


  async function deleteComment(event) {
    event.preventDefault();
    let targetEl=document.querySelector('#deleteButton');
    const content = targetEl.value;
    let hike_id = targetEl.dataset.commentid;
    
    // const hike_id = document.querySelector('#commentData').value;
    // Send fetch request to add a new dish
    const response = await fetch(`/api/comment/${hike_id}`, {
      method: 'DELETE',
      body: JSON.stringify({
      content,
      
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the dish is added, the 'all' template will be rerendered
    if (response.ok) {
      document.location.replace(`/api/hike/${hike_id}`);
    } else {
      alert('Failed to delete comment');
    }
  }
    

  
   
    document.querySelector('#commentCard').addEventListener('delete', newRatingHandler);
    
    
    
    