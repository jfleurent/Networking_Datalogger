import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Card} from "@material-ui/core";
let Chart = require("chart.js");

class BarGraphCard extends Component{

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const node = this.node;

        let myChart = new Chart(node, {
            type: "line",
            data: {
                labels: ["2017-05-24","2017-05-25","2017-05-26","2017-05-27","2017-05-28","2017-05-29","2017-05-30","2017-05-31"],
                datasets: [
                    {
                        label: "Light",
                        data: [5, 2, 1, 1, 1, 5, 7, 3],
                        backgroundColor: [
                            "rgba(0,0,0,0)",
                        ],
                        borderColor: [
                            "rgba(255, 99, 132, 0.2)",
                        ]
                    },
                    {
                        label: "Temperature",
                        data: [1, 9, 9, 4, 11, 15, 10, 8],
                        backgroundColor: [
                            "rgba(0,0,0,0)"
                        ],
                        borderColor: [
                            "rgba(54, 162, 235, 0.2)"
                        ]
                    }
                ]
            }
        });
    }

    render() {
        return <Card style={{marginLeft: 100, marginRight: 100, marginTop: 20}}>
            <form noValidate>
                <TextField
                    id="date"
                    label="Date"
                    type="date"
                    style={{marginLeft: 800}}
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
            <canvas
                style={{ width: 500, height: 200}}
                ref={node => (this.node = node)}
            />
        </Card>
    }

}

export default (BarGraphCard);
