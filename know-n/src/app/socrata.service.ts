import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class SocrataService {

  constructor(private httpClient: HttpClient) {
   }

   getData () {
     this.httpClient
     .get('https://brigades.opendatanetwork.com/resource/rb2w-i8ye.json', {headers: {'X-App-Token' : 'Gb6VCUBNsrLNh9XMfWHVN9YPk'}});
   }

}