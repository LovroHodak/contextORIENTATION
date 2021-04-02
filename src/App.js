import "./App.css";
import React, {useContext} from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import States from "./screens/States";
import Functionss from "./screens/Functionss";
import { MyProvider} from "./MyContexts";

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
        </Switch>
      </div>
    </MyProvider>
  );
}

export default withRouter(App);
