function HandleSubmit(e) {
    e.preventDefault();

    let li = document.createElement("li");
    li.innerHTML = document.getElementById("todo").value;

    document.querySelector(".todolist").appendChild(li);

    document.getElementById("todo").value = "";
}

document.addEventListener('submit', HandleSubmit);