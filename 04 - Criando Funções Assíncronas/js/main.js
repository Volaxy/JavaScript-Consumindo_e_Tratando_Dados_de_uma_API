async function searchAddress(cep) {
    try {
        const CEPQuery = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const convertedQuery = await CEPQuery.json();
    
        if(convertedQuery.erro) {
            throw new Error("Query not exists");
        }

        console.log(convertedQuery);

        return convertedQuery;
    } catch(error) {
        console.log(error);
    }
}

let ceps = ["01001000", "01001001"];
let cepsSet = ceps.map(cep => searchAddress(cep));
console.log(cepsSet);
Promise.all(cepsSet).then(response => console.log(response));