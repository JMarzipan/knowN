import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SocrataService } from './socrata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Know`N';
  sd = null;
  constructor(private socrata: SocrataService) {
      sd = socrata.;
   }

  this.sd.
}
