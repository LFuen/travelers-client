import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import TravelersContext from "../../context/TravelersContext";
import Guides from "./Guides";

describe(`Guides Component`, () => {
  describe(`Snapshot`, () => {
    it("renders the UI as expected", () => {
      const guide = renderer.create(<BrowserRouter>
      <Guides /></BrowserRouter>).toJSON();
      expect(guide).toMatchSnapshot();
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
            <Guides />
          </TravelersContext.Provider>
        </BrowserRouter>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});