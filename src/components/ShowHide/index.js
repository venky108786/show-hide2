// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {show: true, shows: true}

  ShowHideContainer = () => {
    this.setState(prevState => ({show: !prevState.show}))
  }

  ShowHideContainerLast = () => {
    this.setState(prevState => ({shows: !prevState.shows}))
  }

  render() {
    const {show} = this.state
    const nameContainer = show ? 'name-container' : ''
    const text = show ? 'Joe' : ''

    const {shows} = this.state
    const nameContainerL = shows ? 'name-container' : ''
    const textL = shows ? 'Jonas' : ''

    return (
      <div className="bg">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <div>
            <button
              type="button"
              className="button-custom"
              onClick={this.ShowHideContainer}
            >
              Show/Hide FirstName
            </button>
            <p className={nameContainer}>{text}</p>
          </div>
          <div>
            <button
              type="button"
              className="button-custom"
              onClick={this.ShowHideContainerLast}
            >
              Show/Hide LastName
            </button>

            <p className={nameContainerL}>{textL}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
