
const sayhello = () => {
    console.log("Hello");
    fetch('https://jsonplaceholder.typicode.com/users')
}

const debounce = (fn, delay) => {
    let timer;

    return function () {
        clearTimeout(timer)

        timer = setTimeout(() => {
            fn()
        }, delay)
    }
}

const debounceHello = debounce(sayhello, 2000)

const btn = document.getElementById('btn')
// console.log(btn, "...btn");

btn.addEventListener("click", () => {
    debounceHello()
})
