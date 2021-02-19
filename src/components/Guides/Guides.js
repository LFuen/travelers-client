import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../config";
import food from "../../images/food.png";
import stay from "../../images/stay.png";
import sites from "../../images/sites.png";
import tips from "../../images/tips.png";
import {
  GuideDiv,
  GuidePost,
  UserIcon,
  NewGuide,
  NoGuide,
  Deleted,
  Editing,
  AddGuide,
} from "../../styled/Styled";
import Token from "../../services/token-service";
import travel from "../../images/travel.png";
import none from "../../images/noGuide.png";
import Guide from "../../context/GuideContext";
import Travelers from "../../context/TravelersContext";

class Guides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guides: [],
    };
  }

  static defaultProps = {
    match: {
      prarms: {},
    },
  };

  state = {
    error: null,
  };

  static contextType = Guide;

  clickDelete = (id) => {
    this.setState({ error: null });
    fetch(`${api.API_ENDPOINT}/guides/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${Token.getAuthToken()}`,
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
      })
      .then(() => {
        this.context.deleteGuide(id);
        this.handleGuideChange(id);
      })
      .catch((error) => {
        console.error({ error });
        this.setState({ error });
      });
  };

  handleGuideChange = (id) => {
    const updatedGuides = this.state.guides.filter((guide) => {
      return guide.id !== id;
    });
    this.setState({ guides: updatedGuides });
  };

  componentDidMount() {
    fetch(`${api.API_ENDPOINT}/guides`)
      .then((response) => response.json())
      .then((guides) => this.setState({ guides: guides }));
  }

  render() {
    const { guides } = this.state;
    const guided = guides.sort((a, b) => (a.id < b.id ? 1 : -1)); // sorts the guides by most recent first

    let imgURL = {
      Food: food,
      Stay: stay,
      Sites: sites,
      Insider: tips,
    };

    if (guided.length > 0) {
      console.log("this is guided: ", guided);
      return (
        <GuideDiv>
          <div className="top">
            <h1>Guides</h1>

            <NewGuide to="/GuideForm">
              <h2>
                {" "}
                Add <img src={travel} alt="user" /> Guide{" "}
              </h2>
            </NewGuide>
          </div>

          {guided.map((guide) => (
            <GuidePost key={guide.id}>
              <div>
                <UserIcon>
                  <img alt="user" src={imgURL[guide.guide_type]} />
                </UserIcon>
                <label className="under">Guide Type</label>
                <br />
                <p>{guide.guide_type}</p>
                <br />
                <label className="under">
                  City:
                  <br />
                  <p>{guide.city}</p>
                </label>
                <br />
                <label className="under">
                  Recommend:
                  <br />
                  <p>{guide.recommendation}</p>
                </label>
                <br />
                <label className="under">
                  Comments / Description:
                  <br />
                  <p>{guide.comments}</p>
                </label>
                <br />
              </div>
              <Travelers.Consumer>
                {(context) =>
                  context.user.id === guide.author ? (
                    <div>
                      <Link to={`guides/${guide.id}`}>
                        <Editing disabled={guide.is_resolved}>Edit</Editing>
                      </Link>
                      <Link to="/Guides">
                        <Deleted
                          type="button"
                          disabled={guide.is_resolved}
                          onClick={() => this.clickDelete(guide.id)}
                        >
                          Delete
                        </Deleted>
                      </Link>
                    </div>
                  ) : null
                }
              </Travelers.Consumer>
            </GuidePost>
          ))}
        </GuideDiv>
      );
    } else if (guided.length <= 0) {
      return (
        <NoGuide>
          <h1>No Guides Yet</h1>
          <br />
          <img alt="No Guides" src={none} />
          <br />
          <Link to="/GuideForm">
            <AddGuide style={{ marginRight: "none" }}>Add Guide</AddGuide>
          </Link>
        </NoGuide>
      );
    }
  }
}

export default Guides;
