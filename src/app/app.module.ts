import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { MenuLeftComponent } from './components/menu-left/menu-left.component'
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { HomeComponent } from './components/home/home.component'

@NgModule({
  declarations: [AppComponent, NavbarComponent, MenuLeftComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NzMenuModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
