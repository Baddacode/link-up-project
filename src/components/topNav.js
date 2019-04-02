import React, {Component} from 'react'
import bgImg from '../materials/bg-img.png'

export class TopNav extends Component {
  render() {
    return (
      <div className="topnav">
        <img className="bgImg" src={bgImg} alt="background" width="100%"/>
        <div className="searchForm">
          <h1>Quick Search for Your <span className="greenText"> Perfect Product</span></h1>
          <h3>Innovate . List . Connect</h3>
          <div className="searchBar">
            <select>
              <option>Category</option>
              <option>Date</option>
              <option>Author</option>
            </select>
            <input type="text" />
            <button type="submit">START SEARCHING</button>
          </div>
        </div>

        <div className="twoBtns">
            <div className="btnOne"><span className="img1"/>All categories</div>
            <div className="btnTwo"><span className="img2"/>How it works?</div>
        </div>
      </div>
    )
  }
}

export default TopNav;
