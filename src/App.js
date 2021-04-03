import "./App.css";
import React, { useContext } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import States from "./screens/States";
import Functionss from "./screens/Functionss";
import { MyProvider } from "./MyContexts";
import Inputss from "./screens/Inputss";

function App() {
  return (
    <MyProvider>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <States />;
            }}
          />
          <Route
            exact
            path="/functions"
            render={() => {
              return <Functionss />;
            }}
          />
          <Route
            exact
            path="/inputss"
            render={() => {
              return <Inputss />;
            }}
          />
        </Switch>
      </div>
    </MyProvider>
  );
}

export default withRouter(App);
