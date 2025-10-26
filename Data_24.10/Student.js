class Student {
  constructor(name) {
    this.name = name;
    this.grades = []; 
  }

  
  addGrade(grade) {
    this.grades.push(grade);
   // console.log(`Add --> grade ${grade}`);
   return grade;
  }

  
  average() {
    if (this.grades.length === 0) {
        console.log("are no grades");
        return 0; 
    }

    let sum = 0;
    let End_value = 0;
    for (let i = 0; i < this.grades.length; i++) {
      sum += this.grades[i];
    }
   
    End_value = sum / this.grades.length;
    //return Math.ceil(End_value); metacvat--(klor tiv)
    return End_value;
  }
}


const student_user = new Student("Artur");


student_user.addGrade(9);
student_user.addGrade(7);
student_user.addGrade(8);
student_user.addGrade(6);
student_user.addGrade(8);
student_user.addGrade(7);


console.log(`Student is name ${student_user.name} Student is grade ${student_user.average()}`);
