//import libs
import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id
        }
    }
    componentWillMount(){
        //axios call with id that is passed through via url
    }
    render(){
        return(
            <div>
                <h1>Edit</h1>
                <p>Welcome to edit</p>
                <p>id: {this.state.id} </p>
            </div>
        );
    }
}

export default Home
