const carro = {
    nome: "Palio",
    marca: "Fiat",
    ano: 2017,
    cor: "Azul",
    opcionais:{
        roda: "liga leve",
        aro: 15,
        air_bag: "frente total"
    }
}

// console.log(carro)
// console.log(carro.opcionais.roda)
// console.log(carro.cor)
// console.log(carro.marca)

const carro_str = JSON.stringify(carro)

console.log(carro_str)

const carro2 = JSON.parse(carro_str)
console.log(carro2)