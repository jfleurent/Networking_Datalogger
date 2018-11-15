import { Component } from '@angular/core';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d';
FusionCharts.addDep(Column2D);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'DataLoggerClient';
  
  ngOnInit() {
    var chartInstance = new FusionCharts({
      type: 'column2D',
      width: '700', // Width of the chart
      height: '400', // Height of the chart
      dataFormat: 'json', // Data type
      renderAt:'chart-container', //container where the chart will render
      dataSource: {
          "chart": {
              "caption": "Countries With Most Oil Reserves [2017-18]",
              "subCaption": "In MMbbl = One Million barrels",
              "xAxisName": "Country",
              "yAxisName": "Reserves (MMbbl)",
              "numberSuffix": "K",
              "theme": "fusion",
          },
          // Chart Data
          "data": [{
              "label": "Venezuela",
              "value": "290"
          }, {
              "label": "Saudi",
              "value": "260"
          }, {
              "label": "Canada",
              "value": "180"
          }, {
              "label": "Iran",
              "value": "140"
          }, {
              "label": "Russia",
              "value": "115"
          }, {
              "label": "UAE",
              "value": "100"
          }, {
              "label": "US",
              "value": "30"
          }, {
              "label": "China",
              "value": "30"
          }]
      }
  });
// Render
chartInstance.render();

  }}
