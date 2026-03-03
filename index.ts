// 1. Define the Vehicle interface
 interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// 2. Implement the Car class
 class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

// 3. Create an instance and 4. Call start
 function demo(): string[] {
  const logs: string[] = [];
  const originalLog = console.log;
  console.log = (...args: unknown[]) => {
    logs.push(args.join(" "));
    originalLog(...args);
  };

  const myCar = new Car("Toyota", "Camry", 2024);
  logs.push(`Created Car: ${myCar.make} ${myCar.model} (${myCar.year})`);
  myCar.start();

  console.log = originalLog;
  return logs;
}

console.log(demo());
