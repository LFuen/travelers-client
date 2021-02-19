import React, { Component } from "react";
import GuideContext from "../../context/GuideContext";
import GuideService from "../../services/guide-api-service";
import Guides from "../Guides/Guides";
import Welcome from "../Welcome/Welcome";

class WelcomeRoute extends Component {
  static contextType = GuideContext;

  componentDidMount() {
    this.context.clearError();
    GuideService.getGuides()
      .then(this.context.setGuide)
      .then(this.context.setError);
  }

  renderGuides() {
    const { guides = [] } = this.context;
    return guides
      .filter((guide) => !guide.is_resolved)
      .map((guide) => <Guides key={guide.id} guide={guide} />);
  }

  render() {
    const { error } = this.context;
    return (
      <div>
        <Welcome />
        <section>
          {error ? <p>Hmm...no guides to show.</p> : this.renderGuides()}
        </section>
      </div>
    );
  }
}

export default WelcomeRoute;
