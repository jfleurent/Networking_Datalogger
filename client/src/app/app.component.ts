import { Component } from '@angular/core';
import FusionCharts from 'fusioncharts/core';
import line from 'fusioncharts/viz/line';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
FusionCharts.addDep(line);
var date;
var chartInstance;

function convertDate(date) {
  //Nov 24 2018
  var dateString = date.toString()
  console.log(dateString)
 var month = dateString.substring(4,7)
 console.log(month)
var day = dateString.substring(8,10)
console.log(day)
var year = dateString.substring(11,15)
console.log(year)
return year + "-" + convertMonth(month) + "-" + day
}

function convertMonth(month){
switch(month){
  case "Jan":
    return "01";
  case "Feb":
    return "02";
  case "Mar":
    return "03";
  case "Apr":
    return "04";
  case "May":
    return "05";
  case "Jun":
    return "06";
  case "Jul":
    return "07";
  case "Aug":
    return "08";
  case "Sep":
    return "09";
  case "Oct":
    return "10";
  case "Nov":
    return "11";
  case "Dec":
    return "12";
}
}

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
    chartInstance.setJSONUrl('http://localhost:80/'+convertDate(date));
   console.log(convertDate(date))
  }

  ngOnInit() {
    chartInstance = new FusionCharts({
      type: 'line',
      width: '800', // Width of the chart
      height: '400', // Height of the chart
      dataFormat: 'json', // Data type
      renderAt:'chart-container', //container where the chart will render
    
    });

    //TODO Add url for server API
    // chartInstance.setJSONUrl();

    
// Render
chartInstance.render();

  }

//   dataSource: {
//     "chart": {
//         "caption": "Datalogger information",
//         "subCaption": "Displays the voltage being read from the datalogger",
//         "xAxisName": "Time (s)",
//         "yAxisName": "Voltage (V)",
//         "numberSuffix": "V",
//         "theme": "fusion",
//         "color" : "#29C3BE",
//     },
//     // Chart Data
//     "data": [
//       {
//       "label" : "0",
//       "value" : "7"
//       },
//       {
//       "label" : "5",
//       "value" : "7"
//       }
//     ]
// }

}
