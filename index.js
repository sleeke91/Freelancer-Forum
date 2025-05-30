/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

// Write a function that returns a freelancer object with a randomly generated name, occupation, and rate according to the provided constants.
const makeFreelancerObject = ()=>{
    const freeLancer = {} //name of the object being returned
    // get a randomNum for the names Array
    const randomNameNum = Math.floor(Math.random()*NAMES.length)
    const randomName = NAMES[randomNameNum]
    freeLancer.name = randomName
    // get a randomNum for the occupations Array
    const randomOccNum = Math.floor(Math.random()*OCCUPATIONS.length)
    const randomOccupation = OCCUPATIONS[randomOccNum]
    freeLancer.occupation = randomOccupation
    // get a randomNum for the Price_Range Array *****STUCK*****
    const randomRateNum = Math.floor(Math.random()*(PRICE_RANGE.max-PRICE_RANGE.min + 1) + PRICE_RANGE.min)
    freeLancer.rate = randomRateNum
    return freeLancer
}
console.log(makeFreelancerObject())

// Initialize a state variable to an array of `NUM_FREELANCERS` freelancer objects.
function createRandomFreelancersArr(){
    const freelancersArray = []
    for(let i=0;i<100;i++){
      const newFreelancer = makeFreelancerObject() //calls on the previous function created above, running this function x100
      freelancersArray.push(newFreelancer)
    }
    return freelancersArray
  }
  const freelancerStateArray = createRandomFreelancersArr()
  console.log(freelancerStateArray)

// Write a function that returns the average rate of all freelancers in state.
//use reduce method to add the sum of the 'rate' values then divide by length of the freelancerStateArray
const getRateAverage = () => {
  const myAverage = freelancerStateArray.reduce((accumulator, currentValue) => accumulator + currentValue["rate"], 0) / freelancerStateArray.length
  return myAverage
} 
console.log(getRateAverage())

// Use that function to initialize a state variable which will store the average rate of all freelancers.

// Write a component function to represent a single freelancer.

// Write a component function to represent an array of freelancers.

// Write a component function to represent the average rate of all freelancers.

// Write and call a render function that will mount the application onto the document.