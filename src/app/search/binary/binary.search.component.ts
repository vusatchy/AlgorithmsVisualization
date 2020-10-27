import {Component, OnInit} from '@angular/core';
import {AbstractSearchComponent} from '../abstract.search.component';

@Component({
  selector: 'app-linear-search',
  templateUrl: './binary.search.component.html',
  styleUrls: ['./binary.search.component.css']
})
export class BinarySearchComponent extends AbstractSearchComponent{

  lefBorder: number;

  rightBorder: number;

  constructor() {
    super();
  }

  async search() {
    this.lefBorder = 0;
    this.rightBorder = this.size - 1;
    while (this.lefBorder <= this.rightBorder) {
      this.cursor = this.lefBorder + Math.floor((this.rightBorder - this.lefBorder) / 2);
      await this.delay(1000);
      if (this.numbers[this.cursor] < this.searchNumber) {
        this.lefBorder = this.cursor + 1;
      } else if (this.numbers[this.cursor] > this.searchNumber) {
        this.rightBorder = this.cursor - 1;
      } else {
        this.found = true;
        break;
      }
    }
  }
}
