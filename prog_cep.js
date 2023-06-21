let res = document.querySelector('#res')
let consulta = document.querySelector('#consulta')

consulta.addEventListener('click', ()=>{
    let val_cep = document.querySelector('#val_cep').value
    console.log(val_cep)
    const cep = new XMLHttpRequest()
    cep.open('GET', 'https://viacep.com.br/ws/'+val_cep+'/json/')
    cep.send()
    console.log(cep)
    
    cep.onload = function(){
        let pesq_cep = JSON.parse(cep.responseText)
        console.log(pesq_cep)
        

        res.innerHTML = ''
        res.innerHTML += `O cidadão mora na cidade de ${pesq_cep.localidade}`
        res.innerHTML += ` na rua ${pesq_cep.logradouro} do bairro ${pesq_cep.bairro}`
    }
})