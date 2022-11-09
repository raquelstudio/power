
const body = document.querySelector('body');
const imgContainer = document.createElement('div');

function displayImg(imgUrl, elt) {

  body.appendChild(imgContainer);

  imgContainer.innerHTML = `<img src='${imgUrl}'>`;

  imgContainer.classList.add('displayMe');

  imgContainer.style.top = (elt.offsetTop + 40) + 'px';

  imgContainer.style.left = elt.offsetLeft  + 'px';

  Let difference = document.documentElement.clientWidth - elt.offsetLeft;

  if(difference < 250) {

    imgContainer.style.right = '20px';
    imgContainer.style.left = 'auto';

  } else {

      imgContainer.style.left = elt.offsetLeft + 'px';

    }

}


function removeImg() {

  body.removeChild(imageContainer);

}
