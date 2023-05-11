import Nav from "../Main/Navbar/mainNav";
import Footer from '../Main/Footer/mainFooter';
import Sidebar from '../Main/Sidebar/mainSidebar';
import DayContent from "./dayContent";
import Login from "../Login/login";
import s from '../Main/main.module.css'

const Day = ({user, userName }) => {
    return (
        <>
            {
                user ? 
                <main className={s.main}>
                    <Nav />
                    <DayContent/>
                    <Footer/>
                    <Sidebar user={user} userName={ userName }/>
                </main>     
                : <Login/>
            }
        </>
    );
}

export default Day;