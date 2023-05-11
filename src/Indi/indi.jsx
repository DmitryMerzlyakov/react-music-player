import Nav from "../Main/Navbar/mainNav";
import Footer from '../Main/Footer/mainFooter';
import Sidebar from '../Main/Sidebar/mainSidebar';
import IndiContent from "./indiContent";
import Login from "../Login/login";
import s from '../Main/main.module.css'

const Indi = ({ user, userName }) => {
    return (
         <>
            {
                user ? 
                <main className={s.main}>
                    <Nav />
                    <IndiContent/>
                    <Footer />
                    <Sidebar user={user} userName={ userName }/>
                </main>
                : <Login/>
            }
        </>
    );
}

export default Indi;