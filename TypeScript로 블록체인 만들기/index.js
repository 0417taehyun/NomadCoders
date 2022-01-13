"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("This is TypeScript.");
sayHi("Test", 15);
const name = "James";
const age = 21;
const gender = "male";
const sayHi = (name, age, gender) => {
    console.log(`Hello ${name}! You are ${age} and ${gender}`);
};
sayHi(name, age); // gender 타입이 ?이므로 이는 곧 선택적(Optional)인 것을 의미해서 굳이 값을 넘겨주지 않더라도 정상적으로 컴파일 된다.
//# sourceMappingURL=index.js.map