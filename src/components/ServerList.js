import axios from "axios";
import { useEffect, useState } from "react";
import {connect} from 'react-redux';
import { useHistory } from "react-router-dom";
import {setServer} from '../redux/';

function ServerList(props) {
    const [serverList, setServerList] = useState();
    const history = useHistory();
    const joinServer = host => {
        axios.post(`https://tictactoemultiplayerserver.herokuapp.com/join/${host}`, {username: props.username})
            .then(response => response.data)
            .then(json => {
                if(json.bool) {
                    props.setServer(json.server);
                    history.push('/game');
                } else {
                    alert(json.msg);
                }
            })
            .catch(() => alert('Some error occured!'));
    }
    const generateServerList = () => {
        axios.get('https://tictactoemultiplayerserver.herokuapp.com/serverlist')
        .then(response => response.data)
        .then(json => setServerList(json.list.map(val => <li className="btn btn-info rounded-0 d-block" onClick={() => joinServer(val.host)}>{`host: ${val.host}, slots: ${val.full ? '2/2' : '1/2'}`}</li>)))
        .catch(() => alert('Some error occured!'));
    }
    useEffect(generateServerList, []);
    return (
        <div>
            
            <button className="btn btn-primary" onClick={generateServerList}>Refresh</button>
            <p>Server list:</p>
            <ul className="p-0">
                {serverList}
            </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(ServerList);