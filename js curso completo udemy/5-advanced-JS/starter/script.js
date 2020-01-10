// let person = function (name, birthYear, job) {
//     this.name = name;
//     this.birthYear = birthYear;
//     this.job = job;
//     this.age = function () {
//         age = 2019 - this.birthYear
//         console.log(this.name + ' tiene ' + age + ' años')
//     }
// }

// person.prototype.age = function (){
//     age = 2019 - this.birthYear
//     console.log(this.name + ' tiene ' + age + ' años')
// }


// let ruben = new person ('Ruben', 1990, 'programador');
// ruben.age();

// let paula = new person ('Paula', 1973, 'desempleada')
// paula.age();

// person.prototype.lastName = 'Martin'

// console.log(ruben.lastName)


// let people = Object.create(person ,{
//     name: {value: 'ruben'},
//     age: {value: 29},
//     city: {value: 'Madrid'}
// });

// console.log(people)


// let years = [1990, 1972, 2001, 1967];

// function calculoEdades (arr, fn){
//     var array = [];
//     for (arrs of arr){
//         array.push(fn(arrs))
//     }
//     return array;
// }

// function calc (el){
//     return 2019 - el
// }

// function mayorEdad(el){
//     return el >= 18;
// }

// let edad = calculoEdades (years, calc);
// console.log(edad)

// let mEdad = calculoEdades (years, mayorEdad);
// console.log(mEdad)

(functino() {    
    function Question (question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);

        for (let i = 0; i < this.answers.length; i++){
            console.log(i + ':' + this.answers[i]);
        }
    };

    Question.prototype.checkAnswer = function (ans) {
        ans === this.correct ? console.log('Correct answer!') : console.log ('wrong answer. Try again :)')
    };

    let q1 = new Question (
        'Is JS a nice programming language?',
        ['Yes', 'No'],
        0
    );

    let q2 = new Question (
        'What is my name?',
        ['Juan', 'Ruben', 'Lorena'],
        1
    );

    let q3 = new Question (
        'What do you think about this questions?',
        ['boring', 'hard', 'fun'],
        2
    );



    let questions = [q1, q2, q3];

    let n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    let answers = parseInt(prompt ('Please select the correct answer.'));

    questions[n].checkAnswer(answers);
})();

// (functino(){
//          Todo lo que añadamos dentro de esta función, está en un scope y no interfiere en el resto
//          Se utiliza bastante para utilizar trozos de codigo en otros sitios, 
//          sin que interfiera ni se reescriban variables.
// })();





