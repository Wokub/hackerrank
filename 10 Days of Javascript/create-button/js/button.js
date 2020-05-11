const div = document.querySelector("body");

const btn = document.createElement("button");
btn.setAttribute("id", "btn");

let value = 0

btn.innerHTML = `${value}`;

div.appendChild(btn);


document.getElementById("btn").addEventListener("click", event => {
    event.preventDefault();
    value++;
    btn.innerHTML = `${value}`;
})

