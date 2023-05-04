import Nav from './components/Navbar/mainNav'
import Content from './components/Content/mainContent';
import Footer from './components/Footer/mainFooter';
import Sidebar from './components/Sidebar/mainSidebar';
import s from './app.module.css'
  
const App = () => {
  return (
    <div className={`${s.wrapper} ${s.container}`}>
      <main className={s.main}>
        <Nav />
        <Content />
        <Footer />
        <Sidebar />
      </main>
    </div>);
};

export default App;


