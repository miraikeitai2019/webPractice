import React, { Component } from 'react';
import NavBar from './NavBar';
import TextField from './TextField';
import AddButton from './AddButton';
import List from './List';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      defaultValue:"",
      name:"",
    }
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }

  handleChange = (e, name) => {
      this.setState({
        [name]: e.target.value,
      });
    };

    //clickAddButton(){
    //  this.setState({

    //  })
    //}

    render() {
       return (
         <div className="App">
         <div>
         <NavBar
           onToggle={() => this.handleToggle()}
           open={this.state.open}
         />
         <div className="TextField">
         <TextField handleChange = {(e)=>{this.handleChange(e,e.target.name)}}
           defaultValue={this.state.defaultValue}
           name={this.state.name}
         />
         </div>
         <div className="AddButton">
         <AddButton
         />
         </div>
         <List
            description="todoの内容"
          />
        </div>
       </div>
       );
     }
   }

   export default App;
