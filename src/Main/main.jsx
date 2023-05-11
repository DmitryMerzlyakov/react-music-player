import Nav from './Navbar/mainNav';
import Content from './Content/mainContent';
import Footer from './Footer/mainFooter';
import Sidebar from './Sidebar/mainSidebar';
import s from './main.module.css'
import Login from '../Login/login';
  
const Main = ({ user, userName, setUserName, setUser }) => {
  return (
    <>
      { user ?
      <main className={s.main}>
      <Nav user={ user }/>
      <Content />
      <Footer />
      <Sidebar user={user} userName={ userName } />
    </main> : <Login setUserName={ setUserName } setUser={ setUser }/> }
    </>
  )
};

export default Main;