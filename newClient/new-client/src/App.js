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
                        <BarGraphCard/>
                    </GridListTile>
                    <GridListTile>
                        <BarGraphCard/>
                    </GridListTile>
                </GridList>
                <LineGraphCard/>
            </div>
        );
    }
}

export default App;
