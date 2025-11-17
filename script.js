// let input = Number(prompt("size?"))
let input;
const gridSize = () =>{
    input = Number(document.getElementById("gridChange").value);
    if(input<100){
        createGrid();
    }
    else{
        alert("Please enter grid size less than 100")
    }
}
function getRandomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}

const createGrid = () => {
    
    for(let i =0;i<input;i++){
        const newContainer = document.createElement("div"); //create
        newContainer.classList.add("container"); //class
        document.body.appendChild(newContainer); //add

        for(let i =0;i<input;i++){
            const newDiv = document.createElement("div"); 
            newDiv.classList.add("pixel");
            newContainer.appendChild(newDiv)
        }
    }

    const pixelTrail = document.querySelectorAll(".pixel")
    pixelTrail.forEach(i =>{
        i.addEventListener("mouseover",()=>{
            i.style.backgroundColor = getRandomColor();
        })
    })
}