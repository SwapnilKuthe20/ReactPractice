
const controller = new AbortController()

console.log(controller, "...log controller ");

const signal = controller.signal
console.log(signal, "...signal");

controller.abort()