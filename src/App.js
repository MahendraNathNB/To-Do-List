import React from 'react';

import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state ={
      newItem: '',
      list: []
    }
  }
    updateInput= (e)=> {
      //update react state
      // this.setState({
      //   [key]:value
      // })
      this.setState({
        [e.target.name] : e.target.value
      })
    }

    deleteItem(id){
      //copy current of items 
      const list = [...this.state.list]
      
      // filter out item being deleted
      const updatedList =list.filter(item=> item.id !== id)
      this.setState({list: updatedList})
    }

    addItem() {
      // create Items with unique Id
      const newItem={
        id: 1 + Math.random(),
        value: this.state.newItem.slice()
      }
      //copy of current list Items
      const list =[...this.state.list]
      list.push(newItem)
      this.setState({
        list,
        newItem:''
      }) 
    }
  
  render(){
    return(
      <div className="App">
        <div>
        <h2> Todo-List </h2>
            <br/>
            <input 
              type="text"
              placeholder="Type here..."
              value={this.state.newItem}
              id="newItem"
              name="newItem"
              //onChange={e => this.updateInput("newItem",e.target.value)}
              onChange={this.updateInput}
            />
            <button 
              onClick={() => this.addItem()}
            > 
              Add Now
              </button>
              <br/>
              <ul>
                  {this.state.list.map(item =>{
                    return (
                      <li key={item.id}>
                          {item.value}
                          <button 
                          onClick={()=> this.deleteItem(item.id)}
                          > 
                          X
                          </button>
                      </li>
                    )
                  })}
              </ul>
        </div>
      </div>
    )
      
  }
}

export default App;
