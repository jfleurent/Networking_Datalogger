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
        for (let i = 0; i < 1; i++) {
            a[i] = fetch('http://localhost:80/date/' + b.format('YYYY-MM-DD'), {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                }
            }).then(value => value.json());
        }
        Promise.all(a).then(values => {
            console.log(values);
            this.myChart.data.datasets[0].data = [];
            let aa = 0;
            let a1 = 0;
            let startHour = 3;
            for (let i = 0, j = 0; i < values.length; i++) {
                for(let k = 0; k < values[i].length; k++){
                    console.log(b.hour(0).toISOString() + ' | ' +  moment(values[i][k].isoDate).hour(0).toISOString());
                    if (b.hour(startHour).isSameOrAfter(moment(values[i][k].isoDate))) {
                        aa += values[i][k].temperature;
                        a1++;
                    }
                    else{
                        startHour+=3;
                        this.myChart.data.datasets[0].data[j++] = aa / (a1 === 0 ? 1 : a1);
                    }
                }
            }
            while(this.myChart.data.datasets[0].data.length <){

            }
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
