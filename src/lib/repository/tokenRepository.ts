import { ITokenRepository, Key } from "../types";

class TokenRepository<TValue> implements ITokenRepository<TValue> {
  getLocalStorage = (key: Key) => {
    const token = localStorage.getItem(key);
    if (token) {
      return JSON.parse(token);
    }
    return null;
  };

  setLocalStorage = (key: Key, value: TValue) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  removeLocalStorage = (key: Key) => {
    localStorage.removeItem(key);
  };
}

export default TokenRepository;
