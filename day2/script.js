const checkbox = document.querySelector('#toggle')
const html = document.querySelector('html')

checkbox.addEventListener('click', (e) => {
  console.log(e) //Untuk melihat property checked nya
  checkbox.checked ? html.classList.add('dark') : html.classList.remove('dark')
})