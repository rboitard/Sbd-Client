import { Component } from '@angular/core';
import { SbdService } from './sbd.service';
import { Chart } from 'chart.js';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chart = [];
  constructor(private _sbd: SbdService) { }

  ngOnInit() {
   
  }
  onLaplaceChartCreate(form: NgForm){
    console.log(form.value['operator'])
    this._sbd.requestCount(form.value['target'], form.value['operator'], form.value['value']).subscribe(res => {
      let tab = res['result']['result'];
      let mediane = res['result']['mediane'];
      let erreur = res['result']['erreur'];
      let variance = res['result']['variance'];
      var size = tab[tab.length - 1] - tab[0];
      let arrayHeader = new Array();
      let arrayData = new Array(10).fill(0);
      for (var i = 0; i < 10; i++) {
        if (i == 9) {
          arrayHeader[i] = tab[tab.length - 1];
        }
        else {
          arrayHeader[i] = tab[0] + ((size / 10) * (i + 1));
        }
      }
      var j = 0;
      for (var i = 0; i < (tab.length); i++) {
        if (arrayHeader[j] < tab[i]) {
          j++;
        }
        arrayData[j] = arrayData[j] + 1;
      }

      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: createLabel(arrayHeader),
          datasets: [
            {
              label: "valeurs anonymisés",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
              data: arrayData
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'résultat'
          }
        }
      })
    })

    let createLabel = function (arrayLabel) {
      var label = new Array();
      for(var i = 0; i < arrayLabel.length; i++){
        if(i==0){
          label[i] = "<" + Math.round(arrayLabel[i]);
        }
        else{
          label[i] = Math.round(arrayLabel[i-1]) + " - " + Math.round(arrayLabel[i]);
        }
      }
      return label;
    }
  }
}
