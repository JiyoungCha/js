const btnImg = document.querySelector('#btnImg');
btnImg.addEventListener('click', () => {
  const searchTextInput = document.querySelector('#searchTextInput');
  let url = searchTextInput.value;

  if(url) {
  axios.get(url)
    .then(response => {
      const imgContainer = document.querySelector('.imgContainer');
      imgContainer.innerHTML = '';

      response.data.forEach((item, idx) => {
      const newImg = document.createElement('img');
      newImg.classList.add('newImg')
      newImg.setAttribute('src', item.download_url);
      
      imgContainer.appendChild(newImg);
      }); 
    })    
  }
  searchTextInput.value = '';
});