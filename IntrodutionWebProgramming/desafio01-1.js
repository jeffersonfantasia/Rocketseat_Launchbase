const name = "Jeff"
const weight = 84
const height = 1.88
const gender = "Male"

const imc = weight / (height * height)


if (imc >= 30) {
    console.log(`${name} you are overweight`)
} else {
    console.log(`${name} you are NOT overweight`)
}