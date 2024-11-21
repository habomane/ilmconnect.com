import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  // const [navOpen, setNavOpen] = useState(false);
  const location = useLocation(); 
  const currentPath = location.pathname; 
  const activeClass = 'text-customPurple';
  const linkClass = 'block px-4 py-2 rounded hover:bg-gray-700';

  return (
    <nav className="flex flex-col h-full w-64 justify-between items-center bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 shadow">
      <Link to="/mentors" className={`${currentPath === '/mentors' ? activeClass : 'text-black'}`}> 
        Mentors
      </Link> 
      <Link to="/messages" className={`${currentPath === '/messages' ? activeClass : 'text-black'}`}> 
        Messages 
      </Link> 
      <Link to="/schedule" className={`${currentPath === '/schedule' ? activeClass : 'text-black'}`}> 
        Schedule 
      </Link> 
      <Link to="/profile" className={`${currentPath === '/profile' ? activeClass : 'text-black'}`}> 
        Profile </Link> 
      <Link to="/signup" className={`${currentPath === '/signup' ? activeClass : 'text-black'}`}> 
        Sign up 
      </Link>
    </nav>
  );
}
