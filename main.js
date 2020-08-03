
const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];


  //Створіть функцію getSubjects(students[0]  яка повертає список предметів для конкретного студента

  const getSubjects = (student) =>{
       const subjects = Object.keys(student.subjects);
       const allSubjects = subjects.map(elem => elem[0].toUpperCase()+elem.slice(1).toLowerCase().replace(/_/gi," "));
       return allSubjects;
}

console.log(getSubjects(students[0]));



//Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента 
const getAverageMark=(student) =>{
       let newArr;
       let averageMark;
       const subjects = Object.values(student.subjects);
          newArr = subjects[0].concat(subjects[1],subjects[2]);
          averageMark = newArr.reduce((acc,mark) => acc+= mark);
          return (averageMark/newArr.length).toFixed(2);  
}
console.log(getAverageMark(students[2]));


//Створіть функцію getStudentInfo яка повертає інформацію загального виду по переданому студенту ; курс, ім'я, середня оцінка.

const getStudentInfo = (student) =>{
        return `Hi,I am on ${student.course} course,my name is ${student.name},my averageMark is ${getAverageMark(student)}.`
}
console.log(getStudentInfo(students[2]));


//Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.
const getStudentsNames = (students) =>{
     let allStudents  =  students.map(student =>student.name)
     return allStudents.sort();
}
    console.log(getStudentsNames(students));


//Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.


const getBestStudent=(students)=>{
        let bestStudent;
            if(getAverageMark(students[0]) > getAverageMark(students[1]) && getAverageMark(students[0]) > getAverageMark(students[2])){
               bestStudent=students[0].name;
            }else if(getAverageMark(students[1]) > getAverageMark(students[0]) && getAverageMark(students[1]) > getAverageMark(students[2])){
               bestStudent=students[1].name;
            }else{
                bestStudent=students[2].name; 
            }
        return bestStudent;
}
console.log(getBestStudent(students));



//Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.

const  calculateWordLetters = str => {
    let res = {};
    str = str.toLowerCase();
    const incl = (obj, prop) => {
        for(let key in obj)
            if(key == prop)
                return true;
        }
            for(let i = 0; i < str.length; i++){
            let count = 0;
             for(let j = i; j < str.length; j++){
             if(str[j] == str[i] && !incl(res, str[j]))
                count++;
             }
                if(count)
                res[str[i]] = count;
           }
        return res;
}
console.log( calculateWordLetters("віталік"));


let container=document.querySelector("#root");
container.innerHTML=`
<p> Антон вивчає: ${getSubjects(students[2])}</p>
<p> Віктор вивчає: ${getSubjects(students[1])}</p>
<p> Таня вивчає: ${getSubjects(students[0])}</p>
<p> Середня оцінка Антона: ${getAverageMark(students[2])}</p>
<p> Середня оцінка Віктора: ${getAverageMark(students[1])}</p>
<p> Середня оцінка Тані: ${getAverageMark(students[0])}</p>
<p> Студент 1: ${getStudentInfo(students[0])}</p>
<p> Студент 1: ${getStudentInfo(students[1])}</p>
<p> Студент 1: ${getStudentInfo(students[2])}</p>
<p> Список студентів: ${getStudentsNames(students)}</p>
<p> Кращий студент: ${(getBestStudent(students))}</p>
<p> Створіть функцію  яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.Наше слово Віталік а відповідь знаходиться в консолі)</p>
`




