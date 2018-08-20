import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-update-camp',
  templateUrl: './update-camp.component.html',
  styleUrls: ['./update-camp.component.scss']
})
export class UpdateCampComponent implements OnInit {
  // myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  constructor() {}
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Kollam' },
    { value: 'steak-0', viewValue: 'Kottayam' }
  ];

  ngOnInit() {
    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value))
    // );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
