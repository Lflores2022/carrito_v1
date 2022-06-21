const listCountry = ['Perú', 'México', 'Colombia', 'Venezuela']
const pais = document.querySelector('#paises')

const fragment = document.createDocumentFragment()
//----------------Ejercicio---------------------//

listCountry.forEach(country =>{
    const li = document.createElement('li')
    li.className = 'list'

    const b = document.createElement('b')
    b.textContent = 'Pais: '

    const span = document.createElement('span')
    span.className = 'text-primary'
    span.textContent = country
    
    li.appendChild(b)
    li.appendChild(span)
    fragment.appendChild(li)
})
pais.appendChild(fragment)

//-----------------Fragment Inverido--------------//
/*

listCountry.forEach(element =>{
    const newNode = document.createElement('li')
    newNode.textContent = element
    
    const referenceNode = fragment.firstChild

    fragment.insertBefore(newNode, referenceNode)
})

pais.appendChild(fragment)*/

//-----------Insertar con Fragment--------------//

/*
listCountry.forEach(element =>{
    const newNode = document.createElement('li')
    newNode.textContent = element

    fragment.appendChild(newNode)
})

pais.appendChild(fragment)


*/ 

//---------------InnerHTML--------------//
/*listCountry.forEach(element => {
    pais.innerHTML += `
    <li>${element}</li>
    `
});*/