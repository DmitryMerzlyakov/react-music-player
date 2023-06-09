import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./protected-route";
import Main from "./pages/GeneralPlaylist/main";
import Login from "./pages/Login/login";
import Registration from "./pages/Login/registration";
import MyMusic from "./pages/MyMusicPlaylist/myMusic";
import IndiPlaylist from "./pages/IndiPlaylist/indi";
import DayPlaylist from "./pages/DayPlaylist/day";
import HitsPlaylist from "./pages/HitsPlaylist/hits";

const AppRoutes = ({dataForId}) => {


    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/registration" element={<Registration />} />

            <Route element={<ProtectedRoute/>}> 
                <Route path="/playlist/mymusic" element={<MyMusic />} />
                
                <Route path="/" element={<Main />} /> 
                
                <Route path="/playlist/hits" element={<HitsPlaylist dataForId={dataForId} />} />
                <Route path="/playlist/indi" element={<IndiPlaylist dataForId={dataForId}/>} /> 
                <Route path="/playlist/dayplaylist" element={<DayPlaylist dataForId={dataForId}/>} /> 
            </Route>
        </Routes>
    );
}

export default AppRoutes;