import { Component} from '@angular/core';
import { format, parseISO } from 'date-fns';
import { AlertController } from '@ionic/angular';

@Component({
  
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showPicker = false;
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  formattedString = '';

  constructor(private alertController: AlertController){
    this.setToday();
  }

  setToday(){
    this.formattedString = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'), 'dd MMM, yyyy');
  }

  dateChanged(value: any){
    console.log(value);
    this.dateValue = value;
    this.formattedString = format(parseISO(value), 'dd MMM, yyyy');
    this.showPicker = false;
  }

  nombre: string = '';
  apellido: string = '';

  async limpiarValores() {
    this.nombre = '';
    this.apellido = '';
  }

  async mostrarValores() {
    const alert = await this.alertController.create({
      header: 'Valores',
      message: `Nombre: ${this.nombre}\n Apellido: ${this.apellido}`,
      buttons: ['OK']
    });
  
    await alert.present();
  }
}