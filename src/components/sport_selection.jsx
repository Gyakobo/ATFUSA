import React, { Component } from 'react';
//import axios from 'axios';

class SportSelection extends Component {
    state = {
        url: "https://www.atfusa.org/webappTracking/JNC/FldEventMenu.json",
    } 


    fetch_data() {
        let api = "https://www.atfusa.org/";
        //let url = "webappTracking/JNC/FldEventMenu.json";
        let url = "webappTracking/MainMenu.json";

        const reqBody = {
            "username": "Andrew",
            "password": "123456"
        }

        fetch(url, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "post",
            body: JSON.stringify(reqBody),
        }).then((response) => { 
            return response.json() 
        }).then((data) => console.log(data));
    };


    render() { 
        return (
            <button onClick={this.fetch_data} className='btn btn-secondary btn-sm m-2'>Click</button>
        );
    }
}
 
export default SportSelection;