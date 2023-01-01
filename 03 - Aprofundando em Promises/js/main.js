const CEPQuery = fetch("https://viacep.com.br/ws/01001000/json/")
    .then(response => response.json())
    .then(response => {
        if(response.erro) {
            throw new Error("This CEP does not exists");
        } else {
            console.log(response);
        }
    })
    .catch(error => console.log(error))
    .finally(message => console.log("Processing"));

console.log(CEPQuery);