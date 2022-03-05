import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Browse, Signin, Signup } from "./pages";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import {useAuthListener} from "./hooks";

function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Routes>
        <Route
          exact
          path={ROUTES.SIGN_UP}
          element={
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
              <Signup />
            </IsUserRedirect>
          }
        />
        <Route
          exact
          path={ROUTES.SIGN_IN}
          element={
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
              <Signin />
            </IsUserRedirect>
          }
        />
        <Route>
          <Route element={<ProtectedRoute user={user} authPath={ROUTES.SIGN_IN} />}>
            <Route exact path={ROUTES.BROWSE} element={<Browse />} />
          </Route>
        </Route>

        <Route
          exact
          path={ROUTES.HOME}
          element={
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
              <Home />
            </IsUserRedirect>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
