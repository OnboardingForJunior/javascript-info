const grade = {
    subject: "English",
    score: "F",
}

const user = {
    age: 14,
    name: "jongku",
    birth: new Date("1994-03-16"),
    grade: grade,
}

console.log(JSON.stringify(user, Object.keys(user).filter(key => key !== "grade")));