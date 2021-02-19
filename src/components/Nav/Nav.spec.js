
import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import TravelersContext from "../../context/TravelersContext";
import Nav from "./Nav";

describe(`Nav Component`, () => {
  describe(`Snapshot`, () => {
    it("renders the UI as expected", () => {
      const nav = renderer
        .create(
          <BrowserRouter>
            <Nav />
          </BrowserRouter>
        )
        .toJSON();
      expect(nav).toMatchSnapshot();
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
            <Nav />
          </TravelersContext.Provider>
        </BrowserRouter>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});