const tacoUrl = 'http://localhost:3000/nameOfTaco';

const theForm = document.getElementById("new-taco");
const ameliaFave = document.getElementById("amelia-fave");
const jessicaFave = document.getElementById("jessica-fave");
const mikeFave = document.getElementById("mike-fave");
const leastLiked = document.getElementById("least-liked");
const mostLiked = document.getElementById("most-liked");

fetch(tacoUrl)
    .then(r => r.json())
    .then(allTacoInfo => {
        allTacos(allTacoInfo)
    })

function allTacos(arrayOfAllTacos) {
    arrayOfAllTacos.forEach(tacoObject => {
        renderAllDetails(tacoObject)
})}

function renderAllDetails(oneTacoObject) {
        const tacoInfo = document.getElementById("all-taco-info")
        const tacoContainer = document.createElement('div')
        const tacoName = document.createElement("h2")
        const tacoImage = document.createElement("img")
        const tacoRating = document.createElement("p")
        const tacoComment = document.createElement("p")
        const numberOfExistingLikes = document.createElement("p")
        const likeBtn = document.createElement("button")

        tacoContainer.className = "taco-container"

        tacoName.textContent = oneTacoObject.name
        tacoImage.src = oneTacoObject.image
        tacoImage.alt = oneTacoObject.name
        tacoRating.textContent = `Rating: ${oneTacoObject.rating}`
        tacoComment.textContent = `Comment: ${oneTacoObject.comment}`
        numberOfExistingLikes.textContent = `${oneTacoObject.likes} Likes`
        likeBtn.textContent = "I like this!"
        
        tacoContainer.append(tacoName, tacoImage, tacoRating, tacoComment, numberOfExistingLikes, likeBtn)     
        tacoInfo.append(tacoContainer)

        likeBtn.addEventListener('click', () => {
            oneTacoObject.likes = oneTacoObject.likes + 1;
            numberOfExistingLikes.textContent = `${oneTacoObject.likes} Likes`
        })
    }

theForm.addEventListener('submit', (event) => {
        event.preventDefault() 
        const newTaco = {
            name: event.target.name.value,
            image: event.target.image.value,
            rating: event.target.rating.value,
            comment: event.target.comment.value,
            likes: 0
        }
        renderAllDetails(newTaco)
        const form = theForm;
        form.reset();
    }
    )

ameliaFave.addEventListener("mouseup", () => {
    alert("Amelia's favorite is taco bell beef tacos. Weird.") 
});

jessicaFave.addEventListener("mouseup", ()  => {
    alert("Jessica's favorite is Steak tacos. Cool!")
});

mikeFave.addEventListener("mouseup", () => {
    alert("Mike's favorite is fish tacos. Awesome!") 
});
leastLiked.addEventListener("mouseup", () => {
    alert("Least liked is steak tacos. Okay then.")
});
mostLiked.addEventListener("mouseup", () => {
    alert("Most liked taco is Carnitas! Go Carnitas!")
});