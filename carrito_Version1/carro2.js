const carrito = document.querySelector('#carrito')
const template = document.querySelector('#template')
const fragment = document.createDocumentFragment()
const btns = document.querySelectorAll('.card button')

const objectCarr = {}

const agregarCarr = (e) =>{
   

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1
    }

    if(objectCarr.hasOwnProperty(producto.id)){
        producto.cantidad = objectCarr[producto.titulo].cantidad + 1
    }

    objectCarr[producto.titulo] = producto

    printCarr(producto)
}

const printCarr = (producto) =>{

    carrito.textContent = ''

    Object.values(objectCarr).forEach(item =>{
        const clone = template.content.firstElementChild.cloneNode(true)
        clone.querySelector('.lead').textContent = item.titulo
        clone.querySelector('.badge').textContent = item.cantidad

        fragment.appendChild(clone)
    })

    carrito.appendChild(fragment)
}

btns.forEach(btn =>btn.addEventListener('click', agregarCarr))