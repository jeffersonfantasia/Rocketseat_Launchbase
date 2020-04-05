const name = "Jeff"
const gender = "male"
const age = 61
const contribution = 34

const contributionMale = 35
const contributionFemale = 30

const minContributionMale = 95
const minContributionFemale = 85

if (gender === "female") {
    if (contribution >= contributionFemale || age + contribution >= minContributionFemale) {

        console.log(`${name}, you can retire!`)

    } else {

        console.log(`${name}, you can NOT retire!`)
    }
} else
    if (contribution >= contributionMale || age + contribution >= minContributionMale) {

        console.log(`${name}, you can retire!`)

    } else {

        console.log(`${name}, you can NOT retire!`)
    }

