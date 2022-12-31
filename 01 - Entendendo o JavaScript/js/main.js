console.log("Send 'Hi'");

function message() {
    console.log("How are you?");
    console.log("I send a message to you");
    console.log("Message received");
}

// When calling the function, it is passed to the "call stack" and after that the commands inside the function are executed, right after the function finishes, it leaves the stack and the code follows its flow
message();

console.log("Conversation finished");

//////////////////////////////////////////////////////////////////

console.log("Send 'Hi'");

function message() {
    console.log("How are you?");
    console.log("I send a message to you");
    console.log("Message received");
}

// When applying a setTimeOut, the function is passed to the "Task Queue", where the moment it is executed, it is passed to the "Call Stack"
setTimeout(message, 5000);

console.log("Conversation finished");