import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Card} from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";


let Chart = require("chart.js");
let borderColors = [];
let backgoundColors = [];

class BarGraphCard extends Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const node = this.node;
        for(let i = 0; i < 8; i++){
            borderColors[i] = this.props.cardData.borderColor;
            backgoundColors[i] = this.props.cardData.backgroundColor;
        }
        let myChart = new Chart(node, {
            type: "bar",
            data: {
                labels: ["0:00","3:00","6:00","9:00","12:00","15:00","18:00","21:00"],
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
    }

    render() {
        return <Card style={{marginLeft: 100, marginRight: 50, marginTop: 20, width: 900}}>
            <CardHeader
            title={
                <Typography  variant="h5" component="h1" style={{ marginLeft: 200}}>
                    {this.props.cardData.title}
                </Typography>
            }
            action={
                <form noValidate>
                    <TextField
                        id="date"
                        label="Date"
                        type="date"
                        style={{marginRight: 40}}
                        defaultValue="2017-05-24"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
            }
            />
            <canvas
                style={{ width: 250, height: 100}}
                ref={node => (this.node = node)}
            />
        </Card>
    }

}

export default (BarGraphCard);
