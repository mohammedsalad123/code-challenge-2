const baseURL = 'https://my-json-server.typicode.com/mohammedsalad123/code-challenge-2/characters'
fetch(baseURL)
.then(res => res.json())
.then(data=>{displayAnimalsLists(data)})
.catch(error=>console.log(error))


//declared element from html using dom selector method
const animalLists = document.querySelector("#animal_list")
const animalDetails= document.querySelector("#animal_details")
const resetButton = document.getElementById("reset-button")


//function to display animal list and has an eventlistener 
function displayAnimalsLists(data){
  animalLists.innerHTML='';
  data.forEach(animal => {
    const animalName = document.createElement('div');
    animalName.textContent=animal.name
    animalName.classList.add('animal-name');
    animalName.addEventListener('click', () => {
        displayAnimalDetails(animal)
  });
  animalLists.appendChild(animalName)
    })
}
//function which displays animalname,image&votecount.
function displayAnimalDetails(animal){
    animalDetails.innerHTML='';
    const animalName = document.createElement('h2');
    animalName.textContent = animal.name

    const animalImage = document.createElement('img');
    animalImage.src = animal.image;
    animalImage.style.height="100PX"
    animalImage.style.width="200PX"
    const voteCount = document.createElement('p');
    voteCount.textContent = `Votes: ${animal.votes}`;


    const voteButton = document.createElement('button')//added abutton and in it there is addeventlisterner.
    voteButton.textContent = 'Vote';
    voteButton.addEventListener('click', () => {
        animal.votes++;
        voteCount.textContent = `Votes: ${animal.votes}`;
    });
    animalDetails.appendChild(animalName);
    animalDetails.appendChild(animalImage);
    animalDetails.appendChild(voteCount);
    animalDetails.appendChild(voteButton);
}
//reset button that resets the votes
resetButton.addEventListener("click",()=>{
    animalData.characters.forEach(animal => {
        animal.votes = 0;
    });
    displayAnimalList();
    animalDetails.innerHTML = '';
})
