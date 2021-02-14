import axios from 'axios';
import { useState } from 'react';
import {connect} from 'react-redux';

import {setOnline} from '../redux/';

function Connect(props) {
    const [loading, setLoading] = useState(false);

    const connectToServer = () => {
        // axios.get()
        // if fail:
        // alert('Connection failed!');
        // if successful:
        props.setOnline(true);
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
                <button className="btn btn-danger" onClick={connectToServer}>Connect to server</button>
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
        setOnline: val => dispatch(setOnline(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Connect);