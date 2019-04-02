import React, {Component} from 'react'

export class MainContainer extends Component {
  render() {
    return (
      <div>
      <div className="main">
        <p className="bigText">Most Popular Products</p>
        <p className="smallText">This is the list of products that are most interested in users</p>
      </div>
      <div className="imagesCont">
        <div className="imgCont">
          <img src="/images/work1.jpg" width="600" height="400"/>
          <div className="desc">Hubstaff Directory</div>
        </div>
        <div className="imgCont">
          <img src="/images/work2.jpg" width="600" height="400"/>
          <div className="desc">Jira 2017</div>
        </div>
        <div className="imgCont">
          <img src="/images/work3.jpg" width="600" height="400"/>
          <div className="desc">Slack Pro</div>
        </div>
        <div className="imgCont">
          <img src="/images/work4.jpg" width="600" height="400"/>
          <div className="desc">TraveChat</div>
        </div>
        <div className="imgCont">
          <img src="/images/work5.jpg" width="600" height="400"/>
          <div className="desc">Network</div>
        </div>
        <div className="imgCont">
          <img src="/images/work6.jpg" width="600" height="400"/>
          <div className="desc">Time Camp</div>
        </div>
        <div className="clear">
        <div className="allProdLink">
        <a className="allProd" href="#All Products">All Products</a>
        </div>
        </div>
    </div>
    </div>
    )
  }
}

export default MainContainer;
