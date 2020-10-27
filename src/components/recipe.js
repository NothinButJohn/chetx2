import React, { Component } from 'react';




class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            ingredients: []
        }
    }


    render(){
        return(
            <div>
                <h2>{this.state.name}</h2>
                <ul>
                    <li>{this.state.ingredients}</li>
                </ul>
            </div>
        )
    }
}

export default Recipe;