import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./protected-route";
import Main from "./pages/GeneralPlaylist/main";
import Login from "./pages/Login/login";
import Registration from "./pages/Login/registration";
// import MyMusic from "../src/pages/MyMusicPlaylist/myMusic";
// import Hits from "./Hits/hits";
// import Indi from "./Indi/indi";
// import Day from "./DayPlaylist/day";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login"
                element={<Login />}
            />
            <Route path="/registration"
                element={<Registration />} />
            <Route element={<ProtectedRoute isAllowed={Boolean(true)}/>}> 
                {/* <Route path="/playlist/mymusic" element={
                    <MyMusic user={user} userName={userName} />} /> */}
                <Route path="/" element={
                        <Main />}/> 
                {/* <Route path="/playlist/hits" element={
                        <Hits user={user} userName={userName} />} />
                <Route path="/playlist/indi" element={
                        <Indi user={user} userName={userName} />} />
                <Route path="/playlist/dayplaylist" element={
                        <Day user={user} userName={userName} />} /> */}
            </Route>
        </Routes>
    );
}

export default AppRoutes;