//-  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru

// Таким чином описати теги
// -a
// -div





function ObjProp(tag ,description , attrs = []) {
    this.titleOfTag = tag;
    this.description = description;
    this.attrs = attrs;
}

let a = new ObjProp('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', [{name: 'accesskey', description: 'Активация ссылки с помощью комбинации клавиш.'}, {name: 'coords', description: 'Устанавливает координаты активной области'}]);


console.log(a);


let div = new ObjProp('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', [attrs = {name: 'align', description: 'Задает выравнивание содержимого тега <div>.'}, attrs = {name: 'title', description:'Добавляет всплывающую подсказку к содержимому.'}]);


console.log(div);




//-  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru


class randomTags {
    constructor(tag ,description , attrs = []){
        this.titleOfTag = tag;
        this.description = description;
        this.attrs = attrs;
    }
}
let a = new randomTags('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', [attrs = {name: 'accesskey', description: 'Активация ссылки с помощью комбинации клавиш.'}, attrs = {name: 'coords', description: 'Устанавливает координаты активной области'}]);


console.log(a);

// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car



let car = {
    model: 'devjatka' ,
    publisher: 'Ukraine',
    born: 1992,
    maxspeed: 90,
    engine: 1.1, 
    drive: function () {
        let msg = `їдемо зі швидкістю ${car.maxspeed}км на годину`;
        console.log(msg);
    },
    info: function () {
        let msg = `${this.model}, ${this.publisher}`;
        console.log(msg);
    },
    increaseMaxSpeed: function (newSpeed) {
        this.maxspeed += newSpeed;
        console.log(car.maxspeed);
    },
    changeYear: function (newValue) {
        this.born = newValue;
        console.log(this.born);
    },
    addDriver: function (driver) {
        this.driver = driver;
    }
};
car.drive();
car.info();
car.increaseMaxSpeed(30)
car.changeYear(1999)
car.addDriver();
car.addDriver({name: 'Max'})
console.log(car);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

function Car(model, publisher, born, maxspeed, engine) {
    this.model = model;
    this.publisher = publisher;
    this.born = born;
    this.maxspeed = maxspeed;
    this.engine = engine;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxspeed}км на годину`);
    }
    this.info = function () {
        console.log(`${this.model}, ${this.publisher}, ${this.born}, ${this.maxspeed}, ${this.engine}`);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxspeed += newSpeed;
        console.log(vaz.maxspeed);
    }
    this.changeYear = function (newValue) {
        this.born = newValue;
        console.log(vaz.born);
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}


let vaz = new Car('vaz', 'ua', '1991', 90, 1.1);
vaz.drive();
vaz.info();
vaz.increaseMaxSpeed(30);
vaz.changeYear(1999);
vaz.addDriver('Max')
console.log(vaz);

// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class Car {
    constructor(model, publisher, born, maxspeed, engine) {
        this.model = model;
        this.publisher = publisher;
        this.born = born;
        this.maxspeed = maxspeed;
        this.engine = engine;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxspeed}км на годину`);
    }
    info() {
        console.log(`${this.model}, ${this.publisher}, ${this.born}, ${this.maxspeed}, ${this.engine}`);
    }
    increaseMaxSpeed(newSpeed) {
        this.maxspeed += newSpeed;
        console.log(vaz.maxspeed);
    }
    changeYear(newValue) {
        this.born = newValue;
        console.log(vaz.born);
    }
    addDriver(driver) {
        this.driver = driver;
    }
}

let vaz = new Car('vaz', 'ua', '1991', 90, 1.1);
vaz.info();
vaz.drive();
vaz.increaseMaxSpeed(30);
vaz.changeYear(2000);
vaz.addDriver('max')
console.log(vaz);


// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

class Popel {
    constructor(name, age, size){
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

 let popelyshki = [
    new Popel('alina', 18, 35),
    new Popel('Nastya', 19, 35), 
    new Popel('katya', 20, 36), 
    new Popel('dasha', 21, 37), 
    new Popel('vika', 22, 38), 
    new Popel('nika', 23, 39), 
    new Popel('vasya', 24, 40), 
    new Popel('natali', 25, 41), 
    new Popel('karolina', 26, 42), 
    new Popel('yahz', 27, 43)];
    console.log(popelyshki);
    

class Prince {
    constructor(name, age, sizeboot){
        this.name = name;
        this.age = age;
        this.sizeboot = sizeboot;
    }
}

let princeOne = new Prince('Max', 22, 36);


for( i = 0; i < popelyshki.length; i++) {
    if (popelyshki[i].size === princeOne.sizeboot)
    console.log(popelyshki[i])
 }

//  -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

function Popel(name, age, size) {
    this.name = name;
    this.age = age;
    this.size = size;
}

 let popelyshki = [
    new Popel('alina', 18, 35),
    new Popel('Nastya', 19, 35), 
    new Popel('katya', 20, 36), 
    new Popel('dasha', 21, 37), 
    new Popel('vika', 22, 38), 
    new Popel('nika', 23, 39), 
    new Popel('vasya', 24, 40), 
    new Popel('natali', 25, 41), 
    new Popel('karolina', 26, 42), 
    new Popel('yahz', 27, 43)];

function Prince(name, age, size) {
    this.name = name;
    this.age = age;
    this.size = size;
    this.findPopel = function findPopel(array) {
        for (let i = 0; i < array.length; i++) {
            if (popelyshki[i].size === this.size) 
                console.log(array[i]);
        };    
    };    
};

let princeA = new Prince ('nika', 23, 39);
princeA.findPopel(popelyshki)


























