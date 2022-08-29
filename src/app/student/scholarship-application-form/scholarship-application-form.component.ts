import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ScholarshipApplication } from 'src/app/models/scholarship-application';
import { STATES } from '../../../assets/data/STATES';
import { ScholarshipsService } from 'src/app/services/scholarships.service';

@Component({
  selector: 'app-scholarship-application-form',
  templateUrl: './scholarship-application-form.component.html',
  styleUrls: ['./scholarship-application-form.component.css'],
})
export class ScholarshipApplicationFormComponent implements OnInit {

  model!: NgbDateStruct;

  scholarshipModel = new ScholarshipApplication();

  submitted = false;
  errorMsg = '';

  constructor(private _scholarshipsService: ScholarshipsService) {}

  states: any = STATES;
  districts: any[] = [];

  ngOnInit(): void {}

  changeDistrict(stateEvent: any) {
    let selectedState = stateEvent.target.value;
    this.districts = this.states.find(
      (st: any) => st.state == selectedState
    ).districts;
  }
  onSubmit() {
    this.submitted = true;
    this._scholarshipsService.scholarship(this.scholarshipModel)
    .subscribe(
      data => console.log('Success!', data),
      error => this.errorMsg = error.statusText
    )
  }
}
