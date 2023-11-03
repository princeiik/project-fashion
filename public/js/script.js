//Control Image Carosuel
function startCarousel() {
    let activeImage = 0
    const images = document.querySelectorAll("carousel img")

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



//Handle Delete Requests

//Handle Errors from server if unable to write data (optional)