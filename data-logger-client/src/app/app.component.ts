import { Component } from '@angular/core';
import FusionCharts from 'fusioncharts/core';
import line from 'fusioncharts/viz/line';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
FusionCharts.addDep(line);
var date
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'DataLoggerClient';

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
   date = event.value
  }

  onClickMe() {
   console.log(date)
  }


  ngOnInit() {
    var chartInstance = new FusionCharts({
      type: 'line',
      width: '800', // Width of the chart
      height: '400', // Height of the chart
      dataFormat: 'json', // Data type
      renderAt:'chart-container', //container where the chart will render
      dataSource: {
          "chart": {
              "caption": "Datalogger information",
              "subCaption": "Displays the voltage being read from the datalogger",
              "xAxisName": "Time (s)",
              "yAxisName": "Voltage (V)",
              "numberSuffix": "V",
              "theme": "fusion",
              "color" : "#29C3BE",
          },
          // Chart Data
          "data": [
            {
            "label" : "0",
            "value" : "7"
            },
            {
            "label" : "5",
            "value" : "7"
            },
            {
            "label" : "10",
            "value" : "7"
            },
            {
            "label" : "15",
            "value" : "8"
            },
            {
            "label" : "20",
            "value" : "7"
            },
            {
            "label" : "25",
            "value" : "7"
            },
            {
            "label" : "30",
            "value" : "9"
            },
            {
            "label" : "35",
            "value" : "8"
            },
            {
            "label" : "40",
            "value" : "8"
            },
            {
            "label" : "45",
            "value" : "9"
            },
            {
            "label" : "50",
            "value" : "8"
            },
            {
            "label" : "55",
            "value" : "8"
            },
            {
            "label" : "60",
            "value" : "8"
            },
            {
            "label" : "65",
            "value" : "7"
            },
            {
            "label" : "70",
            "value" : "7"
            },
            {
            "label" : "75",
            "value" : "9"
            },
            {
            "label" : "80",
            "value" : "8"
            },
            {
            "label" : "85",
            "value" : "7"
            },
            {
            "label" : "90",
            "value" : "9"
            },
            {
            "label" : "95",
            "value" : "7"
            },
            {
            "label" : "100",
            "value" : "7"
            },
            {
            "label" : "105",
            "value" : "9"
            },
            {
            "label" : "110",
            "value" : "8"
            },
            {
            "label" : "115",
            "value" : "9"
            },
            {
            "label" : "120",
            "value" : "9"
            },
            {
            "label" : "125",
            "value" : "8"
            },
            {
            "label" : "130",
            "value" : "8"
            },
            {
            "label" : "135",
            "value" : "9"
            },
            {
            "label" : "140",
            "value" : "8"
            },
            {
            "label" : "145",
            "value" : "8"
            },
            {
            "label" : "150",
            "value" : "8"
            },
            {
            "label" : "155",
            "value" : "9"
            },
            {
            "label" : "160",
            "value" : "7"
            },
            {
            "label" : "165",
            "value" : "7"
            },
            {
            "label" : "170",
            "value" : "7"
            },
            {
            "label" : "175",
            "value" : "8"
            },
            {
            "label" : "180",
            "value" : "8"
            },
            {
            "label" : "185",
            "value" : "8"
            },
            {
            "label" : "190",
            "value" : "7"
            },
            {
            "label" : "195",
            "value" : "9"
            },
            {
            "label" : "200",
            "value" : "7"
            },
            {
            "label" : "205",
            "value" : "9"
            },
            {
            "label" : "210",
            "value" : "7"
            },
            {
            "label" : "215",
            "value" : "7"
            },
            {
            "label" : "220",
            "value" : "7"
            },
            {
            "label" : "225",
            "value" : "9"
            },
            {
            "label" : "230",
            "value" : "8"
            },
            {
            "label" : "235",
            "value" : "7"
            },
            {
            "label" : "240",
            "value" : "8"
            },
            {
            "label" : "245",
            "value" : "9"
            },
            {
            "label" : "250",
            "value" : "8"
            },
            {
            "label" : "255",
            "value" : "8"
            },
            {
            "label" : "260",
            "value" : "9"
            },
            {
            "label" : "265",
            "value" : "8"
            },
            {
            "label" : "270",
            "value" : "8"
            },
            {
            "label" : "275",
            "value" : "9"
            },
            {
            "label" : "280",
            "value" : "8"
            },
            {
            "label" : "285",
            "value" : "8"
            },
            {
            "label" : "290",
            "value" : "9"
            },
            {
            "label" : "295",
            "value" : "7"
            },
            {
            "label" : "300",
            "value" : "7"
            },
            {
            "label" : "305",
            "value" : "8"
            },
            {
            "label" : "310",
            "value" : "8"
            },
            {
            "label" : "315",
            "value" : "7"
            },
            {
            "label" : "320",
            "value" : "9"
            },
            {
            "label" : "325",
            "value" : "7"
            },
            {
            "label" : "330",
            "value" : "9"
            },
            {
            "label" : "335",
            "value" : "9"
            },
            {
            "label" : "340",
            "value" : "8"
            },
            {
            "label" : "345",
            "value" : "7"
            },
            {
            "label" : "350",
            "value" : "9"
            },
            {
            "label" : "355",
            "value" : "7"
            },
            {
            "label" : "360",
            "value" : "9"
            },
            {
            "label" : "365",
            "value" : "7"
            },
            {
            "label" : "370",
            "value" : "8"
            },
            {
            "label" : "375",
            "value" : "7"
            },
            {
            "label" : "380",
            "value" : "8"
            },
            {
            "label" : "385",
            "value" : "8"
            },
            {
            "label" : "390",
            "value" : "9"
            },
            {
            "label" : "395",
            "value" : "9"
            },
            {
            "label" : "400",
            "value" : "8"
            },
            {
            "label" : "405",
            "value" : "9"
            },
            {
            "label" : "410",
            "value" : "8"
            },
            {
            "label" : "415",
            "value" : "9"
            },
            {
            "label" : "420",
            "value" : "8"
            },
            {
            "label" : "425",
            "value" : "7"
            },
            {
            "label" : "430",
            "value" : "8"
            },
            {
            "label" : "435",
            "value" : "8"
            },
            {
            "label" : "440",
            "value" : "7"
            },
            {
            "label" : "445",
            "value" : "9"
            },
            {
            "label" : "450",
            "value" : "9"
            },
            {
            "label" : "455",
            "value" : "8"
            },
            {
            "label" : "460",
            "value" : "7"
            },
            {
            "label" : "465",
            "value" : "7"
            },
            {
            "label" : "470",
            "value" : "7"
            },
            {
            "label" : "475",
            "value" : "8"
            },
            {
            "label" : "480",
            "value" : "7"
            },
            {
            "label" : "485",
            "value" : "8"
            },
            {
            "label" : "490",
            "value" : "9"
            },
            {
            "label" : "495",
            "value" : "7"
          }]
      }
  });
// Render
chartInstance.render();

  }}
