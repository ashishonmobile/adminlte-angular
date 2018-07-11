import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './adminlte/main-header/main-header.component';
import { MainSidebarComponent } from './adminlte/main-sidebar/main-sidebar.component';
import { ContentWrapperComponent } from './adminlte/content-wrapper/content-wrapper.component';
import { MainFooterComponent } from './adminlte/main-footer/main-footer.component';
import { ControlSidebarComponent } from './adminlte/control-sidebar/control-sidebar.component';
import {DropdownDirective} from './adminlte/shared/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    ContentWrapperComponent,
    MainFooterComponent,
    ControlSidebarComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
