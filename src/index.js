import './style.css';

class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

alert(new User('Ivan', 'Petrov'));