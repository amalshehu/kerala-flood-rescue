import { districts } from './../data';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import * as fromApp from '../reducers/index';
import * as appActions from '../app.actions';
import { of } from 'rxjs';

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
  options: string[];
  filteredOptions: Observable<string[]>;
  districtList$;
  options$: any;
  constructor(public fb: FormBuilder, private store: Store<any>) {
    this.updateCampFormInit();
    // this.districtList$ = this.store.pipe(select(fromApp.getDistrictList));
    this.store.pipe(select(fromApp.getSelectedDistrictOption)).subscribe(op => {
      this.options = op;
    });
  }
  districts: District[] = districts;

  ngOnInit() {
    this.filteredOptions = this.updateCampGroup
      .get('selectCamp')
      .valueChanges.pipe(
        startWith(''),
        map(val => (val.length >= 1 ? this._filter(val) : []))
      );
  }
  onDistrictSelect(e) {
    // this.store.dispatch(new appActions.UpdateCamp(e.value));
    this.store.dispatch(new appActions.UpdateCampOption(e.value));
    // this.store.pipe(select(fromApp.getSelectedDistrictOption));
  }
  updateCampSubmit(value) {
    console.log(value);
  }
  updateCampFormInit() {
    this.updateCampGroup = this.fb.group({
      selectDistrict: [''],
      selectCamp: [''],
      men: [''],
      women: [''],
      children: ['']
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
