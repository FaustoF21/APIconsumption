
const consume = async () => {
    try{
    const data = await fetch('https://v2.jokeapi.dev/joke/Any');
    const response = await data.json();
    const setup = response.setup;
    const delivery = response.delivery;
    
    displayJoke(`${setup} ${delivery}`);

    } 
    catch(response){
        console.log('Could not get the data')
    }

}

const displayJoke = (content) => {


    const joke = document.createElement('h1');
    joke.innerText = content;
    document.body.appendChild(joke);

    const separator = document.createElement('p');
    separator.innerText = "--Next Joke--";
    document.body.appendChild(separator);

}

document.getElementById('generate').addEventListener('click', () => {

    consume();

});

