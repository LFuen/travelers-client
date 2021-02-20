import React, { Component } from "react";
import api from "../../config";
import Token from "../../services/token-service";
import {
  SignUpDiv,
  CreateGuide,
  GuideSelect,
  GuideInput,
  GuideRecom,
  GuideComm,
  Cancel,
  GuideForms,
} from "../../styled/Styled";
import GuideContext from "../../context/GuideContext";
import GServices from "../../services/guide-api-service";
import { Link } from "react-router-dom";

class GuideEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guides: [],
    };
  }

  static defaultProps = {
    match: {
      params: {},
    },
  };
  static contextType = GuideContext;

  componentDidMount() {
    const idParam = this.props.match.params.id;

    GServices.getGuide(Number(idParam)).catch(this.context.setError);

    fetch(`${api.API_ENDPOINT}/guides`)
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
      .then((resJson) => {
        this.setState({ guides: resJson });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  static defaultProps = {
    onPostSuccess: () => {},
  };

  state = {
    error: null,
    guides: [],
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const idParam = this.props.match.params.id;
    const { guide_type, city, recommendation, comments } = event.target;

    const guide = {
      guide_type: guide_type.value,
      city: city.value,
      recommendation: recommendation.value,
      comments: comments.value,
    };

    this.setState({ error: null });

    fetch(`${api.API_ENDPOINT}/guides/${idParam}`, {
      method: "PATCH",
      body: JSON.stringify(guide),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${Token.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
      })
      .then(() => {
        guide.id = Number(idParam);
        this.context.updateGuide(guide);
        this.props.history.push("/Guides");
      });
  };

  formInvalid() {
    return <h1> Invalid Form </h1>;
  }

  render() {
    const { error, guides } = this.state;
    const idParam = this.props.match.params.id;
    const guide = guides.find((g) => g.id === Number(idParam)) || {
      city: "",
      recommendation: "",
      comments: "",
    };

    return (
      <div>
        {!guides ? (
          this.formInvalid()
        ) : (
          <GuideForms>
            <h2>Edit Guide</h2>

            <SignUpDiv>
              <form onSubmit={this.handleSubmit}>
                <div role="alert">{error && <p>{error}</p>}</div>
                <label htmlFor="guide_type" value="">
                  Guide Type
                  <br />
                  <br />
                </label>
                <GuideSelect id="guide_type" required>
                  <option disabled hidden value=""></option>
                  <option value="Food">Food</option>
                  <option value="Stay">Stay</option>
                  <option value="Sites">Sites</option>
                  <option value="Insider">Insider Tips</option>
                </GuideSelect>

                <br />
                <label htmlFor="city">
                  City:
                  <br />
                </label>
                <GuideInput
                  type="text"
                  placeholder="City"
                  id="city"
                  defaultValue={guide.city}
                  required
                />

                <br />
                <label htmlFor="recommendation">
                  What do you recommend?
                  <br />
                </label>
                <GuideRecom
                  type="text"
                  placeholder="Recommend"
                  id="recommendation"
                  defaultValue={guide.recommendation}
                  required
                />

                <br />
                <label htmlFor="comments">
                  Description / Comments: <br />
                </label>
                <GuideComm
                  type="text"
                  placeholder="Description"
                  id="comments"
                  defaultValue={guide.comments}
                  required
                />

                <br />
                <br />
                <CreateGuide type="submit" classid="btn">
                  Done
                </CreateGuide>
                <Link to="/Guides">
                  <Cancel>Cancel</Cancel>
                </Link>
              </form>
            </SignUpDiv>
          </GuideForms>
        )}
      </div>
    );
  }
}

export default GuideEdit;
