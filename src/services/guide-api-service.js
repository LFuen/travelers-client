import Token from "./token-service";
import config from "../config";

const URL = config.API_ENDPOINT;

const GuideService = {
  getGuides() {
    return fetch(`${URL}/guides`, {
      headers: {},
    }).then((res) => {
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
    });
  },

  getGuide(guideId) {
    return fetch(`${URL}/guides/${guideId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token.getAuthToken()}`,
      },
    }).then((res) => {
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
    });
  },

  getUsers() {
    return fetch(`${URL}/users`, {
      headers: {
        Authorization: `Bearer ${Token.getAuthToken()}`,
      },
    }).then((res) => {
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
    });
  },

  addGuide(guide) {
    return fetch(`${URL}/guides`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token.getAuthToken()}`,
      },
      body: JSON.stringify(guide),
    }).then((res) => {
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
    });
  },

  deleteGuide(guideId) {
    return fetch(`${URL}/guides/${guideId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${Token.getAuthToken()}`,
      },
    });
  },

  updateGuide(guideId) {
    return fetch(`${URL}/guides/${guideId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token.getAuthToken()}`,
      },
      body: JSON.stringify({
        is_resolved: true,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        return res;
      })
      .catch((error) => console.error(error));
  },
};

export default GuideService;
