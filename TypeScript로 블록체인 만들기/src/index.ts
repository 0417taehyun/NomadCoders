import * as CryptoJS from "crypto-js";

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  // instance method
  // 반드시 객체를 생성한 후에 호출이 가능하다

  sayHi = (): string => "Hi!";

  // static method
  // 메서드가 클래스 내부에 있고 new 연산자를 통해 클래스를 생성하지 않아도 호출할 수 있는 메서드
  // static 키워드는 클래스가 메모리에 올라갈 때 자동으로 생성되기 때문에 인스턴스와 별개로 호출 가능
  // 따라서 인스턴스 변수를 사용할 수 없다. 인스턴스 생성 전에 호출할 수 있기 때문이다.

  static calculateHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

// Block.sayHi() > Instance Method - Block 클래스를 생성하지 않으면 호출 불가능
// Block.calculateHash() > Static Method - Block 클래스를 생성하지 않아도 호출 가능

const genesisBlock: Block = new Block(
  0,
  "2010ABCD",
  "2009ABCD",
  "Hello World!",
  123456
);

let blockchain: Block[] = [genesisBlock]; // Block 클래스만 배열에 들어갈 수 있게 한다.

const getBlockChain = (): Block[] => blockchain;

const getLatestBlock = (): Block => getBlockChain[getBlockChain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

console.log(blockchain);

export {};
