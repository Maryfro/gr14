import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup,} from "@angular/forms";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-form-field-date',
  templateUrl: './form-field-date.component.html',
  styleUrls: ['./form-field-date.component.css'],
  providers: [DatePipe]
})
export class FormFieldDateComponent implements OnInit {

  form: FormGroup | undefined;

  constructor(private fb: FormBuilder, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.formInit();
  }

  private formInit(): void {
    this.form = this.fb.group({
        date: []
      }
    );
    const date = new Date();
    date.setDate(date.getDate() + 7);
    this.form.controls.date.setValue(this.datePipe.transform(date, 'yyyy-MM-dd'));
  }
}
