import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import Appbar from './components/Appbar'
import BarGraphCard from './components/BarGraphCard'


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Appbar/>
                <BarGraphCard/>
            </div>
        );
    }
}

export default App;
