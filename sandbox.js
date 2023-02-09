 /*
Генератор - це фунція. Її можна запустити.
Це функція, яка здатна призупиняти свою роботу, повертати проміжний результат роботи і чекати на наступний виклик, отримуючі НОВІ аргументи
*/


function* generate() {
    console.log(1);
    yield 10;
    console.log(2);
    const newArgument = yield 20;
    console.log(newArgument);
    return 111
 }

const res = generate();
console.log(res);
console.log(res.next())   /*
                            {value: значення, яке ми отримали при переборі, 
                            done: чи дійшли ми до кінця перебору}
                            */
console.log(res.next());
console.log(res.next('SUPER-VALUE'));


/*
Написати функцію-генератор, яка генерує числа від 0 до 100. З кожним викликом next() число інкрементується
*/

function* generateNumbers() {
    let score = 0;
    while (score < 100) {
        yield score++;
    }
}

/* використовуючи вже написану функцію-генератор, скласти всі числа від 0 до 100.
*/
