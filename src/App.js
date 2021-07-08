import "./App.css";
import { NavBar } from "./component/navBar";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import PostPage from "./page/postPage/PostPage";
import MainPage from "./page/mainPage/MainPage";
import UnderDevelopemntPage from "./page/UnderDevelopemntPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/post/:postId">
            <PostPage />
            {/* <MainPage /> */}
          </Route>
          <Route exact path="/lost">
            <UnderDevelopemntPage />
            {/* <MainPage /> */}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
