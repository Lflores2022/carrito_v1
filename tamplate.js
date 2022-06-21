const lista = document.querySelector('#lista')
const fragment = document.createDocumentFragment()
const liTamplate = document.querySelector('#liTamplate')

const listCountry = ['Perú', 'México', 'Colombia', 'Venezuela']

listCountry.forEach(pais => {
    const clone = liTamplate.content.cloneNode(true)
    clone.querySelector('.text-primary').textContent = pais

    fragment.appendChild(clone)
});

lista.appendChild(fragment)

/*
const clone = liTamplate.content.cloneNode(true)

clone.querySelector('.text-primary').textContent = 'hola'

lista.appendChild(clone)*/