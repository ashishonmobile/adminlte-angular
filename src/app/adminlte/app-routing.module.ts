import {NgModel} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Dashboard1Component} from './pages/dashboard1/dashboard1.component';
import {Dashboard2Component} from './pages/dashboard2/dashboard2.component';
import {WidgetsComponent} from './pages/widgets/widgets.component';
import {GeneralComponent} from './pages/ui-elements/general/general.component';

const appRoute: Routes = [
  {path: '', component: Dashboard1Component},
  {path: 'dashboard1', component: Dashboard1Component},
  {path: 'dashboard2', component: Dashboard2Component},
  {path: 'widgets', component: WidgetsComponent},
  {path: 'general', component: GeneralComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
