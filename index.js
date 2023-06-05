//const tacoImage = document.createElement('img')
const tacoUrl = "http://localhost:3000/nameOfTaco";
const tacoMenu = document.getElementById('taco-menu')

fetch(tacoUrl)
    .then(r => r.json())
    .then(allTacoInfo  => {
        renderTopGroup(allTacoInfo)
    })

function renderTopGroup(arrayOfTacos) {
    arrayOfTacos.forEach((tacoObject) => {
        const tacoImage = document.createElement('img')
        tacoImage.src = tacoObject.image
        tacoMenu.append(tacoImage)   
    })
}
    
        // tacoImage.addEventListener('click', () => {
        //     const nameOfTaco = document.getElementById('taco-detail')
        //     nameOfTaco.textContent = tacoObject.name;
        //     console.log(nameOfTaco)
            
            // tacoMenu(tacoObject)
            // console.log(tacoObject) 

        //tacoImage.addEventListener()
    

// function tacoImageEventListener() {
//     tacoImage.addEventListener('click', () => {
//         tacoMenu(tacoObject)
//         console.log(tacoObject)
//     })
// }