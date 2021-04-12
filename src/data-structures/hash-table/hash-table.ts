interface HashTableInterface {
  insertItem(key: any, value: any): void;
  getItem(key: string): void
  hash(key: string): void;

}

class HashTable implements HashTableInterface {
  private table: any[];
  private bucketSize: number;
  constructor(bucketSize: number = 1024) {
    this.bucketSize = bucketSize;
    this.table = new Array(bucketSize);
  }
  hash(key: string) {
    const h = JSON.stringify(key, Object.keys(key).sort())
      .split('')
      .reduce((acc, cur, i) => acc + cur.charCodeAt(0) * (i + 1), 0);
    return h % this.bucketSize;
  }
  insertItem(key: any, value: any) {
    return this.table[this.hash(key)] = value;
  }
  getItem(key: string) {
    return this.table[this.hash(key)];
  }
}

export default HashTable;
