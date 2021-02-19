import React, { Component } from "react";
import { Link } from "react-router-dom";
import fabulous from "../../images/fabulous.png";
import { AccountDiv, DivCenter } from "../../styled/Styled";

class Account extends Component {
  render() {
    return (
      <DivCenter>
        <h2>My Profile</h2>
        <AccountDiv>
          <div>
            <div>
              <h5 className="buttons">Profile</h5>
              <span>
                <img src={fabulous} alt="member-name" className="Img" />
              </span>
            </div>
          </div>
          <div className="clickPopUp">
            <Link to="/Favorites">Favorites</Link>
          </div>
        </AccountDiv>
      </DivCenter>
    );
  }
}

export default Account;
