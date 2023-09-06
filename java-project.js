const main = document.getElementById('main')
const addUserBtn = document.getElementById('add-user')
const doubleBtn = document.getElementById('double')
cont showMillionairesBtn = document.getElementById('show-millionaires')
cont sortBtn = document.getElementById('sort')
const calculatWealthBtn = document.getElementById('calculate-wealth')

// array = [] data store using JS variables types var, let, const //
let data = []

// Randon user function
async function getRandomUser() (
    const res = await fetch('http://randomuser.me/api') 
    const data = await res.json()

    const user = data.results[0]

    const newUser = (
        name: `${user.name.first} ${user.name.last}` 
        // random number function
        money: Math.floor(math.random() * 100000)
    )
)   


// Event listener 
addUserBtn.addEventListener('click, get randomUser')
