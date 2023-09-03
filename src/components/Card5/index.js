import {Component} from 'react'
import './index.css'

class Card5 extends Component {
  state = {star: 0, room: 0}

  updateStar = () => {
    this.setState(prevState => ({star: prevState.star + 1}))
  }

  decreaseCount = () => {
    this.setState(prevState => ({star: prevState.star - 1}))
  }

  updateRoom = () => {
    this.setState(prevState => ({room: prevState.room + 1}))
  }

  decreaseRoom = () => {
    this.setState(prevState => ({room: prevState.room - 1}))
  }

  render() {
    const {star, room} = this.state
    return (
      <div className="card5_container">
        <img
          src="https://res.cloudinary.com/ruba/image/upload/v1693637828/Group_167_zwtayh.png"
          alt="pic"
          className="card5_pic"
        />
        <form className="form-container">
          <h1 className="form-heading">Book Now</h1>
          <p className="form-desc">
            Lorem ipsum dolor sit ameur consecture.Sit mattics <br /> donate mi
            bibendem integer rutrum nisi.A nec nisi vitae
          </p>
          <div className="city-container">
            <label className="labels" htmlFor="city">
              CITY
            </label>
            <input
              type="text"
              placeholder="City"
              id="city"
              className="inputEl"
            />
          </div>
          <div className="arrival_depature_container">
            <div className="city-container">
              <label className="labels" htmlFor="arrival">
                ARRIVAL
              </label>
              <input
                type="date"
                placeholder="Arrival"
                id="arrival"
                className="inputEl"
              />
            </div>
            <div className="city-container">
              <label className="labels" htmlFor="depature">
                DEPATURE
              </label>
              <input
                type="date"
                placeholder="Depature"
                id="depature"
                className="inputEl"
              />
            </div>
          </div>
          <div className="arrival_depature_container">
            <div className="city-container">
              <label className="labels" htmlFor="arrival">
                STAR
              </label>
              <div className="count_container">
                <button type="button" className="btn" onClick={this.updateStar}>
                  +
                </button>
                <div className="count_no">
                  <p className="star_count">{star}</p>
                </div>
                <button
                  type="button"
                  className="btn"
                  onClick={this.decreaseCount}
                >
                  -
                </button>
              </div>
            </div>
            <div className="city-container">
              <label className="labels" htmlFor="depature">
                ROOM
              </label>
              <div className="count_container">
                <button type="button" className="btn" onClick={this.updateRoom}>
                  +
                </button>
                <div className="count_no">
                  <p className="star_count">{room}</p>
                </div>
                <button
                  type="button"
                  className="btn"
                  onClick={this.decreaseRoom}
                >
                  -
                </button>
              </div>
            </div>
          </div>
          <button type="submit" className="book_now_btn">
            BOOK NOW
          </button>
        </form>
      </div>
    )
  }
}

export default Card5
