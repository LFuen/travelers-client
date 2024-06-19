import jwtDecode from "jwt-decode";
import config from "../config";

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY);
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
  parseJwt(jwt) {
    return jwtDecode(jwt);
  },
  parseAuthToken() {
    const authToken = TokenService.getAuthToken();
    if (authToken) return TokenService.parseJwt(authToken);
    else return undefined;
  },
  getUserId() {
    const authToken = TokenService.getAuthToken();
    if (!authToken) return null;
    try {
      const decoded = TokenService.parseJwt(authToken);
      return decoded.user_id
    } catch (e) {
      console.error("Failed to decode JWT:", e);
      return null;
    }
  },
};

export default TokenService;
