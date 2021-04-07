import React ,{Component} from 'react';
import './App.css'
import TodoItems from './components/TodoItems/TodoItems';
import AddItem from './components/AddItem/AddItem';


class App extends Component {

  state = {
    items : [
      {id:1, name: 'Mohamed', age:25 },
      {id:2, name: 'Ahmed', age:28 },
      {id:3, name: 'Farouk', age:33 }
    ]
  }

  deleteItem =(id)=> {
    let items = this.state.items;
    let i = items.findIndex(item => item.id === id)
    items.splice(i,1)
    this.setState({items})
  }

  addItem =(item)=> {
    item.id= Math.random();
    let items = this.state.items;
    items.push(item)
    this.setState({items})
  }
  render () {
    return(
      <div className="App container">
        <h2 className="text-center">ToDo List App</h2>
          <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
          <AddItem addItem={this.addItem}/>
      </div>
    )
  }
}

export default App;