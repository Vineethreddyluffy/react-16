import {Component} from 'react'

import GetTodo from './index2'

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

class SimpleTodos extends Component {
  state = {List: initialTodosList}

  onDelete = props => {
    const {List} = this.state
    const newArr = List.filter(each => each.id !== props)
    this.setState({List: newArr})
  }

  render() {
    const {List} = this.state
    return (
      <div className="cont">
        <div className="inner-cont">
          <h1 className="heading">Simple Todos</h1>
          <ul className="card-cont">
            {List.map(each => (
              <GetTodo item={each} key={each.id} onDelete={this.onDelete} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
