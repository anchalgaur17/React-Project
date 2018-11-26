import React, { Component } from 'react';
class App extends Component{
   render(){
       var myStyle = {
           color:'blue',
           fontSize:20,
           textAlign:'center'
       }
      return(
         <div>
            <h1 style = {myStyle}>Welcome to React Project</h1>
         </div>
      );
   }
}
export default App;