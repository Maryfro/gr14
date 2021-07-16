import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {StatisticPageComponent} from "./pages/statistic-page/statistic-page.component";

const routes: Routes = [
  {path: 'home', component: MainPageComponent},
  {path: 'statistic', component: StatisticPageComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
