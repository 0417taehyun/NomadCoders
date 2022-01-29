# :mountain: Nomad Coders 강의 코드 모음

## :books: Talbe Of Contents

- [:electron: TypeScript로 블록체인 만들기](#electron-typescript로-블록체인-만들기)
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

#### :rocket: What I Learned

### :electron: 코코아톡 클론코딩

> 강의는 [코코아톡 클론코딩](https://nomadcoders.co/kokoa-clone)에서 확인할 수 있습니다.

### :electron: 바닐라 JS로 크롬 앱 만들기

> 강의는 [바닐라 JS로 크롬 앱 만들기](https://nomadcoders.co/javascript-for-beginners)에서 확인할 수 있습니다.

#### :rocket: What I Learned

> 결과물은 해당 [레포지토리]()에서 확인할 수 있습니다.

##### `null` vs `undefined`

`null` 및 `undefined` 모두 값이 없다는 의미이다.

`null`의 경우 명시적으로 값이 비어있다는 걸 나타낼 때 사용하며 따라서 의도적으로 개발자가 값을 할당해야만 한다. 주로 `const obj = {};`와 같이 변수를 초기화할 때 많이 사용한다.

`undefined`의 경우 `const test;`와 같이 변수를 선언했을 때 할당되는 값이다. 따라서 모든 변수의 초깃값은 별도의 값을 할당하지 않으면 자동으로 `undefined`다.

`null`과 `undefined`의 차이를 쉽게 풀어서 설명하면 `null`의 경우 값이 없는 값으로 등록이 되어 있는 것이고 `undefined`의 경우 값이 등록이 되어 있지 않은 것이다. 따라서 `null`은 선언, 등록을 위한 키워드이지만 `undefined`는 미리 선언된 전역 변수이다.

###### 기타

아래와 같이 `undefined`의 자료형을 출력하면 `undefined`가 나오지만, `null`의 자료형을 출력하면 히 원시형(Primitive Type) 중 하나이기 때문에 이는 자바스크립트 초기 버전의 오류다.

```javascript
console.log(typeof undefined); // > undefined
console.log(typeof null); // > object
```

`typeof` 연산자는 해당 값이 `undefine`, `object`, `number` 등인지 확인하는 로직으로 이루어져 있는데 그 내부에 `null`인지 확인하는 항목이 누락되어 있어서 그 결과로 `object`를 출력하는 것이다.

해당 부분을 고치기 위해 `typeof` 연산자를 수정하자는 제안이 있었지만 기존 `typeof` 연산자로 구현된 여러 웹 사이트 코드의 오류를 고려했을 때 이는 곧 자바스크립트 정신에 위배된다고 판단되었고, 그 결과 제안은 거절당했다. 이를 해결하기 위해서는 일치 연산자(`===`)를 사용하여 자료형을 확인하면 된다.

```javascript
const test = null;
console.log(test === null); // > true
```

`null`은 아무런 값이 없다는 의미다. 값이 비어있다는 의미에 가깝다. > 파이썬에서의 `None`에 해당한다.

`undefiend` 또한 값이 없다는 의미이이다.

`null`은 자연적으로 발생하지 않는다. 값이 없다라는 것을 알려주려고 의도적으로 사용한다,.

### :electron: ES6의 정석

> 강의는 [ES6의 정석](https://nomadcoders.co/es6-once-and-for-all)에서 확인할 수 있습니다.

#### :rocket: What I Learned

> 결과물은 해당 [레포지토리]()에서 확인할 수 있습니다.

##### `var`, `let`, `const` 차이

호이스팅(Hoisting)

일시적 비활성 구역(TDZ_Temporal Dead Zone)
