import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import TopBar from './TopBar';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;