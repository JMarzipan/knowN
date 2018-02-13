import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SamplesComponent } from './samples/samples.component';
import { SocrataService } from './socrata.service';

@NgModule({
  declarations: [
    AppComponent,
    SamplesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    SocrataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
