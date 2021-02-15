import X from '../imgs/X.png';
import O from '../imgs/O.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

let updateInterval;

function Board(props) {
    const [mainState, setMainState] = useState({});
    const [yourTurn, setYourTurn] = useState(false);
    const [serverFull, setServerFull] = useState(false);
    const [win, setWin] = useState(false);
    const [currentTurn, setCurrentTurn] = useState(props.username);

    const history = useHistory();
    const spotClicked = spot => {
        if(yourTurn) {
            axios.post('https://tictactoemultiplayerserver.herokuapp.com/play', {spot, server: props.server, username: props.username})
            .then(response => response.data)
            .then(json => {
                if(json.bool) {
                    setMainState(json.game.state);
                    console.log(mainState);
                }
            })
            .catch(() => alert('Some error occured!'));
        }
    }

    useEffect(() => {
        if(updateInterval) {
            clearInterval(updateInterval);
            updateInterval = undefined;
        }
        updateInterval = setInterval(() => {
            axios.get(`https://tictactoemultiplayerserver.herokuapp.com/update/${props.server}`)
            .then(response => response.data)
            .then(json => {
                setYourTurn(json.game.turn == props.username ? true : false);
                setServerFull(json.game.full);
                setCurrentTurn(json.game.turn);
                setMainState(json.game.state);
                console.log(json.win);
                if(json.win) {
                    clearInterval(updateInterval);
                    updateInterval = undefined;
                    setWin(json.win);
                }
            })
            .catch(() => {
                clearInterval(updateInterval);
                updateInterval = undefined;
                history.push('/');
                alert('Some error occured!');
            });
        }, 1000);
    });
    return (
        <div className="text-center">
            {serverFull ? <p>Game on!</p> : <p>{`Waiting for the other player... (server: ${props.username})`}</p>}
            <table className="w-100 text-center container">
                <tr>
                    <td className="_br _bb" onClick={() => spotClicked('s1')} style={{backgroundImage: `url(${mainState.s1 == 'X' ? X : mainState.s1 == 'O' ? O : ''})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></td>
                    <td className="_bx _bb" onClick={() => spotClicked('s2')} style={{backgroundImage: `url(${mainState.s2 == 'X' ? X : mainState.s2 == 'O' ? O : ''})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></td>
                    <td className="_bl _bb" onClick={() => spotClicked('s3')} style={{backgroundImage: `url(${mainState.s3 == 'X' ? X : mainState.s3 == 'O' ? O : ''})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></td>
                </tr>
                <tr>
                    <td className="_br _by" onClick={() => spotClicked('s4')} style={{backgroundImage: `url(${mainState.s4 == 'X' ? X : mainState.s4 == 'O' ? O : ''})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></td>
                    <td className="_bf" onClick={() => spotClicked('s5')} style={{backgroundImage: `url(${mainState.s5 == 'X' ? X : mainState.s5 == 'O' ? O : ''})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></td>
                    <td className="_bl _by" onClick={() => spotClicked('s6')} style={{backgroundImage: `url(${mainState.s6 == 'X' ? X : mainState.s6 == 'O' ? O : ''})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></td>
                </tr>
                <tr>
                    <td className="_bt _br" onClick={() => spotClicked('s7')} style={{backgroundImage: `url(${mainState.s7 == 'X' ? X : mainState.s7 == 'O' ? O : ''})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></td>
                    <td className="_bx _bt" onClick={() => spotClicked('s8')} style={{backgroundImage: `url(${mainState.s8 == 'X' ? X : mainState.s8 == 'O' ? O : ''})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></td>
                    <td className="_bl _bt" onClick={() => spotClicked('s9')} style={{backgroundImage: `url(${mainState.s9 == 'X' ? X : mainState.s9 == 'O' ? O : ''})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></td>
                </tr>
            </table>
            {win ? <div><p className="font-weight-bold">{`${win} wins!`}</p><Link className="btn btn-primary" to="/">Go back</Link></div> : serverFull ? <p className={`${currentTurn == props.username ? 'font-weight-bold' : ''}`}>{`Turn: ${currentTurn == props.username ? 'Yours' : 'Other player'}`}</p> : ''}
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

export default connect(mapStateToProps, mapDispatchToProps)(Board);