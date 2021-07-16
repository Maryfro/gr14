import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {StatisticPageComponent} from './pages/statistic-page/statistic-page.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {FormFieldUrlComponent} from './pages/main-page/form-field-url/form-field-url.component';
import {FormFieldDateComponent} from './pages/main-page/form-field-data/form-field-date.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StatisticItemComponent} from './pages/statistic-page/statistic-item/statistic-item.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    StatisticPageComponent,
    FormFieldUrlComponent,
    FormFieldDateComponent,
    StatisticItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
