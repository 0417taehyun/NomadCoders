// var 키워드를 사용하여 변수를 선언 및 정의할 경우 아래 name 변수의 값처럼 이후에 바뀔 수 있다.
var name = "Nicolas";
console.log(name); // > Nicolas

name = "Pedro";
console.log(name); // > Pedro

// const 키워드를 사용하여 변수를 선언하면 값이 변경되지 않는다. 따라서 값을 덮어쓰려고 시도할 경우 아래처럼 TypeError가 발생한다.
const constantName = "James";
console.log(constantName);

// constantName = "Tom"; > TypeError: Assignment to constant variable.
// console.log(constantName);

/*
그러나 const는 항상 잠겨있거나 우리가 원하는 것처럼 read-only는 아니다.
예를 들어 아래처럼 객체 내부의 값은 변경 가능하다.
*/
const person = { name: "Alex" };
// person = "ABCD"; > TypeError: Assignment to constant variable.
console.log(person); // > { name: 'Alex' }
person.name = "John";
console.log(person); // > { name: 'John' }

// let 키워드를 사용하여 변수를 선언하고 정의하면 아래 changibleName 변수와 같이 값을 변경할 수 있다.
let changibleName = "Woody";
console.log(changibleName); // > Woody
changibleName = "Timy";
console.log(changibleName); // > Timy

/* 
var를 사용하지 않는 이유는 결국 호이스팅(Hoisting) 때문이다.
호이스팅이란 코드를 실행하면 맨 위로 끌어 올려지는 걸 의미한다. 예를 들어 아래와 같다.
스크립트 언어임에도 불구하고 myName이 정의되지 않았는데 호이스팅 때문에 undefined가 출력되었다.
*/
console.log(myName); // undefined
var myName = "Rina";

// 반대로 let의 경우 실제로는 정의되지 않았기 때문에 아래와 같이 오류를 일으킨다.
// console.log(myNewName); > ReferenceError: Cannot access 'myNewName' before initialization
let myNewName = "Robert";

/*
TDZ(Temporal Dead Zone)라 불리는 일시적 비활성 구역은 바로 이 호이스팅을 위해 생긴다.
var 키워드를 사용하여 정의한 변수의 경우 정의되기 전에 접근할 수 있지만 값에 접근을 할 수는 없다.
let 및 const 키워드를 사용하여 정의한 변수의 경우 변수는 물론 값에도 접근할 수 없다.

var, let, const 모두 호이스팅의 대상이 되기 때문에 해당 스코프 상단으로 올라가게 되는데 TDZ에 의해 let 및 const 키워드를 통해 정의된 변수는 선언 전에 접근을 하지 못하게 막는다.

let, const, class 키워드로 정의된 부분은 TDZ의 영향을 받으며, var 및 function 키워드를 통해 정의된 부분은 TDZ의 영향을 받지 않는다.

class의 경우 만약 상속을 받을 때 constructor() 생성자 내부에서 super()가 호출되기 전까지 this를 호출할 수 없는데 이것도 TDZ 때문이다.
관련해서는 class 부분에서 더 다루고자 한다.
*/

/*
범위(Scope)는 일종의 버블(Bubble)이다. 이 버블이 변수에 접근 가능한 지 아닌 지를 감지해준다.

let 및 const는 블록 범위(Block Scope)를 갖기 때문에 아래와 같이 first 및 second 변수는 오류를 일으킨다.
그러나 var의 경우 함수 내에 존재하지 않으면 전역 변수로 사용이 되기 때문에 정상 출력된다. 이때 블록은 브라켓({}) 내의 범위를 의미한다.
*/

if (true) {
  const first = "const";
  let second = "let";
  var third = "var";
}

// console.log(first); > ReferenceError: first is not defined
// console.log(second); > ReferenceError: second is not defined
console.log(third); // > var

// 앞서 이야기한 것처럼 var 키워드를 함수 내에서 사용할 경우 함수 범위(Function Scope)를 갖기 때문에 아래와 같이 변수 hello에 접근할 수 없다.

function func() {
  var hello = "Hello";
}

// console.log(hello); > ReferenceError: hello is not defined
