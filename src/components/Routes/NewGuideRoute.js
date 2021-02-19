import React, { Component } from "react";
import GuideForm from "../GuideForm/GuideForm";

class NewGuideRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  onPostSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/Guides";
    history.push(destination);
  };

  render() {
    return <GuideForm onPostSuccess={this.onPostSuccess} />;
  }
}

export default NewGuideRoute;
