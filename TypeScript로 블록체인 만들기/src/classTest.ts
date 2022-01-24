enum Gender {
  none,
  male,
  female,
}

class Human {
  public name: string;
  public gender: Gender = Gender.none;
  public phoneNumber?: string;
  private identityNumber: string;

  constructor(
    name: string,
    identityNumber: string,
    gender?: Gender,
    phoneNumber?: string
  ) {
    this.name = name;
    this.gender = gender;
    this.phoneNumber = phoneNumber;
    this.identityNumber = identityNumber;
  }

  returnUserInfo(): string {
    return `Name: ${this.name}\nGender: ${this.gender}\nPhone Number: ${this.phoneNumber}`;
  }
}

const james = new Human("James", "ABCD1234");

// console.log(james.returnUserInfo());

class Student {
  static staticMethod(): string {
    console.log("This is Static Method");
    console.log(this);
    return `I cannot use instance variable ${this.name}!`;
  }

  public name: string;
  private studentId: string;

  constructor(name: string, studentId: string) {
    this.name = name;
    this.studentId = studentId;
  }

  instanceMethod(): string {
    console.log("This is Instance Method");
    console.log(this);
    return `I can use instance variable! So, hi ${this.name}!`;
  }
}

console.log(Student.staticMethod());

const student = new Student("James", "ABCD1234");
console.log(student.instanceMethod());

console.log(Student.staticMethod());
