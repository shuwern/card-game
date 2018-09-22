/*import React, { Component } from 'react';
export default class CharacterCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            active: false,
        }
    }

    componentDidupdate(prevProps){
        if(prevProps.attempt != this.props.attempt){
            this.setState({active: false})
        }
        console.log(this.props.attempt)
    }

    activate = () => {
        if(!this.state.active){
            this.props.activationHandler(this.props.value)
            this.setState({active: true})
        }
        console.log(this.props.attempt);
    }

    render(){
        let className = `card ${this.state.active ? 'activeCard': ''}`
        return (
            <div className={className} onClick={this.activate}>
                {this.props.value}
            </div>
        )
    }
}
*/
import React, { Component } from 'react';

export default class CharacterCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            active : false
        }
    }

    activate = () => {
        if(!this.state.active){
            this.props.activationHandler(this.props.value)
            this.setState({active: true})
            
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.attempt !== this.props.attempt){
          this.setState({active:false})
        }
    }

    render(){   
        let className =`card ${this.state.active ? 'activeCard' : ''}`
        return(
            <div className={className} onClick={this.activate}>
                {this.props.value}
            </div>
        )
    }
}