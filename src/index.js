import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    latitude = 'default';
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            error: ''
        };
    }
    componentDidMount() {
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
        if (this.state.error) {
            return <div>Error: {this.state.error}</div>;
        }
        if (this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }
        return <Spinner />;
    }
}
ReactDOM.render(<App />, document.querySelector('#root'));
