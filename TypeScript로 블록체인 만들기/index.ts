console.log("This is TypeScript.")

const name = 'James';
const age = 21;
const gender = 'male';

const sayHi = (name: string, age: number, gender?) => {
    console.log(`Hello ${name}! You are ${age} and ${gender}`)
};

sayHi(name, age); // gender 타입이 ?이므로 이는 곧 선택적(Optional)인 것을 의미해서 굳이 값을 넘겨주지 않더라도 정상적으로 컴파일 된다.
// sayHi(24, 24); > name의 타입이 string이기 때문에 숫자를 사용하려면 컴파일 오류가 발생한다.

export {}; // 이 파일이 모듈이 된다는 걸 이해할 수 있도록 한다.