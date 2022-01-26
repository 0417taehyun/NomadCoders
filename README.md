# :mountain: Nomad Coders 강의 코드 모음

## :books: Talbe Of Contents

- [:electron: TypeScript로 블록체인 만들기](#electron-typescript로-블록체인-만들기)
  - [:rocket: What I Learned](#rocket-what-i-learned)
- [:electron: 줌 클론코딩](#electron-줌-클론코딩)
- [:electron: 코코아톡 클론코딩](#electron-코코아톡-클론코딩)
- [:electron: 바닐라 JS로 크롬 앱 만들기](#electron-바닐라-js로-크롬-앱-만들기)
- [:electron: ES6의 정석](#electron-es6의-정석)

### :electron: TypeScript로 블록체인 만들기

> 강의는 [TypeScript로 블록체인 만들기](https://nomadcoders.co/typescript-for-beginners)에서 확인할 수 있습니다.

#### :rocket: What I Learned

> 결과물은 해당 [레포지토리](https://github.com/0417taehyun/NomadCoders/tree/main/TypeScript%EB%A1%9C%20%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8%20%EB%A7%8C%EB%93%A4%EA%B8%B0)에서 확인할 수 있습니다.

아래와 같이 타입스크립트의 기본 문법을 학습했다. Static Method 및 Instance Method 차이를 알게 된 것이 가장 인상 깊었다. Static Method의 경우 아래와 같이 객체의 인스턴스를 별개로 생성하지 않아도 사용이 가능하지만 그래서 인스턴스 변수는 따로 사용할 수 없다.

아래와 같이 `this`를 출력해 볼 경우 그 차이를 명시적으로 확인할 수 있는데 Static Method의 경우 `this`가 반환하는 게 클래스 자체이며 Instance Method의 경우 해당 인스턴스를 반환하는 걸 확인할 수 있다.

유니온, 인터섹션, 제네릭 등 타입스크립트의 다른 개념들도 추후 공부할 예정이다.

```typescript
class Student {
    static staticMethod(): string => {
        console.log("This is static method");
        console.log(this);
        return `Cannot use instance variables. It returend ${this.name}.`;
    };

    public name: string;
    private studentId: string;

    instanceMethod(): string => {
        console.log("This is instance method");
        console.log(this);
        return `Can use instance variable. Hi ${this.name}!`;
    }

    constructor(name: string, studentId: string) {
        this.name = name;
        this.studentId = studentId;
    }
}

console.log(Student.staticMethod());
// 출력 결과는 아래와 같다.
// This is Static Method
// [class Student]
// I cannot use instance variable Student!

const student = new Student("James", "ABCD1234");
console.log(student.instanceMethod());
// 출력 결과는 아래와 같다.
// Student { name: 'James', studentId: 'ABCD1234' }
// I can use instance variable! So, hi James!
// This is Static Method
```

### :electron: 줌 클론코딩

> 강의는 [줌 클론코딩](https://nomadcoders.co/noom)에서 확인할 수 있습니다.

#### What I Learned

### :electron: 코코아톡 클론코딩

> 강의는 [코코아톡 클론코딩](https://nomadcoders.co/kokoa-clone)에서 확인할 수 있습니다.

### :electron: 바닐라 JS로 크롬 앱 만들기

> 강의는 [바닐라 JS로 크롬 앱 만들기](https://nomadcoders.co/javascript-for-beginners)에서 확인할 수 있습니다.

### :electron: ES6의 정석

> 강의는 [ES6의 정석](https://nomadcoders.co/es6-once-and-for-all)에서 확인할 수 있습니다.
