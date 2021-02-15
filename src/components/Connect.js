import axios from 'axios';
import { useState } from 'react';
import {connect} from 'react-redux';

import {setOnline, setUsername} from '../redux/';

function Connect(props) {
    const [loading, setLoading] = useState(false);
    const [inputUsername, setInputUsername] = useState();

    const connectToServer = () => {
        axios.get(`https://tictactoemultiplayerserver.herokuapp.com/connect/${inputUsername}`)
        .then(response => response.data)
        .then(json => {
            if(json.bool) {
                props.setUsername(json.username);
                props.setOnline(true);
            } else {
                alert('User already connected!')
            }
        })
        .catch(() => alert('Some error occured!'));
        setLoading(false);
    }
    return (
        <div>
            {loading ? 
            <div>
                <p>Loading...</p>
            </div>
            :
            <div>
                <input placeholder="Enter username" className="text-center" onChange={e => setInputUsername(e.target.value)}/>
                <br/>
                <button className="btn btn-danger" onClick={() => inputUsername ? connectToServer() : alert('Enter a username!')}>Connect to server</button>
            </div>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isOnline: state.online.isOnline
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setOnline: val => dispatch(setOnline(val)),
        setUsername: val => dispatch(setUsername(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Connect);