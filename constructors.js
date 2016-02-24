function Person(name) {
    this.name = name;
}

Person.prototype.logName = function () {
    console.log(this.name);
};

var sean = new Person('Sean');
sean.logName();