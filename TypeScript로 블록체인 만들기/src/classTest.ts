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

console.log(james.returnUserInfo());
