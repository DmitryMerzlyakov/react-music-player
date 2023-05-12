import { Route, Routes } from "react-router-dom";
import Main from "./Main/main";
import Login from "./Login/login";
import Registration from "./Login/registration";
import MyMusic from "./MyMusic/myMusic";
import Hits from "./Hits/hits";
import Indi from "./Indi/indi";
import Day from "./DayPlaylist/day";
import { ProtectedRoute } from "./protected-route";

const AppRoutes = ({ user, setUser, userName, setUserName }) => {
    return (
        <Routes>
            <Route path="/login"
                element={<Login setUser={ setUser } setUserName={ setUserName } />}
            />
            <Route path="/registration"
                element={<Registration />} />
            <Route element={<ProtectedRoute isAllowed={Boolean(user)}/>}> 
                <Route path="/playlist/mymusic" element={
                    <MyMusic user={user} userName={userName} />} />
                <Route path="/" element={
                        <Main user={user} userName={userName} setUserName={setUserName} setUser={setUser} />}/> 
                <Route path="/playlist/hits" element={
                        <Hits user={user} userName={userName} />} />
                <Route path="/playlist/indi" element={
                        <Indi user={user} userName={userName} />} />
                <Route path="/playlist/dayplaylist" element={
                        <Day user={user} userName={userName} />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;