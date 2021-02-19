import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import TravelersContext from "../../context/TravelersContext";
import Home from "./Home";

describe(`Home Component`, () => {
  describe(`Snapshot`, () => {
    it("renders the UI as expected", () => {
      const home = renderer.create(<BrowserRouter>
      <Home /></BrowserRouter>).toJSON();
      expect(home).toMatchSnapshot();
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
        <BrowserRouter>
          <TravelersContext.Provider value={value}>
            <Home />
          </TravelersContext.Provider>
        </BrowserRouter>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});