
function throttlingFun(fn, delay) {
    let lastCall = 0
    console.log(lastCall, "...initial");

    return function () {
        const now = Date.now()
        console.log(now, "....now");

        if (now - lastCall >= delay) {
            lastCall = now
            console.log(lastCall, "....lastcall inside fn");
            fn()
        }
    }
}

function callFn() {
    console.log("Callback Function call ....");
}

const testFn = throttlingFun(callFn, 5000)

setInterval(() => {
    testFn()
}, 500)
