import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { title1: 'Bienvenido', title2: 'Weather App' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        this.setState({ title1: this.state.title2, title2: this.state.title1 })
    }
    render() {
        return (
            <div>
                <header>
                    <label>Home</label>
                </header>
                <h1>{this.state.title1}</h1>
                <h1>{this.state.title2}</h1>
                <Button color="primary" type="submit" onClick={this.handleSubmit}>
                    Default
                </Button>
                <div>
                    <li><Link to="/weather/May/15">Weather for May 15</Link></li>
                    <li><Link to="/weather/May/16">Weather for May 16</Link></li>
                    <li><Link to="/weather/May/17">Weather for May 17</Link></li>
                    <li><Link to="/weather/May/18">Weather for May 18</Link></li>
                </div>
            </div>
        )
    }
}

export default Home;
