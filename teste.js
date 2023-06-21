const pesquisa = document.querySelector("#pesquisa")
const resposta = document.querySelector("#resposta")

pesquisa.addEventListener("click",()=>{

    const cep = document.querySelector("#cep").value
    const rua = document.querySelector("#rua").value
    const numero = document.querySelector("#numero").value
    const complemento = document.querySelector("#complemento").value
    const cidade = document.querySelector("#cidade").value
    const estado = document.querySelector("#estado").value

    const pesq_cep = new XMLHttpRequest()
    // pesq_cep.open("GET","https://viacep.com.br/ws/01001000/json/")
    pesq_cep.open('GET', 'https://viacep.com.br/ws/'+cep+'/json/')
    pesq_cep.open('GET', 'https://viacep.com.br/ws/'+estado+'/json/')
    pesq_cep.open('GET', 'https://viacep.com.br/ws/'+cidade+'/json/')
    pesq_cep.open('GET', 'https://viacep.com.br/ws/'+rua+'/json/')

    pesq_cep.open
    pesq_cep.send()
    pesq_cep.onload = function () {

        let objeto_cep = JSON.parse(pesq_cep.responseText)
        // console.log(objeto_cep.bairro)
        // console.log(objeto_cep.logradouro)
        console.log(objeto_cep.logradouro)
        console.log(objeto_cep.estado)
        // resposta.innerHTML = JSON.stringify(objeto_cep)
        resposta.innerHTML = resposta.logradouro
        }
    })

