async function searchAddress(cep) {
    const $messageError = document.getElementById("error");
    $messageError.innerHTML = "";

    try {
        const CEPQuery = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const convertedQuery = await CEPQuery.json();
    
        if(convertedQuery.erro) {
            throw new Error("Query not exists");
        }

        const $city = document.getElementById("cidade");
        const $publicPlace = document.getElementById("endereco");
        const $state = document.getElementById("estado");

        $city.value = convertedQuery.localidade;
        $publicPlace.value = convertedQuery.logradouro;
        $state.value = convertedQuery.uf;

        console.log(convertedQuery);

        return convertedQuery;
    } catch(error) {
        $messageError.innerHTML = `<p>Invalid CEP. Try again</p>`;

        console.log(error);
    }
}

const cep = document.getElementById("cep");
cep.addEventListener("focusout", () => {
    searchAddress(cep.value);
});