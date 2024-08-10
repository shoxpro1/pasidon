const title = document.querySelector('.title');
const button = document.querySelector('.btn')
const but = document.querySelector('.bt')
const big = document.querySelector('.big')
const hi = document.querySelector('.hi')


button.addEventListener('click', () => {
 title.classList.add('lit')
 big.classList.add('bignew')
 button.classList.add('bu')
 button.textContent = 'click'
 but.textContent = 'Tugma'
 but.classList.remove('buti')
 hi.classList.add('hinew')
 hi.textContent = 'Magic'

}) 
but.addEventListener('click', () => {
    title.classList.remove('lit')
     button.textContent = 'Tugma'
 but.textContent = 'click'
 button.classList.remove('bu')
 but.classList.add('buti')
 big.classList.remove('bignew')
 hi.classList.remove('hinew')
 hi.textContent = 'Welcome'
   }) 