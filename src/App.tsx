import React, { Suspense } from "react";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import BaseLayout from "./components/BaseLayout";
import Loading from "./components/Loading";

const FeedContent = React.lazy(() => import("./routes/FeedContent"));
const Notice = React.lazy(() => import("./routes/Notice"));
const ManagerInfo = React.lazy(() => import("./routes/ManagerInfo"));

const LoggedIn = React.lazy(() => import("./routes/LoggedIn"));

interface Props {}

const App: React.FC<Props> = () => {
  const loggedIn = true;
  return loggedIn ? <UserLoggedIn /> : <UserLoggedOut />;
};

const UserLoggedIn = () => (
  <BrowserRouter>
    <BaseLayout>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={FeedContent} />
          <Route exact path="/notice" component={Notice} />
          <Route exact path="/info" component={ManagerInfo} />
        </Switch>
      </Suspense>
    </BaseLayout>
  </BrowserRouter>
);

const UserLoggedOut = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={LoggedIn} />
        <Redirect to="/" from="*" />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
