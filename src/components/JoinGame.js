import axios from 'axios';
import { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {setServer} from '../redux/';

function JoinGame(props) {
    const [inputHostname, setInputHostname] = useState();
    const history = useHistory();

    const joinGame = () => {
        axios.post(`https://tictactoemultiplayerserver.herokuapp.com/join/${inputHostname}`, {username: props.username})
        .then(response => response.data)
        .then(json => {
            if(json.bool) {
                props.setServer(json.server);
                alert(json.msg);
                history.push('/game');
            } else {
                alert(json.msg);
            }
        })
        .catch(() => alert('Some error occured!'));
    }
    return (
        <div className="d-inline text-center">
            <input placeholder="Enter host name" className="text-center" onChange={e => setInputHostname(e.target.value)}/>
            <button className="btn btn-danger rounded-0" onClick={joinGame}>Join Game</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        username: state.online.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setServer: val => dispatch(setServer(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinGame);