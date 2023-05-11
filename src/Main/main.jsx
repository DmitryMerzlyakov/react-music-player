import Nav from './Navbar/mainNav';
import Content from './Content/mainContent';
import Footer from './Footer/mainFooter';
import Sidebar from './Sidebar/mainSidebar';
import s from './main.module.css'
  
const Main = ({ user, userName }) => {
  return (
    <main className={s.main}>
        <Nav user={ user }/>
        <Content />
        <Footer />
        <Sidebar user={user} userName={ userName } />
    </main>)
};

export default Main;