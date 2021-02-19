import React, { Component } from "react";

const GuideContext = React.createContext({
  guide: {},
  guides: [],
  error: null,

  setError: () => {},
  clearError: () => {},

  setGuide: () => {},
  addGuide: () => {},
  updateGuide: () => {},
  deleteGuide: () => {},
});

export default GuideContext;

export class GuideProvider extends Component {
  state = {
    guide: {},
    error: null,
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setGuide = (guide) => {
    this.setState({ guide });
  };

  addGuide = (guide) => {
    this.setGuide([...this.state.guides, guide]);
  };

  updateGuide = (guide) => {
    this.setGuide([...this.state.guides, guide]);
  };

  deleteGuide = () => {
    this.setGuide({});
  };

  render() {
    const value = {
      guide: this.state.guide,
      guides: this.state.guides,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setGuide: this.setGuide,
      addGuide: this.addGuide,
      updateGuide: this.updateGuide,
      deleteGuide: this.deleteGuide,
    };

    return (
      <GuideContext.Provider value={value}>
        {this.props.children}
      </GuideContext.Provider>
    );
  }
}
