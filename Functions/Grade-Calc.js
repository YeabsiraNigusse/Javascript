let GradeCalculeter = function(score, total){
    let grade = (score/total)*100

    if (grade >= 90 && grade <= 100){
        return `${score}/${total} -> You got a A (${grade}%)!`
    }
    else if (grade >= 80 && grade <= 89){
        return `${score}/${total} -> You got a B (${grade}%)!`
    }
    else if (grade >= 70 && grade <= 79){
        return `${score}/${total} -> You got a C (${grade}%)!`
    }
    else if (grade >= 60 && grade <= 69){
        return `${score}/${total} -> You got a D (${grade}%)!`
    }
    else if (grade >= 0 && grade <= 59){
        return `${score}/${total} -> You got a F (${grade}%)!`
    }
}
let result = GradeCalculeter(13,20)
console.log(result)