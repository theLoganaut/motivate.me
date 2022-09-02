import { Authenticator } from "@aws-amplify/ui-react";
import { RequireAuth } from "./Controllers/RequireAuth";
import Login from "./Routes/Login";
import Home from "./Routes/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Communities from "./Routes/Communities";
import Profile from "./Routes/Profile";
import Following from "./Routes/Following";
import Layout from "./Routes/Layout";

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
          <Route
            path="/home"
            index
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/profile/:username/*"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/communities/:currentTag"
            element={
              <RequireAuth>
                <Communities />
              </RequireAuth>
            }
          />
          <Route
            path="/following/*"
            element={
              <RequireAuth>
                <Following />
              </RequireAuth>
            }
          />{" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <Authenticator.Provider>
      <MyRoutes />
    </Authenticator.Provider>
  );
}

export default App;
