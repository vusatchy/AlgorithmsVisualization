import {Component, OnInit} from '@angular/core';
import {AbstractSearchComponent} from '../abstract.search.component';

@Component({
  selector: 'app-linear-search',
  templateUrl: './linear.search.component.html',
  styleUrls: ['./linear.search.component.css']
})
export class LinearSearchComponent extends AbstractSearchComponent{

  constructor() {
    super();
  }

  async search() {
    for (let i = 0; i < this.size; i++) {
      this.cursor = i;
      let number = this.numbers[i];
      if (number == this.searchNumber) {
        this.found = true;
        break;
      }
      await this.delay(500);
    }
  }

}
