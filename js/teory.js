/*const filter = function (array, test) {
  const filteredElements = [];

  for (const element of array) {
    const passed = test(element);

    if (passed) {
      filteredElements.push(element);
    }
  }

  return filteredElements;
};

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

const freshFruits = filter(fruits, fruit => fruit.isFresh);
console.log(freshFruits); // массив с объектами apples и bananas

const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
console.log(fruitsWithQuantity); // массив с объектами apples и grapes

const createCounter = function () {
  /*
   * Локальная переменная privateValue доступна только в замыкании.
   * Получить к ней доступ во внешнем коде невозможно.
   */
/*let privateValue = 0;

  const increment = function () {
    privateValue += 1;
    console.log(privateValue);
  };

  return {
    increment,
  };
};

const counterA = createCounter();
counterA.increment(); // 1
counterA.increment(); // 2

const counterB = createCounter();
//console.dir(counterB);
counterB.increment(); // 1
counterB.increment(); // 2
counterB.increment(); // 3
*/

const hotel = {
  name: 'Resort hotel',
  showThis() {
    const fn = () => {
      /*
       * Стрелки запоминают контекст во время объявления,
       * из родительской области видимости
       */
      console.log('this in fn: ', this);
    };

    fn();
    console.log('this in showThis: ', this);
  },
};

hotel.showThis();
// this in fn: {name: 'Resort hotel', showThis: ƒ}
// this in showThis: {name: 'Resort hotel',showThis: ƒ}
