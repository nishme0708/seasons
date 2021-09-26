import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    latitude = 'default';
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            error: ''
        };
        window.navigator.geolocation.getCurrentPosition(
            (pos) => {
                console.log(pos);
                this.setState({ lat: pos.coords.latitude });
            },
            (err) => {
                console.log(err);
                this.setState({ error: err.message });
            }
        );
    }
    render() {
        return (
            <div>
                Latitude: {this.state.lat}
                <br />
                Error: {this.state.error}
            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector('#root'));
