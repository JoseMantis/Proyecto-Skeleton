import { Component, ViewChild} from '@angular/core';
import { IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  fechaNacimiento: string = ''; // Propiedad para almacenar la fecha seleccionada

  @ViewChild('myDatetime') myDatetime: IonDatetime | undefined;

  constructor() {}

  confirmSelection() {
    if (this.myDatetime) {
      this.myDatetime.confirm(true); // Cierra el calendario y confirma la selección
    }
  }

}
