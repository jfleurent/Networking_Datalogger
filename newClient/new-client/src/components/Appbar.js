import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LogoImg from '../assets/fgcu_logo.png';

const styles = {
    root: {
        flexGrow: 1,
    },
};

class Appbar extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="Appbar">
                <AppBar position="static" color="#fffffff">
                    <Toolbar>
                        <img src={LogoImg} style={{height: 50}}/>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Appbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Appbar)
