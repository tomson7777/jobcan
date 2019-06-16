"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./app.css");
exports.App = () => {
    return (<div>
      <header style={{ textAlign: 'center' }}>
        <h1>Welcome to jobber!</h1>
        <img width="450" src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png"/>
      </header>
      <p>
        This is a React app built with <a href="https://nx.dev">Nx</a>.
      </p>
      <p>🔎 **Nx is a set of Angular CLI power-ups for modern development.**</p>
      <h2>Quick Start & Documentation</h2>
      <ul>
        <li>
          <a href="https://nx.dev/getting-started/what-is-nx">
            30-minute video showing all Nx features
          </a>
        </li>
        <li>
          <a href="https://nx.dev/tutorial/01-create-application">
            Interactive tutorial
          </a>
        </li>
      </ul>
    </div>);
};
exports.default = exports.App;
//# sourceMappingURL=app.js.map