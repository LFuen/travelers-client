import React, { useState, useEffect } from "react";
import profile from "../../images/user.png";
import { GuideDiv, GuidePost, UserIcon } from "../../styled/Styled";

function Favorites(props) {
  return (
    <GuideDiv>
      <div>
        <h1>Favorite Guides</h1>
      </div>
      <GuidePost>
        <UserIcon>
          <img src={profile} alt="user" />
        </UserIcon>
        <label>Guide Type</label>
        <br />
        <p>This is the Guide Type</p>
        <br />
        <label>
          City:
          <br />
          <p>This is the City</p>
        </label>
        <br />
        <label>
          Recommend:
          <br />
          <p>This is the recommendation</p>
        </label>
        <br />
        <label>
          Comments / Description:
          <br />
          <p>These are the comments or descriptions</p>
        </label>
      </GuidePost>
    </GuideDiv>
  );
}

export default Favorites;
