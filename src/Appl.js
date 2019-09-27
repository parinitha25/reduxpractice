import React, { Component } from 'react';
import './App.css';
import { connect} from 'react-redux';
debugger

class Appl extends Component{
    debugger
    render(){  
        debugger
        return(
            <div className="App">
                <div>Age: <span>{this.props.age}</span></div>
                <button onClick={this.props.onAgeUp}> Age Up</button>
                <button onClick={this.props.onAgeDown}>Age Down</button>
            </div>
        )
    }
 
}

debugger
const mapStateToProps=(state)=>{
    debugger
    return{
        age:state.age
    }
}
const mapDispatchToProps=(dispacth)=>{
    debugger
    return{
        onAgeUp:()=>{
            debugger
            return dispacth({type:'AGE_UP'})
        },
        onAgeDown:()=>{
            debugger
            dispacth({type:'AGE_DOWN'})
        }
    }
    
}
export default connect(mapStateToProps,mapDispatchToProps)(Appl);