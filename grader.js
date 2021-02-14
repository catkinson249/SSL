const readine = required("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Enter student name: ",(name) =>{
  rl.question("Enter assignment name: ",(assignment)=>{
    rl.question("Enter grade in numbers: ",(grade)=>{

      rl.close();
    }
  })
})
  
class Grader{
  getGrade(grade){
    if(grade <= 100)&& (grade >= 90){
      grade = 'A'
    }
    elseif(grade <= 89)&& (grade >= 80){
      grade = 'B'
    }
    elseif(grade <= 79)&& (grade >= 70){
      grade = 'C'
    }
    elseif(grade <= 69)&& (grade >= 60){
      grade = 'D'
    }
    elseif(grade <60){
      grade = 'F'
    }
    else{
      "Please enter a valid number for grade"
    }
    return grade
  }
  displayGrader(){
  return "Grade Details: "+name+"@fullsail.edu"
"Your grade for "+assignment+" is: "+grade
}



#module.exports = Grader;
grader = new Grader();
grader.getGrade(grade);
console.log(grader.displayGrader());
          