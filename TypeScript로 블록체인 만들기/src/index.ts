console.log("This is TypeScript.");

const name = "James";
const age = 21;
const gender = "male";

const sayHi = (name: string, age: number, gender?): string => {
  console.log("This is normal type checking");
  return `Hello ${name}! You are ${age} and ${gender}`;
};

console.log(sayHi(name, age)); // gender 타입이 ?이므로 이는 곧 선택적(Optional)인 것을 의미해서 굳이 값을 넘겨주지 않더라도 정상적으로 컴파일 된다.
// sayHi(24, 24); > name의 타입이 string이기 때문에 숫자를 사용하려면 컴파일 오류가 발생한다.

// Interface의 경우 JavaScript에서 사용이 불가능한, TypeScript에서만 사용이 가능한 기능이다.

interface Human {
  name: string;
  age: number;
  gender: string;
}

const nico = {
  name: "Nico",
  gender: "male",
  age: 22,
};

const sayHiInterface = (person: Human): string => {
  console.log("This is Interface");
  return `Hello ${person.name}! You are ${person.age} and ${person.gender}`;
};

console.log(sayHiInterface(nico));

// JavaScript에서 Interface를 사용하고 싶으면 Class를 사용하면 된다.
// TypeScript에서 Class는 코드를 컨트롤 할 수 있도록 해준다.
// Interface를 사용하는 게 TypeScript 측면에서 좀 더 안전하다.
// 그러나 React, Express 등을 사용할 때 Class를 사용하게 되는데 이때는 private, public 등을 통해 보안 측면을 고려할 수 있다.

class HumanClass {
  public name: string;
  private age: number; // 외부로부터 보호
  public gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const lynn = new HumanClass("Lynn", 18, "female");

const sayHiClass = (person: HumanClass): string => {
  console.log("This is Class");
  return `Hello ${person.name}! You are ${person.gender}`; // person.age > 오류 why? 클래스에서 private 키워드를 사용했기 때문에 외부에서 호출 불가능
};

console.log(sayHiClass(lynn));

export {}; // 이 파일이 모듈이 된다는 걸 이해할 수 있도록 한다.
