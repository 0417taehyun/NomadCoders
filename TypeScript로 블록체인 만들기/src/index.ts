class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

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

const genesisBlock: Block = new Block(
  0,
  "2010ABCD",
  "2009ABCD",
  "Hello World!",
  123456
);

let blockchain: [Block] = [genesisBlock]; // Block 클래스만 배열에 들어갈 수 있게 한다.

console.log(blockchain);

export {};
