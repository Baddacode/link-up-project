import React, { Component } from 'react';
import logo2 from './materials/find-parrot-logo.png'
import bgImg from './materials/bg-img.png'
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {Carousel} from '3d-react-carousal';

class App extends Component {
  constructor () {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      email: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let slides = [
    <div className="review"><div className="anotherDiv">
      <img src="/images/dude1.jpg" />
      <p className="reviewText">I have been incredibly impressed with LinkUp team of developers. They worked hard to deliver the highest-quality product possible and exceeded my expectations at every step of the way. I initially found Andriy in search of a better price than what I could find locally with other development firms. But what I found - in addition to a better price - was a much higher-quality product as well, in every way: service, design, development, communications...etc. 5+++ Stars work. Great job.</p>
    </div>
    <div className="reviewBottomText">
    <div className="reviewNames">John Kamman</div>
    <div className="reviewRole">Wholesum Founder</div>
    </div>
    </div>,

    <div className="review"><div className="anotherDiv">
      <img src="/images/dude2.jpg" />
      <p className="reviewText">Loved working with LinkUp. Great guys, developers, and management. They knew how to do the job, in the most professional way.</p>
    </div>
    <div className="reviewBottomText">
    <div className="reviewNames">Adam Frank</div>
    <div className="reviewRole">CTO Scale About</div>
    </div>
    </div>,

    <div className="review"><div className="anotherDiv">
      <img src="/images/dude3.jpg" />
      <p className="reviewText">Nice company willing to work and get educated at he same time. Ready to face any challenges and very friendly with customers. They quote very humbly and every invoice can be discussed well in advance. We made a custom design web shop with them and keep on cooperating on development and maintenance. Highly recommended.</p>
    </div>
    <div className="reviewBottomText">
    <div className="reviewNames">Oleh Zavadsky</div>
    <div className="reviewRole">CEO Ljus Sp. z o.o.</div>
    </div>
    </div>
  ];
  {/*  let slides = [
        <div className="review">
        <div className="anotherDiv">
          <img src="/images/dude1.jpg" />
          <p className="reviewText">I have been incredibly impressed with LinkUp team of developers. They worked hard to deliver the highest-quality product possible and exceeded my expectations at every step of the way. I initially found Andriy in search of a better price than what I could find locally with other development firms. But what I found - in addition to a better price - was a much higher-quality product as well, in every way: service, design, development, communications...etc. 5+++ Stars work. Great job.</p>
        </div>,
        <div className="review">
          <img src="/images/dude2.jpg" />
          <p className="reviewText">Loved working with LinkUp. Great guys, developers, and management. They knew how to do the job, in the most professional way.</p>
        </div>
        <div className="review">
          <img src="/images/dude3.jpg" />
          <p className="reviewText">Nice company willing to work and get educated at he same time. Ready to face any challenges and very friendly with customers. They quote very humbly and every invoice can be discussed well in advance. We made a custom design web shop with them and keep on cooperating on development and maintenance. Highly recommended.</p>
        </div>
        </div>
    ];*/}


    return (
      <div className="App">

        <div className="navbar">
          <img className="logo" src={logo2} alt="" />
          <a href="#signup">Sign Up</a>
          <a href="#contact">Login</a>
          <a href="#news">About Us</a>
          <a href="#home">All products</a>
        </div>

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

        <div className="main2">
          <p className="bigText2" id="2">Testimonials</p>
          <p className="smallText2">What our customers told about us</p>
        </div>

        <div className="reviewSlider">


            <Carousel slides={slides}/>


        </div>

        {/*
          additional task: feedback form with submit
        */}

        <div className="gradientDiv">
        </div>

        <div className="outterContainer">
        <div className="feedbackFormGroup">
          <h3> If you have some ideas to share and interested in working with us just drop us a line. We will contact you ASAP </h3>
          <div className="feedbackForm">
            <div className="twoFields">
              <div className="field"><input
                                        name="lastName"
                                        value={this.state.lastName}
                                        onChange={this.handleChange}
                                        type="text"
                                        placeholder="Last name"
                                      />
              </div>
              <div className="field"><input
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        type="text"
                                        placeholder="Email"
                                      />
              </div>
            </div>
            <div className="textMessage">
              <textarea name="email" placeholder="Message">
              </textarea>
            </div>
            <button type="submit">Send request</button>
            <p> Thank you mr. {this.state.lastName} for your feedback, we will send you an email to {this.state.email}, once we handle your request
            </p>

          </div>
        </div>
        </div>

        <div className="footerMenu">
          <img src="/images/find-parrot-footer.png" />
          <div className="footerHrefs">
          <a href="#AboutUs">About us</a>
          <a href="#termsOfService">Terms of service</a>
          <a href="#PrivacyPolicy">Privacy policy</a>
          <a href="#ContactUs">Contact us</a>
          </div>
          <p className="FinalText">© 2018 Find Parrot</p>
        </div>
      </div>
    );
  }
}

export default App;
