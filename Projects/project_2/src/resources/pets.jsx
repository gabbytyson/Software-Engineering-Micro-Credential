import pup1 from "../resources/petIMG/pup1.png";
import pup2 from "../resources/petIMG/pup2.png";
import kitten1 from "../resources/petIMG/kitten1.jpg";
import kitten2 from "../resources/petIMG/kitten2.jpg";
import rabbit1 from "../resources/petIMG/rabbit1.jpg";
import hamster1 from "../resources/petIMG/hamster1.webp";
import turtle1 from "../resources/petIMG/turtle1.jpg";
import parrot1 from "../resources/petIMG/parrot1.jpg";

const pets = {
    pets1: [
        {
            petID: 1,
            
            name: "Bandit",
            age: 3,
            species: "Dog",
            color: "Mixed",
            hobby: "run",
            img:  pup1,
            ownerID: 103
        
        },
        {
            petID: 2,
            name: "Stewy",
            age: 2,
            species: "Dog",
            color: "black/brown",
            hobby: "fetch",
            img:  pup2,
            ownerID: 102
        },
        {
            petID: 3,
            name: "Robber",
            age: 1,
            species: "Cat",
            color: "orange",
            hobby: "Jump",
            img:  kitten1,
            ownerID: 101
        },
        {
            petID: 4,
            name: "Curly",
            age: 1,
            species: "Cat",
            color: "orange",
            hobby: "nap",
            img:  kitten2,
            ownerID: 101
        }
    ],
    pets2: [
        {
            petID: 5,
            name: "Greyson",
            age: 6,
            species: "Rabbit",
            color: "tan",
            hobby: "Jump",
            img:  rabbit1,
            ownerID: 101
        },
        {
            petID: 6,
            name: "Frog",
            age: 2,
            species: "Hamster",
            color: "brown/white",
            hobby: "sunbathe",
            img:  hamster1,
            ownerID: 101
        },
        {
            petID: 7,
            name: "Jackel",
            age: 25,
            species: "Turtle",
            color: "green",
            hobby: "swim",
            img:  turtle1,
            ownerID: 101
        },
        {
            petID: 8,
            name: "Miso",
            age: 14,
            species: "Parrot",
            color: "grey/blue",
            hobby: "fly",
            img:  parrot1,
            ownerID: 101
        }
    ]
}


export default pets;