import React, { Component } from 'react';
import { Header } from './Header';
import { Signup } from './Signup';

class App extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Signup/>
            </div>
        );
    }
}
export default App;