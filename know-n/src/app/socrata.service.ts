import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SchoolStuff} from './dataresult/schoolstuff';

@Injectable()
export class SocrataService {

  constructor(private httpClient: HttpClient) {
   }

   getData () {
     return this.httpClient
     .get<SchoolStuff[]>(
       'https://brigades.opendatanetwork.com/resource/rb2w-i8ye.json',
        {headers:
          {'X-App-Token' : 'Gb6VCUBNsrLNh9XMfWHVN9YPk'}
        });
   }

}
