import React, { Suspense } from "react";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import BaseLayout from "./components/BaseLayout";
import Loading from "./components/Loading";

const LoggedIn = React.lazy(() => import("./routes/LoggedIn"));

interface Props {}

const App: React.FC<Props> = () => {
  const loggedIn = true;
  return loggedIn ? <UserLoggedIn /> : <UserLoggedOut />;
};

const UserLoggedIn = () => (
  <BaseLayout>
    <div>loggedIn.</div>
  </BaseLayout>
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
