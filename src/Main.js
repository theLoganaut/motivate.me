import { Authenticator } from "@aws-amplify/ui-react";
import { RequireAuth } from "./Controllers/RequireAuth";
import Login from "./Routes/Login";
import Home from "./Routes/Home";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Communities from "./Routes/Communities";
import Profile from "./Routes/Profile";
import Following from "./Routes/Following";
import MotiveIterator from "./Components/MotiveIterator";
import { useEffect } from "react";

function MyRoutes({ user }) {
  const params = useParams();

  useEffect(() => {
    console.log(user);
  }, [user]);
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
          path="/profile/:username/*"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        >
          {/* <Route
            path={`/profile/:username/:currentTab`}
            element={<MotiveIterator />}
          /> */}
        </Route>
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
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Background/>} >
    //     <Route path="login" element={<Login />} />
    //     <Route index element={<Layout />}>
    //       <Route index element={<Home />}>
    //         <Route path="*" element={<MotiveList />} />
    //       </Route>
    //       <Route path="communities" element={<Communities />}>
    //         <Route path="*" element={<MotiveList />} />
    //       </Route>
    //       <Route path="following" element={<Following />}>
    //         <Route path="*" element={<MotiveList />} />
    //       </Route>
    //     </Route>
    //     <Route />

    //     </Route>
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
