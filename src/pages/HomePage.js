import {connect} from 'react-redux';

import JoinGame from '../components/JoinGame';
import HostGame from '../components/HostGame';
import Connect from '../components/Connect';
import {setOnline} from '../redux/';

function HomePage(props) {
    return (
        <div className="text-center">
            {props.isOnline ? 
            <div>
                <p>Hello <strong>{props.username}</strong></p>
                <br/>
                <JoinGame/>
                <HostGame/>
            </div>
            :
            <div>
                <Connect/>
            </div>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isOnline: state.online.isOnline,
        username: state.online.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setOnline: val => dispatch(setOnline(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);