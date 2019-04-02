import React, {Component} from 'react'

export class Footer extends Component {
  render() {
    return(
      <div className="footerMenu">
        <img src="/images/find-parrot-footer.png" />
        <div className="footerHrefs">
        <a href="#AboutUs">About us</a>
        <a href="#termsOfService">Terms of service</a>
        <a href="#PrivacyPolicy">Privacy policy</a>
        <a href="#ContactUs">Contact us</a>
        </div>
        <p className="finalText">© 2018 Find Parrot</p>
      </div>
    )
  }
}


export default Footer;
