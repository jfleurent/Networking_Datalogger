import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import Appbar from './components/Appbar'
import BarGraphCard from './components/BarGraphCard'
import LineGraphCard from './components/LineGraphCard'
import {GridList, GridListTile} from "@material-ui/core";



class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Appbar/>
                <GridList cols={2.1} cellHeight={500}>
                    <GridListTile>
                        <BarGraphCard
                            cardData = {{
                                title: 'Light',
                                borderColor: 'rgba(0, 23, 135, 0.3)',
                                backgroundColor: 'rgba(0,31,189,0.1)',
                                graphData: [10, 4, 5, 4, 8, 5, 7, 3, 0]
                            }}
                        />
                    </GridListTile>
                    <GridListTile>
                        <BarGraphCard
                            cardData = {{title: 'Temperature',
                                borderColor: 'rgba(0, 168, 76, 0.3)',
                                backgroundColor: 'rgba(0,201,91,0.1)',
                                graphData: [4, 6, 1, 5, 12, 2, 1, 4, 0]
                            }}
                        />
                    </GridListTile>
                </GridList>
                <LineGraphCard/>
            </div>
        );
    }
}

export default App;
