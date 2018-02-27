import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SocrataService } from './socrata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Get in the know!';
  sdOjbects = [];

  constructor(private socrata: SocrataService) {}

  getServiceData() {
    this.socrata.getData().forEach(
      (val) => {
          this.sdOjbects.push(val); 
        }
    )}
}