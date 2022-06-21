const colorInput = document.querySelector('input')
const boton = document.querySelector('button')
const parrafo = document.querySelector('p')
const container = document.querySelector('.containerColor')

boton.addEventListener('click', (e)=>{
   parrafo.textContent = colorInput.value 
   container.style.backgroundColor= colorInput.value

   navigator.clipboard
        .writeText(colorInput.value)
        .then(()=> console.log('color copiado'))
        .catch((error)=> console.log(error))

   e.preventDefault()
})

