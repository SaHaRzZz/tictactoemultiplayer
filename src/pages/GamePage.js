import './css/GamePage.css';
import axios from 'axios';
import {connect} from 'react-redux';

import Board from '../components/Board';
import { useState } from 'react';

function GamePage(props) {
    return (
        <div>
            <Board/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        server: state.online.server,
        username: state.online.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);