import React, { Component } from 'react';

import './App.css';

export default class App extends Component{
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[]
    }
  }

  updateInput(key,value){
   this.setState({
     [key]:value
   })
  }
  addItem(){
    const newItem={
      id: 1+Math.random(),
      value:this.state.newItem.slice()
    };
    const list=[...this.state.list];
    list.push(newItem);
    this.setState({
      list,
      newItem:""
    })
  }
   render(){
     return(
     <div>
       <h5>Todolist</h5>
       <br/>
       
       <input type="text"
       placeholder="Enter Item"
       value={this.state.newItem} 
       onChange={e=>this.updateInput("newItem",e.target.value)}></input>
       <button 
       onClick={()=>this.addItem()}>Add</button>
       <br/>
       <ul>
         {this.state.list.map(item=>{
           return(
             <li key={item.id}>
               {item.value}
             </li>
           )
         })}
       </ul>
     </div>
     );
   }
 }