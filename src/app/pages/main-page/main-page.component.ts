import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {dateValidator} from "./dateValidatror";
import {valueReferenceToExpression} from "@angular/compiler-cli/src/ngtsc/annotations/src/util";
import {Model} from "../../model/model";
import {UrlService} from "../../service/url.service";
import {LongUrl} from "../../model/long-url";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [DatePipe]
})
export class MainPageComponent implements OnInit {
  form: FormGroup | undefined;
  longUrl: LongUrl | undefined;

  pattern = 'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()!@:%_\\+.~#?&\\/\\/=]*)'

  constructor(private fb: FormBuilder, private datePipe: DatePipe, private urlService: UrlService) {
  }

  ngOnInit(): void {
    this.formInit();
  }

  private formInit(): void {

    this.form = this.fb.group({
        longUrl: [null, [Validators.required, Validators.pattern(this.pattern)]],
        date: [null, dateValidator]
      }
    );

    const date = new Date();
    date.setDate(date.getDate() + 1);
    this.form.controls.date.setValue(this.datePipe.transform(date, 'yyyy-MM-dd'));
  }

  onSubmit() {
    const model: Model = this.form?.value;
    this.urlService.addUrl(model)
      .subscribe(value => this.callBackOk(value), error => this.callBackError(error));
  }

  private callBackOk(value: LongUrl) {
    this.longUrl = value;
    console.log(value);
  }

  private callBackError(error: HttpErrorResponse) {
    console.log(error)
  }

  navigateByUrl(shortUrl: string) {
    window.location.href = shortUrl;
  }
}


