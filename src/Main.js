import { Authenticator } from "@aws-amplify/ui-react";
import { RequireAuth } from "./Controllers/RequireAuth";
import Login from "./Routes/Login";
import Home from "./Routes/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Communities from "./Routes/Communities";
import Profile from "./Routes/Profile";
import Following from "./Routes/Following";

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/profile/*"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/communities/*"
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
        />
      </Routes>
    </BrowserRouter>
    //   <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Navigate to="/Login" />} />

    //     <Route path="/Login" element={<Login />} />
    //     <Route path="/Connections" element={<Connections />} />
    //     <Route path="/Home" element={<Home />} />
    //     <Route path="/Profile/*" element={<Profile />} />
    //     <Route path="/More" element={<More />} />
    //     <Route path="/Communities/*" element={<Communities />} />
    //     <Route path="/Notifications" element={<Notifications />} />
    //   </Routes>
    // </BrowserRouter>
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
