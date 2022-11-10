type Key = "WANTED_TODO_STORE";

interface ITokenRepository<TValue> {
  getLocalStorage: (key: Key) => { token: string } | null;
  setLocalStorage: (key: Key, value: TValue) => void;
  removeLocalStorage: (key: Key) => void;
}

class TokenRepository<TValue> implements ITokenRepository<TValue> {
  getLocalStorage = (key: Key) => {
    const token = localStorage.get(key);
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
