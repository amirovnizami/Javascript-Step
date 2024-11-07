const titleInput = document.getElementById("titleIn")
const descInput = document.getElementById("descIn")
const button = document.getElementById("btn")
const container = document.getElementById("container")
const arr = [];


button.addEventListener("click", () => {
    titleValue = titleInput.value.trim();
    descValue = descInput.value.trim()
    let newArr = [titleValue, descValue]
    arr.push(newArr)

        const len = arr.length
        const div = document.createElement("div")
        const addP = document.createElement("p")
        addP.innerText = `Title: ${arr[len- 1][0]}  Description: ${arr[len-1][1]}`
        div.appendChild(addP)
        container.appendChild(div)

    console.log(arr.length - 1)
})
