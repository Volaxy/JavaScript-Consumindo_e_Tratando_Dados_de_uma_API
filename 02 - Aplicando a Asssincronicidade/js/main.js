// The "fetch" is a async method which the parameter is an URL and returns a Promise

// A "Promise" is a promise that something will happen, and it can either be "Resolved" or "Rejected"
const CEPQuery = fetch("https://viacep.com.br/ws/01001000/json/");

console.log(CEPQuery);