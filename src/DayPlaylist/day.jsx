import Nav from "../Main/Navbar/mainNav";
import Footer from '../Main/Footer/mainFooter';
import Sidebar from '../Main/Sidebar/mainSidebar';
import DayContent from "./dayContent";
import s from '../Main/main.module.css'

const Day = ({user, userName }) => {
    return (
        <main className={s.main}>
            <Nav />
            <DayContent/>
            <Footer/>
            <Sidebar user={user} userName={ userName }/>
        </main>     
    );
}

export default Day;