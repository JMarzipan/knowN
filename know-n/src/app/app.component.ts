import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SocrataService } from './socrata.service';
import { SchoolStuff } from './dataresult/schoolstuff';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Get in the know!';
  sdOjbects: SchoolStuff[];

  constructor(private socrata: SocrataService) {}

  getServiceData() {
    this.socrata.getData().subscribe(
      (items) => {
        this.sdOjbects = items;
      },
      (error) => {
        alert(error);
      }
    );
}
}
