//Реализуйте класс Employee (Работник), который будет иметь свойства: firstname (имя),  
//lastname (фамилия), rate (ставка за день работы), workDays (количество отработанных дней). 
//Также класс должен иметь метод getCurrentSalary(), который будет выводить зарплату работника. 
//Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.           

//Работать должно вот так:   

//const worker = new Employee('Настя', 'Петрова', 5, 24);

function Employee(firstname, lastname, rate, workdays) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.rate = rate;
  this.workdays = workdays;
  this.getCurrentSalary = function getCurrentSalary(){
    return this.rate * this.workdays;
  };
};

const worker = new Employee('Иван', 'Иванов', 10, 31);

console.log(worker.firstname); //выведет 'Иван'
console.log(worker.lastname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.workdays); //выведет 31
console.log(worker.getCurrentSalary()); //выведет 310 - то есть 10*31