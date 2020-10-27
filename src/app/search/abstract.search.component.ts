
export abstract class AbstractSearchComponent {

  min: number = 0;

  max: number = 200;

  size: number;

  numbers: number[];

  cursor: number;

  found: boolean;

  searchNumber: number;

  protected constructor() {
    this.numbers = this.generateListOfRandomNumbers(this.size);
    this.cursor = 0;
    this.found = false;
  }

  protected generateRandomNumber() {
    return Math.floor((Math.random() * this.max) + this.min);
  }

  protected abstract async search();

  protected generateListOfRandomNumbers(size: number) {
    let set: Set<number> = new Set();
    while (set.size < size) {
      set.add(this.generateRandomNumber());
    }
    return Array.from(set).sort((n1, n2) => n1 - n2);
  }

  onSizeUpdate() {
    if (this.max < this.size) {
      this.size = this.max;
    }
    this.numbers = this.generateListOfRandomNumbers(this.size);
  }

  protected delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
