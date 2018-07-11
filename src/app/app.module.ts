import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './adminlte/main-header/main-header.component';
import { MainSidebarComponent } from './adminlte/main-sidebar/main-sidebar.component';
import { ContentWrapperComponent } from './adminlte/content-wrapper/content-wrapper.component';
import { MainFooterComponent } from './adminlte/main-footer/main-footer.component';
import { ControlSidebarComponent } from './adminlte/control-sidebar/control-sidebar.component';
import {DropdownDirective} from './adminlte/shared/dropdown.directive';
import { DemoDropdownBasicComponent } from './adminlte/demo-dropdown-basic/demo-dropdown-basic.component';
import {BsDropdownModule} from 'ngx-bootstrap';
import { Dashboard1Component } from './adminlte/pages/dashboard1/dashboard1.component';
import {AppRoutingModule} from './adminlte/app-routing.module';
import { Dashboard2Component } from './adminlte/pages/dashboard2/dashboard2.component';
import { TopNavigationComponent } from './adminlte/pages/layout-options/top-navigation/top-navigation.component';
import { WidgetsComponent } from './adminlte/pages/widgets/widgets.component';
import { GeneralComponent } from './adminlte/pages/ui-elements/general/general.component';


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    ContentWrapperComponent,
    MainFooterComponent,
    ControlSidebarComponent,
    DropdownDirective,
    DemoDropdownBasicComponent,
    Dashboard1Component,
    Dashboard2Component,
    TopNavigationComponent,
    WidgetsComponent,
    GeneralComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
