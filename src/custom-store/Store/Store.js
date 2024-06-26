class Store {
  rootReducer;
  state;
  subscribers = {};

  constructor(rootReducer) {
    this.rootReducer = rootReducer;
    this.state = this.rootReducer(this.state);
  }

  subscribe(key, callback) {
    this.subscribers[key] = callback;
    this.subscribers[key](this.state);
  }

  unsubscribe(key) {
    delete this.subscribers[key];
  }

  dispatch(action) {
    this.state = this.rootReducer(this.state, action);

    Object.values(this.subscribers).forEach((subscriberCallback) => {
      if (!!subscriberCallback && typeof subscriberCallback === "function") {
        subscriberCallback(this.state);
      }
    });
  }
}

export const createStore = (function () {
  let storeInstance;

  return function (rootReducer) {
    if (!storeInstance) {
      storeInstance = new Store(rootReducer);
    }

    return storeInstance;
  };
})();
