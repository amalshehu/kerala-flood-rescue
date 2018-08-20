import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';

export interface District {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-update-camp',
  templateUrl: './update-camp.component.html',
  styleUrls: ['./update-camp.component.scss']
})
export class UpdateCampComponent implements OnInit {
  updateCampGroup: FormGroup;
  data: any;
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  constructor(public fb: FormBuilder) {
    this.updateCampSubmit(this.data);
  }
  districts: District[] = [
    { value: 'steak-0', viewValue: 'Kollam' },
    { value: 'steak-0', viewValue: 'Kottayam' }
  ];

  ngOnInit() {
    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value))
    // );
  }

  updateCampSubmit(formData) {
    this.updateCampGroup = this.fb.group({
      selectDistrict: [''],
      selectCamp: [''],
      men: [''],
      women: [''],
      children: ['']
    });
    console.log('my data', formData);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
