const users = {
    name: "Jeff",
    age: 32,
    technologies: [
        {
            name: "C++",
            specialties: "Desktop"
        },
        {
            name: "Javascript",
            specialties: "Web/Mobile"
        }

    ]
}

let message =
    `The user ${users.name} is ${users.age} years and uses the tecnology ${users.technologies[1].name} with expertise in ${users.technologies[1].specialties} `


console.log(message)