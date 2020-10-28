/* tslint:disable:use-input-property-decorator */
/* tslint:disable:use-output-property-decorator */

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-in-the-metadata',
  templateUrl: './in-the-metadata.component.html',
  styleUrls: ['./in-the-metadata.component.css'],
  // tslint:disable: no-inputs-metadata-property no-outputs-metadata-property
  inputs: ['clearanceItem'],
  outputs: ['buyEvent']
  // tslint:enable: no-inputs-metadata-property no-outputs-metadata-property

})
export class InTheMetadataComponent  {


  buyEvent = new EventEmitter<string>();
  clearanceItem: string;

  buyIt() {
    console.warn('Child says: emiting buyEvent with', this.clearanceItem);
    this.buyEvent.emit(this.clearanceItem);
  }

}

/* tslint:enable:use-input-property-decorator */
/* tslint:enable:use-output-property-decorator */


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/