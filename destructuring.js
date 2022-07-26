function getStudents(classRoom) {
    let {hasTeachingAssistant, classList} =  classRoom;
    let teacher, teachingAssistant, students;

    if(hasTeachingAssistant) {
        [teacher, teachingAssistant, ...students] = classList;
    }
    else {
        [teacher, ...students] = classList;
    }
    return students;
}


const section_1= {
    hasTeachingAssistant : true,
    classList : ["John", "Jane", "James", "Jake", "Janine", "Jill", "Jasper"]
}

const section_2 = {
    hasTeachingAssistant : false,
    classList: ["Angela", "Arthur", "Anne", "Axel", "Amy", "Aidan", "Albert"]
}

console.log(getStudents(section_1))
console.log(getStudents(section_2))