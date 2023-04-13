let body = document.querySelector("body")
let pInput = document.querySelector(".input")
let botonAgregar = document.querySelector(".boton-agregar")
class Item  
{
    constructor(tareaName)
    {
        this.crearDiv(tareaName)
    }
    crearDiv(tareaName)
    {
        let container = document.createElement("div")
        container.classList.add("container")

        let item = document.createElement("div")
        item.classList.add("item")
        
        let inputItem = document.createElement("input")
        inputItem.value = tareaName
        inputItem.disabled = true    
        inputItem.classList.add("item-input")

        let botonEditar = document.createElement("button")
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>"
        botonEditar.classList.add("boton-editar")

        let botonRemover = document.createElement("button")
        botonRemover.innerHTML = "<i class='fas fa-trash'></i>"
        botonRemover.classList.add("boton-remover")


        item.appendChild(inputItem)
        item.appendChild(botonEditar)
        item.appendChild(botonRemover)

        container.appendChild(item)

        body.appendChild(container)

        botonEditar.addEventListener("click", function()
        {
            if (inputItem.disabled === true)
            {
                inputItem.disabled = false
                botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>"
            }
            else
            {
                inputItem.disabled = true
                botonEditar.innerHTML = "<i class='fas fa-lock'></i>"
            }
        })

        botonRemover.addEventListener("click", function()
        {
            item.remove()
        })
    }
}

function chequearInput()
{
    if (pInput.value)
    {
        let tarea = new Item(pInput.value)
        pInput.value = ""
    }
    else{
        alert("Debe introducir una tarea")
    }
}

botonAgregar.addEventListener("click", function()
{
    chequearInput()
})

document.body.addEventListener("keydown", function (info) {
    if (info.key === "Enter")
    {    
        chequearInput()
    }
})