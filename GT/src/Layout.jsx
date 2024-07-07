import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Top from './Top.jsx';
import Footer from './Footer.jsx'; // Assuming you have a Footer component

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* <Top /> */}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer className="footer" />
    </div>
  );
};

export default Layout;
