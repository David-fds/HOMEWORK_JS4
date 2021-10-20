var student = {
    name: "Rebecca",
    program: "Front End",
    module: 1,
    alum: false,
    projects: ["Dog Party", "Number Guesser", "Check Yo Self"]
}

var projectNumb = student.projects.length;
var projectSent = "They have built the following projects: ";

for (i = 0; i < projectNumb; i++){

    if (i == projectNumb - 1){
        projectSent = projectSent + "and " + student.projects[i] + ".";
    }
    else{
        projectSent = projectSent + student.projects[i] + ", ";
    }
}

console.log(student.name + " is an awesome " + student.program + " student!");
console.log(projectSent);
