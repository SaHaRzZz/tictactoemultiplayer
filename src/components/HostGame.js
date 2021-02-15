import axios from 'axios';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {setServer} from '../redux/';

function HostGame(props) {
    const history = useHistory();
    const hostGame = () => {
        axios.get(`https://tictactoemultiplayerserver.herokuapp.com/host/${props.username}`)
        .then(response => response.data)
        .then(json => {
            if(json.bool) {
                props.setServer(json.server);
                alert(json.msg);
                history.push('/game');
            }
        })
        .catch(() => alert('Some error occured!'));
    }
    return (
        <div className="d-inline text-center">
            <button className="btn btn-danger rounded-0" onClick={hostGame}>Host Game</button>
            <p></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HostGame);