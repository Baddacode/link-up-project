import React, { Component } from 'react'
import './App.css'
import {Carousel} from '3d-react-carousal'
import TopNavBar from './components/topNavBar.js'
import TopNav from './components/topNav.js'
import MainContainer from './components/mainContainer.js'
import Footer from './components/footer.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
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

    return (
      <div className="App">
        <TopNavBar />
        <TopNav />
        <MainContainer />

        <div className="main2">
          <p className="bigText2" id="2">Testimonials</p>
          <p className="smallText2">What our customers told about us</p>
        </div>

        <div className="reviewSlider">
            <Carousel slides={slides}/>
        </div>


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

        <Footer />
      </div>
    );
  }
}

export default App;
