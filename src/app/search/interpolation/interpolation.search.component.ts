import {Component, OnInit} from '@angular/core';
import {AbstractSearchComponent} from '../abstract.search.component';

@Component({
  selector: 'app-linear-search',
  templateUrl: './interpolation.search.component.html',
  styleUrls: ['./interpolation.search.component.css']
})
export class InterpolationSearchComponent extends AbstractSearchComponent {

  lefBorder: number;

  rightBorder: number;

  constructor() {
    super();
  }

  async search() {
    this.found = false;
    this.lefBorder = 0;
    this.rightBorder = this.size - 1;
    while (this.numbers[this.lefBorder] < this.searchNumber && this.numbers[this.rightBorder] > this.searchNumber) {
      if (this.numbers[this.rightBorder] == this.numbers[this.lefBorder]) {
        break;
      }
      this.cursor = this.lefBorder + ((this.searchNumber - this.numbers[this.lefBorder]) * (this.rightBorder - this.lefBorder)) / (this.numbers[this.rightBorder] - this.numbers[this.lefBorder]);
      this.cursor = Math.floor(this.cursor);
      console.log(this.cursor)
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

    if (this.numbers[this.lefBorder] == this.searchNumber) {
      this.cursor = this.lefBorder;
      this.found = true;
    }
    if (this.numbers[this.rightBorder] == this.searchNumber) {
      this.cursor = this.rightBorder
      this.found = true;
    }
  }
}
