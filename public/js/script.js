//Control Image Carosuel
function startCarousel() {
    let activeImage = 0
    const images = document.querySelectorAll("#carousel img")

    function cycleImages() {
        if(!images[activeImage]) {
            clearInterval(intervalId)
            return;
        }

        images[activeImage].classList.remove('active')
        activeImage = (activeImage + 1) % images.length
        images[activeImage].classList.add('active')
    }

    let intervalId = setInterval(cycleImages, 3000)
}


//Handle Edit Requests
function editPost(id, title, description) {
  document.getElementById('updateId').value = id

  document.getElementById('updateTitle').value = title
  document.getElementById('updateDescription').value = description

  document.getElementById('updateForm').action = `/post/update/${id}`
}

//Handle Delete Requests
async function deletePost(id) {
  try {
    const response = await fetch(`http://localhost:3500/post/delete/${id}`,{
      method: 'DELETE'
    })
    if(response.ok) {
      location.reload()
    } else {
      console.log('Failed to delete post')
    }
  } catch(error) {
    console.log('error occurred', error);
  }
}

//Handle Errors from server if unable to write data (optional)
function checkForError() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('error')) {
    alert("Validation failed. Title and description are required.");
  }
}

window.onload = function() {
  startCarousel();
  checkForError();
}