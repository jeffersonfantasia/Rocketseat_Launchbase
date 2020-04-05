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

function print(user) {

    for (let i = 0; i < user.length; i++) {

        console.log(`${user[i].name} works with ${user[i].technology.join(', ')}`)
    }

}

print(users)

