// 2. Implement the Car class
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// 3. Create an instance and 4. Call start
function demo() {
    var logs = [];
    var originalLog = console.log;
    console.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        logs.push(args.join(" "));
        originalLog.apply(void 0, args);
    };
    var myCar = new Car("Toyota", "Camry", 2024);
    logs.push("Created Car: ".concat(myCar.make, " ").concat(myCar.model, " (").concat(myCar.year, ")"));
    myCar.start();
    console.log = originalLog;
    return logs;
}
console.log(demo());
