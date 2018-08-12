import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FormValidators } from './form.validators';
import { config } from '../../app.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [FormValidators]
})
export class HeaderComponent implements OnInit {

  @Input() filters;

  filtersForm:FormGroup;
  showErrMsg:boolean = false;
  @Output() filterChanged = new EventEmitter<object>();

  config = config;
  constructor(private formValidators:FormValidators) {
    
  }

  ngOnInit() {
    this.filtersForm = new FormGroup({},(formGroup: FormGroup) => {
      return this.formValidators.isFilterValid(formGroup);
    });
    for(let filter of this.filters){
      let control: FormControl = new FormControl(filter.value);
      this.filtersForm.addControl(filter.value,control);
    }
      
  }

  onFilterClick($e){
    if(($e.target.checked === false) && (this.filtersForm.errors && this.filtersForm.errors.atleastOneRequired === true)){
      $e.preventDefault();
      this.showErrMsg = true;
      return;
    }
  }

  onFilterChange($e){
    this.showErrMsg = false;
    this.filterChanged.emit(this.filtersForm.value);
  }

}
