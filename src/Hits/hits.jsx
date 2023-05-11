import Nav from "../Main/Navbar/mainNav";
import Footer from '../Main/Footer/mainFooter';
import Sidebar from '../Main/Sidebar/mainSidebar';
import HitsContent from "./hitsContent";
import s from '../Main/main.module.css'

const Hits = ({ user, userName }) => {
    return (
        <main className={s.main}>
            <Nav />
            <HitsContent/>
            <Footer />
            <Sidebar user={user} userName={ userName }/>
        </main>       
    );
}

export default Hits;