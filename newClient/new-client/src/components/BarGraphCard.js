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
        let hourLabels = [];
        let m = moment();
        for (let i = 0; i < 24; i++) {
            hourLabels[i] = m.hour(i).minute(0).format("hh:mm A")
        }
        const node = this.node;
        for (let i = 0; i < 8; i++) {
            borderColors[i] = this.props.cardData.c;
            backgoundColors[i] = this.props.cardData.backgroundColor;
        }
        this.myChart = new Chart(node, {
            type: "bar",
            data: {
                labels: hourLabels,
                datasets: [
                    {
                        label: this.props.cardData.title,
                        data: [],
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
            a[i] = fetch('http://54.165.32.160/date/' + b.format('YYYY-MM-DD'), {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                }
            }).then(value => value.json());
        }
        Promise.all(a).then(values => {
            console.log(values);
            this.myChart.data.datasets[0].data = [];
            for (let i = 0, j = 0, k = 0; i < 24; i++) {
                let count = 0;
                let sum = 0;
                if(values[0][j] !== undefined){
                    while (moment(values[0][j].isoDate).hour() === i) {
                        sum += this.props.cardData.title === 'Light (lm)' ? values[0][j].phototransistor : values[0][j].temperature;
                        count++;
                        j++;
                        if (values[0][j] === undefined){
                            break;
                        }
                    }
                }
                this.myChart.data.datasets[0].data[k++] = sum / (count === 0 ? 1 : count);
                this.myChart.data.datasets[0].borderColor[k] = this.props.cardData.borderColor;
                this.myChart.data.datasets[0].backgroundColor[k] = this.props.cardData.backgroundColor;
                count = 0;
                sum = 0;
            }
            this.myChart.update();
        })
    }

    render() {
        return <Card style={{marginLeft: 100, marginRight: 50, marginTop: 20, width: '75%', height: '500px'}}>
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
                style={{width: '100%', height: '70%'}}
                ref={node => (this.node = node)}
            />
        </Card>
    }

}

export default (BarGraphCard);
