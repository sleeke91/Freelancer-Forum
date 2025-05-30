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
const averageRateofAllFreelancers = getRateAverage()
console.log(averageRateofAllFreelancers)

// Write a component function to represent a single freelancer.
const createFreelancer = (freelancer) => {
    //create elements for each item (name, occupation, rate)
    const createdFreelancer = document.createElement("div")
    const singleFreelancerName = document.createElement("div")
    const singleFreelancerOccupation = document.createElement("div")
    const singleFreelancerRate = document.createElement("div")
    //set at class for each created div
    createdFreelancer.className = "eachFreelancer"
    singleFreelancerName.className = "eachName"
    singleFreelancerOccupation.className = "eachOccupation"
    singleFreelancerRate.className = "eachRate"
    //create text
    singleFreelancerName.textContent = `Name: ${freelancer.name}`
    singleFreelancerOccupation.textContent = `Occupation: ${freelancer.occupation}`
    singleFreelancerRate.textContent = `Rate: $${freelancer.rate}`
    //style everything
    createdFreelancer.style.border = "1px solid"
    createdFreelancer.style.margin = "5px"
    createdFreelancer.style.backgroundColor = "pink"
    //add children (name, occupation, rate div's) to parent (createdFreelancer div)
    createdFreelancer.appendChild(singleFreelancerName)
    createdFreelancer.appendChild(singleFreelancerOccupation)
    createdFreelancer.appendChild(singleFreelancerRate)
    return createdFreelancer
  }

// Write a component function to represent an array of freelancers.
const freelancerContainer = document.getElementById("app")
function createmultFreelancers (){
    const freelancersArray = freelancerStateArray.map((freelancer)=>{return createFreelancer(freelancer)})
    freelancersArray.forEach((freelancerObject)=>{
      freelancerContainer.appendChild(freelancerObject)
  })
  }
// Write a component function to represent the average rate of all freelancers.
const createAverage = (freelancersAverage) => {
    const createdAverage = document.createElement("h3")
    createdAverage.className = "average"
    createdAverage.textContent = `Average Rate: $${averageRateofAllFreelancers}`
    createdAverage.style.fontStyle = 'italic'
    return createdAverage
}

// Write and call a render function that will mount the application onto the document.
const render = () => {
    const heading = document.createElement("h1")
    heading.textContent = "Freelancer Forum"
    heading.style.color = "#e68a9a"
    freelancerContainer.appendChild(heading)
    freelancerContainer.appendChild(createAverage())
    createmultFreelancers()
    
}

render()