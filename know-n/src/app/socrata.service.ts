import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SchoolStuff} from './dataresult/schoolstuff';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SocrataService {

  constructor(private httpClient: HttpClient) {
   }

   getData () {
     return this.httpClient
     .get(
       'https://brigades.opendatanetwork.com/resource/rb2w-i8ye.json',
        {headers:
          {'X-App-Token' : 'Gb6VCUBNsrLNh9XMfWHVN9YPk'}
        });
   }

}
