import React, { Component } from 'react';

class SportSelection extends Component {
    state = {
        url: "https://www.atfusa.org/webappTracking/MainMenu.json",
        tags: [],
    } 

    fetch_data() {
        //const { url } = this.state;
        fetch('https://www.atfusa.org/webappTracking/MainMenu.json')
            .then(response => response.json())
            .then(json => console.log(json))
    };

    render() { 
        return (
            <button onClick={this.fetch_data} className='btn btn-secondary btn-sm m-2'>Click</button>
        );
    }
}
 
export default SportSelection;