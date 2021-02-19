import React, { Component } from "react";
import {
  SignUpDiv,
  CreateGuide,
  GuideForms,
  GuideSelect,
  GuideInput,
  GuideRecom,
  GuideComm,
  Cancel,
} from "../../styled/Styled";
import GuideContext from "../../context/GuideContext";
import GServices from "../../services/guide-api-service";
import { Link } from "react-router-dom";

class GuideForm extends Component {
  static defaultProps = {
    onPostSuccess: () => {},
  };

  static contextType = GuideContext;

  state = {
    error: null,
  };

  firstInput = React.createRef();

  handleSubmit = (event) => {
    event.preventDefault();
    const { guide_type, city, recommendation, comments } = event.target;

    this.setState({ error: null });

    GServices.addGuide({
      guide_type: guide_type.value,
      city: city.value,
      recommendation: recommendation.value,
      comments: comments.value,
    })
      .then((data) => {
        guide_type.value = "";
        city.value = "";
        recommendation.value = "";
        comments.value = "";
        this.context.addGuide(data);
        this.props.onPostSuccess({
          guide_type,
          city,
          recommendation,
          comments,
        });
      })
      .catch(this.context.setError);
  };

  componentDidMount() {
    this.firstInput.current.focus();
  }

  render() {
    const { error } = this.state;

    return (
      <GuideForms>
        <h2>Guide Form</h2>
        <SignUpDiv>
          <form onSubmit={this.handleSubmit}>
            <div role="alert">{error && <p>{error}</p>}</div>

            <label for="guide_type" value="">
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
            <label for="city">
              City:
              <br />
            </label>
            <GuideInput
              type="text"
              placeholder="City"
              id="city"
              ref={this.firstInput}
              required
            />

            <br />
            <label for="recommendation">
              What do you recommend?
              <br />
            </label>
            <GuideRecom
              type="text"
              placeholder="Recommend"
              id="recommendation"
              required
            />
            <br />
            <label for="comments">
              Description / Comments:
              <br />
            </label>
            <GuideComm
              type="text"
              placeholder="Description"
              id="comments"
              required
            />
            <br />
            <br />
            <CreateGuide type="submit" classid="btn">
              Create
            </CreateGuide>
            <Link to="/Guides">
              <Cancel>Cancel</Cancel>
            </Link>
          </form>
        </SignUpDiv>
      </GuideForms>
    );
  }
}

export default GuideForm;
