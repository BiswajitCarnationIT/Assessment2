import React from "react";
import { Route, Switch, Redirect } from "react-router";
import CommentPage from "./components/CommentPage";
import TopNewContainer from "./components/TopNewContainer";

const Router = () => {
  const Name = () => {
    return <h1>Welcome to name page</h1>;
  };
  return (
    <>
      <Switch>
        <Route exact path="/" component={() => <TopNewContainer />} />
        <Route exact path="/Comments" component={() => <CommentPage />} />
        <Redirect to="/" /> }
      </Switch>
    </>
  );
};

export default Router;
