import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import TravelersContext from "../../context/TravelersContext";
import Login from "./Login";

describe(`Login Component`, () => {
  describe(`Snapshot`, () => {
    it("renders the UI as expected", () => {
      const login = renderer
        .create(
          <BrowserRouter>
            <Login />
          </BrowserRouter>
        )
        .toJSON();
      expect(login).toMatchSnapshot();
    });
  });

  describe(`Smoke test`, () => {
    it(`Renders without crashing`, () => {
      const div = document.createElement("div");

      const value = {
        guides: "string",
        users: "string",
        addUser: "string",
        updateUser: "string",
        deleteUser: "string",
        addGuides: "string",
        updateGuide: "string",
        deleteGuide: "string",
      };

      ReactDOM.render(
        <TravelersContext.Provider value={value}>
          <Login />
        </TravelersContext.Provider>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});
