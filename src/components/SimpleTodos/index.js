import {Component} from 'react'
import './index.css'

import TodoItem from '../TodoItem/index'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {
    TodoList: initialTodosList,
  }

  DeleteItem = id => {
    const {TodoList} = this.state
    const AfterDetails = TodoList.filter(eachObject => eachObject.id !== id)
    this.setState({TodoList: AfterDetails})
  }

  render() {
    const {TodoList} = this.state
    return (
      <div className="mainContainer">
        <div className="TodoContainer">
          <h1>Simple Todos</h1>
          <ul>
            {TodoList.map(eachObject => (
              <TodoItem
                key={eachObject.id}
                tododetails={eachObject}
                DeleteItem={this.DeleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
