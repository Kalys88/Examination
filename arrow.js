// Стрелочные функции это не просто сокращение обычных функций чтобы меньше писать. У них есть ряд
// других полезных особенностей.
// Существует тонкая разница между стрелочной функцией => и обычной функцией.
// Стрелка => ничего не привязывает. У функции просто нет this. При получении значения this – оно,
// как обычная переменная, берётся из внешнего лексического окружения.
// Стрелочные функции:
// Не имеют this, arguments и могут быть вызваны с new.

// Как мы сказали у стрелочных функций нет «this»
// Если мы используем this внутри стрелочной функции, то его значение берётся из
// внешней «нормальной» функции.

// Например, здесь arrow() использует значение this из внешнего метода user.sayHi():
let user = {
  firstName: "Nurlan",
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  }
};

user.sayHi();

// let user = (userName, userAge) => ({name: userName, age: userAge});
//
// let Askar = user("Askar", 30);
// let Aibek = user("Aibek", 40);
//
// console.log(Askar.name, Askar.age);
// console.log(Aibek.name, Aibek.age);

// let age = prompt('How old are you?', 18);
//
// let welcome = (age < 18) ?
//     () => alert('Hello') :
//   () => alert('Welcome!');
//
// welcome();



