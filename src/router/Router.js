class Router {
  currentRoute = "/";

  subscribers = {};

  constructor() {
    this.currentRoute = window.location.pathname;
  }

  setRoute(route, state = {}) {
    this.currentRoute = route;

    window.history.pushState(state, "", route);

    Object.values(this.subscribers).forEach(
      (subscriber) =>
        typeof subscriber === "function" && subscriber(this.currentRoute)
    );
  }

  subscribe(key, callback) {
    this.subscribers[key] = callback;
    this.subscribers[key](this.currentRoute);
  }

  unsubscribe(key) {
    delete this.subscribers[key];
  }
}

export const createRouter = (function () {
  let storeInstance;

  return function () {
    if (!storeInstance) {
      storeInstance = new Router();
    }

    return storeInstance;
  };
})();

export const router = createRouter();
