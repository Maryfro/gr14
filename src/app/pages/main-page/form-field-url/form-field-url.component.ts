import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-field-url',
  templateUrl: './form-field-url.component.html',
  styleUrls: ['./form-field-url.component.css']
})
export class FormFieldUrlComponent implements OnInit {

  form: FormGroup | undefined;

  pattern = 'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()!@:%_\\+.~#?&\\/\\/=]*)'

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.formInit();
  }

  private formInit(): void {
    this.form = this.fb.group({
        longUrl: [null, [Validators.required, Validators.pattern(this.pattern)]]
      }
    );
  }
}
