import { Component, OnInit} from '@angular/core';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.page.html',
  styleUrls: ['./fecha.page.scss'],
})

export class FechaPage implements OnInit {
  modes = ['date-time', 'month', 'month-year', 'time', 'time-date', 'year'];
  selectedMode = 'date';
  showPicker = false;
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  formattedString = '';

  constructor(){
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
  ngOnInit() {
  }
}
