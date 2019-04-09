import React, { Component } from 'react';

class ColorText extends Component {

    constructor(props){
        super(props);

        this.state = {
            data: null,
            isBlack: false,
            textColor: '#888',
        };
    }
    
    componentDidMount(){
        const URL = 'http://www.colr.org/json/colors/random/';
        const numOfColors = 2;

              
        
        fetch(URL + numOfColors, {
            method: 'GET'
        })
        .then( response => response.json() )
        .then( json => this.setState({data: json.colors}, 
            function() {
                console.log(this.state.data);

            }));

        
    }

    changeColor(){
        if(this.state.isBlack){
            this.setState({textColor : '#' + this.state.data[Math.floor(Math.random() * 2)].hex});
        }
        else{
            this.setState({textColor : '#000'});
        }
        this.setState({
            isBlack : !this.state.isBlack
        })
    }

    render(){
        return(
            <div
            style={{
                color : this.state.textColor
            }}
            onClick = {this.changeColor.bind(this)}
            >Click me to change my color.</div>
        )
    }
}

export default ColorText;