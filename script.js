let url = "https://economia.awesomeapi.com.br/last/USD-BRL"
let btn = document.getElementById("btn")

btn.addEventListener("click", ()=>{


    let input = document.getElementById("value")
    let value = input.value
    let result = document.getElementById("result")

    fetch(url)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            let USDBRL = data.USDBRL.high
            console.log(USDBRL)
            if(value == ""){
                alert("Adicione um valor")
            }
            else{
            result.innerHTML = `${value} dólares = ${USDBRL * value} reais`
        }
        })
})