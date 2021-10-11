import React from "react";
import { Route, Switch,Redirect } from "react-router";
import CommentPage from "./components/CommentPage";
//import Navbar from "./components/Navbar";
import TopNewContainer from "./components/TopNewContainer";

const Router = () => {
    const Name = () => {
      return <h1>Welcome to name page</h1>;
    };
    return (
      <>
        {/* <TopNewContainer /> */}
        <Switch>
          <Route exact path="/" component={()=><TopNewContainer />} />  {/*Passing prop */}
          <Route exact path ="/Comments" component ={()=><CommentPage/>} />

          {/* <Route exact path="/service" component={()=><Service name='Service(prop)'/>} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/user/:fname/:lname" component={User} />
          {/* <Route component={Error} /> */}
          <Redirect to="/search"/> */}
        </Switch>
      </>
    );
  };
  
  export default Router;
  