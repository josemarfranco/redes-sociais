let email = "usuarioteste@gmail.com"

let promise = new Promise ((resolve, reject) =>{
    console.log("Consultando dados...")
    setTimeout(() =>{
        if(email === "usuarioteste@gmail.com") {
            resolve("Acesso liberado")
        } else {
            throw Error ("Acesso negado, dados inválidos")
        }
    }, 3000)
})

promise
.then ((response) => {
    console.log(response)
})
.catch((error) => {
    console.log(error)
})
