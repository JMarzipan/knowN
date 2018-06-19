import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SocrataService } from './socrata.service';
import { SchoolStuff } from './dataresult/schoolstuff';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Get in the know!';
  sdOjbects: Array<SchoolStuff>;

  constructor(private socrata: SocrataService) {}

  getServiceData() {
    this.socrata.getData().subscribe(
      (items: Array<SchoolStuff>) => {
        this.sdOjbects = items;
      },
      (error) => {
        alert(error);
      },
      () => console.log(this.sdOjbects)
    );
}
}
