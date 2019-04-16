import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import {Card} from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import moment from "moment";

let Chart = require("chart.js");
let myChart = [];

class LineGraphCard extends Component {

    constructor(props) {
        super(props);
        this.state = {inputValue: moment()};
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const dayLabels = [];
        let m = moment();
        const node = this.node;
        for (let i = 0; i < 7; i++) {
            dayLabels[i] = m.day(i).format("YYYY-MM-DD")
        }
        this.myChart = new Chart(node, {
            type: "line",
            data: {
                labels: dayLabels,
                datasets: [
                    {
                        label: "Light",
                        data: [],
                        backgroundColor: [
                            "rgba(0,0,0,0)",
                        ],
                        borderColor: [
                            "rgba(0, 23, 135, 0.3)"
                        ]
                    },
                    {
                        label: "Temperature",
                        data: [],
                        backgroundColor: [
                            "rgba(0,0,0,0)"
                        ],
                        borderColor: [
                            "rgba(0, 168, 76, 0.3)"
                        ]
                    }
                ]
            }
        });
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
            for (let i = 0; i < values.length; i++) {
                let aa = 0;
                let a1 = 0;
                let aaa = 0;
                let aa1 = 0;
                for(let j = 0; j < values[i].length; j++){
                        aa += values[i][j].temperature;
                        aaa += values[i][j].phototransistor;
                        aa1++;
                        a1++;
                }
                this.myChart.data.datasets[1].data[i] = aa / (a1 === 0 ? 1 : a1);
                this.myChart.data.datasets[0].data[i] = (aaa / (aa1 === 0 ? 1 : aa1))*100;
            }
            this.myChart.update();
        })
    }

    render() {
        return <Card style={{marginLeft: 100, marginRight: 100, marginTop: 20}}>
            <CardHeader
                title={
                    <Typography variant="h5" component="h1" style={{marginLeft: 200}}>
                        Week: Temperature vs Light
                    </Typography>
                }
                action={
                    <form noValidate>
                        <TextField
                            onChange={event => this.handleChange(event.target.value)}
                            selected={this.state.inputValue}
                            id="date"
                            label="Date"
                            type="date"
                            style={{marginRight: 40}}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </form>
                }
            />
            <canvas
                style={{width: 500, height: 200}}
                ref={node => (this.node = node)}
            />
        </Card>
    }

}

export default (LineGraphCard);
