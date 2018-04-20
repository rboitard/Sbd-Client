import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SbdService } from './sbd.service';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpClient } from 'selenium-webdriver/http';
import { MyFormComponent } from './my-form/my-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [SbdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
