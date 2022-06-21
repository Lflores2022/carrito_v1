const gato = {
    nombre: "valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    /*comer (alimento) {console.log(`${this.nombre} esta comiendo ${alimento}`)},
    listarEnemigos(){
        this.enemigos.forEach((enemy)=> console.log(enemy))
    }*/
    /*otros: {
        amigos: ["cobarde", "timido"],
        favoritos: {
            comida: {
                frio: "salmon",
                caliente: "pollo",
            },
        },
    },*/
    get nombreMayuscula(){
        return this.nombre.toUpperCase
    },

    set agragarEnemigo(nuevoEnemigo){
        this.enemigos.push(nuevoEnemigo)
    },
}

gato.agragarEnemigo = "jose"

console.log(gato)


//console.log(Object.values(gato))
//Object.values(gato).forEach((item) => console.log(item)) valores
//Object.entries(gato).forEach((item) => console.log(item)) array por cada valor
//Object.keys(gato).forEach(item => console.log(item))  primarys
//Object.getOwnPropertyNames(gato).forEach((item) => console.log(item)) primarys
/*
for(let propiedad in gato){
    console.log(gato[propiedad])
}*/

/*gato.comer('pez')
gato.listarEnemigos()

const amigos = ["carlos", "jose"]
console.log(amigos.length)*/