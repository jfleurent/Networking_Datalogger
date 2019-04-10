import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import {Card} from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import moment from "moment";


let Chart = require("chart.js");
let borderColors = [];
let backgoundColors = [];
let myChart = [];


class BarGraphCard extends Component {
    constructor(props) {
        super(props);
        this.state = {inputValue: moment()};
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const node = this.node;
        for (let i = 0; i < 8; i++) {
            borderColors[i] = this.props.cardData.borderColor;
            backgoundColors[i] = this.props.cardData.backgroundColor;
        }
        this.myChart = new Chart(node, {
            type: "bar",
            data: {
                labels: ["12:00 a.m.", "3:00 a.m.", "6:00 a.m.", "9:00 a.m.", "12:00 p.m.", "3:00 p.m.", "6:00 p.m.", "9:00 p.m."],
                datasets: [
                    {
                        label: this.props.cardData.title,
                        data: this.props.cardData.graphData,
                        backgroundColor: backgoundColors,
                        borderColor: borderColors,
                        borderWidth: 2
                    }
                ]
            }
        });
        console.log(this.myChart);
    }

    handleChange(value) {
        this.setState({inputValue: value});
        this.getValuesFromAPI(value);
    }

    getValuesFromAPI(value) {
        console.log(this.myChart);
        const a = [];
        const b = moment(value + 'T00:00:00');
        for (let i = 0; i < 7; i++) {
            a[i] = fetch('http://localhost:80/date/' + b.day(i).format('YYYY-MM-DD'), {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                }
            }).then(value => value.json());
        }
        Promise.all(a).then(values => {
            console.log(values);
            let aa = 0, bb = 0, cc = 0, dd = 0, ee = 0, ff = 0, gg = 0;
            let a1 = 0, b1 = 0, c1 = 0, d1 = 0, e1 = 0, f1 = 0, g1 = 0;
            for (let i = 0; i < values.length; i++) {
                if (b.day(0).isSame(moment(values[i].isoDate))) {
                    aa += values[i].temperature;
                    a1++;
                } else if (b.day(1).isSame(moment(values[i].isoDate))) {
                    bb += values[i].temperature;
                    b1++;
                } else if (b.day(2).isSame(moment(values[i].isoDate))) {
                    cc += values[i].temperature;
                    c1++;
                } else if (b.day(3).isSame(moment(values[i].isoDate))) {
                    dd += values[i].temperature;
                    d1++;
                } else if (b.day(4).isSame(moment(values[i].isoDate))) {
                    ee += values[i].temperature;
                    e1++;
                } else if (b.day(5).isSame(moment(values[i].isoDate))) {
                    ff += values[i].temperature;
                    f1++;
                } else {
                    gg += values[i].temperature;
                    g1++;
                }
            }
            this.myChart.data.datasets[0].data[0] = aa / (a1 === 0 ? 1 : a1);
            this.myChart.data.datasets[0].data[1] = bb / (b1 === 0 ? 1 : b1);
            this.myChart.data.datasets[0].data[2] = cc / (c1 === 0 ? 1 : c1);
            this.myChart.data.datasets[0].data[3] = dd / (d1 === 0 ? 1 : d1);
            this.myChart.data.datasets[0].data[4] = ee / (e1 === 0 ? 1 : e1);
            this.myChart.data.datasets[0].data[5] = ff / (f1 === 0 ? 1 : f1);
            this.myChart.data.datasets[0].data[6] = gg / (g1 === 0 ? 1 : g1);
            this.myChart.update();
        })
    }

    render() {
        return <Card style={{marginLeft: 100, marginRight: 50, marginTop: 20, width: '75%'}}>
            <CardHeader
                title={
                    <Typography variant="h5" component="h1" style={{marginLeft: 'auto'}}>
                        {'Daily: ' + this.props.cardData.title}
                    </Typography>
                }
                action={
                    <form noValidate>
                        <TextField
                            onChange={event => this.handleChange(event.target.value)}
                            id="date"
                            label="Date"
                            type="date"
                            style={{marginRight: 'auto'}}
                            selected={this.state.inputValue}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                    </form>
                }
            />
            <canvas
                style={{width: '100%', height: '300px'}}
                ref={node => (this.node = node)}
            />
        </Card>
    }

}

export default (BarGraphCard);
