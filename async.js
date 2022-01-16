// «async/await» это специальный синтаксис для работы с промисами.
// Асинхронные функции (async) ставится перед функцией.
// "async" эта функция всегда возвращает промис.

// Ключевое слово "await" работает только внутри async–функций
// заставит интерпретатор JavaScript ждать до тех пор,
// пока промис справа от await не выполнится. После чего оно вернёт его результат,
// и выполнение кода продолжится.

async function func() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello, JavaScript!"), 3000)
  });
  let result = await promise;
  console.log(result);
}

func();