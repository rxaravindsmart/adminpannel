import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.Module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './default/default.module';
import { FullWidthtModule } from './fullwidth/fullwidth.module';
import { DefaultRoutingModule } from './default/default.routing.module';
import { FullwidthRoutingModule } from './fullwidth/fullwidth-routing.module';
import { SidbarModule } from './sidebar/sidebar.module';
import { HeaderbarModule } from './headerbar/headerbar.module';
import { HttpClientModule } from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    DefaultModule,
    FullWidthtModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
