const users = [
    {
        name: "Jeff",
        technology: ["HTML", "CSS"]
    },
    {
        name: "Joe",
        technology: ["JavaScript", "CSS"]
    },
    {
        name: "Jenn",
        technology: ["HTML", "Node.js"]
    }
]

function checkIfUserUsesCSS(user) {

    for (let technologies of user.technology) {

        if (technologies === "CSS") return true

    }
    return false
}

for (let i = 0; i < users.length; i++) {

    const userWorkWithCSS = checkIfUserUsesCSS(users[i])

    if (userWorkWithCSS) {
        console.log(`The user ${users[i].name} works with CSS`)
    }
}
