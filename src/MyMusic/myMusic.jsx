import Nav from "../Main/Navbar/mainNav";
import Footer from '../Main/Footer/mainFooter';
import Sidebar from '../Main/Sidebar/mainSidebar';
import MyContent from "./myContent";
import Login from "../Login/login";
import s from '../Main/main.module.css'

const MyMusic = ({user, userName}) => {
    return (
        <>
            {
                user ? 
                <main className={s.main}>   
                <Nav />
                <MyContent/>
                <Footer />
                <Sidebar userName={ userName }/> 
                </main>      
                : <Login/>
            }
        </>
    );
}

export default MyMusic;