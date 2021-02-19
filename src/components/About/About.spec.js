import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import TravelersContext from "../../context/TravelersContext";
import About from "./About";

describe(`About Component`, () => {
  describe(`Snapshot`, () => {
    it("renders the UI as expected", () => {
      const about = renderer.create(<BrowserRouter>
      <About /></BrowserRouter>).toJSON();
      expect(about).toMatchSnapshot();
    });
  });

  describe(`Smoke test`, () => {
    it(`Renders without crashing`, () => {
      const div = document.createElement("div");

      const value = {
        guides: 'string',
        users: 'string',
        addUser: 'string',
        updateUser: 'string',
        deleteUser: 'string',
        addGuides: 'string',
        updateGuide: 'string',
        deleteGuide: 'string',
      };

      ReactDOM.render(
        <TravelersContext.Provider value={value}>
          <About />
        </TravelersContext.Provider>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});