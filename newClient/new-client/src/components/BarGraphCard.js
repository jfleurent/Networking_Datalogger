import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Card} from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
let Chart = require("chart.js");

class BarGraphCard extends Component{

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const node = this.node;

        let myChart = new Chart(node, {
            type: "bar",
            data: {
                labels: ["0:00","3:00","6:00","9:00","12:00","15:00","18:00","21:00"],
                datasets: [
                    {
                        label: "Light",
                        data: [10, 4, 5, 4, 8, 5, 7, 3, 0],
                        backgroundColor: [
                            "rgba(0,31,189,0.1)",
                            "rgba(0,31,189,0.1)",
                            "rgba(0,31,189,0.1)",
                            "rgba(0,31,189,0.1)",
                            "rgba(0,31,189,0.1)",
                            "rgba(0,31,189,0.1)",
                            "rgba(0,31,189,0.1)",
                            "rgba(0,31,189,0.1)",
                        ],
                        borderColor: [
                            "rgba(0, 23, 135, 0.3)",
                            "rgba(0, 23, 135, 0.3)",
                            "rgba(0, 23, 135, 0.3)",
                            "rgba(0, 23, 135, 0.3)",
                            "rgba(0, 23, 135, 0.3)",
                            "rgba(0, 23, 135, 0.3)",
                            "rgba(0, 23, 135, 0.3)",
                            "rgba(0, 23, 135, 0.3)",
                        ],
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
                Light
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
