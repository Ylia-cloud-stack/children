import { NavLink} from 'react-router-dom';
import {useState} from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const linkBase = 'text-lg tracking-wide transition';
    const linkHover = 'hover:text-pink-200';
    const linkActive = 'underline decoration-pink-300 font-semibold';

    const closeMenu = () => setOpen(false);
    return (
       <header className="fixed top-0 left-0 w-full p-4 bg-pink-400/60 text-white backdrop-blur z-30 max-[768px]:p-2">
           <nav className="flex gap-6 max-w-[1200px] mx-auto max-[768px]:hidden">
               <NavLink to="/geolocation"  className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkHover}`}>Локация</NavLink>
               <NavLink to="/services" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkHover}`}>Услуги</NavLink>
               <NavLink to="extra-services" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkHover}`}>Доп Услуги</NavLink>
               <NavLink to="/teachers" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkHover}`}>Педагоги
               </NavLink>
               <NavLink to="/schedule" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkHover}`}>Распорядок</NavLink>
               <NavLink to="/documents" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkHover}`}>Документы</NavLink>
           </nav>

           <button
               type="button"
               aria-label="Открыть меню"
               aria-expanded={open}
               aria-controls="mobile-menu"
               onClick={() => setOpen(v => !v)}
               className="hidden max-[768px]:inline-flex items-center justify-center
                   w-8 h-8 rounded-md ring-1 ring-white/40 hover:ring-white/70 transition"
           >
        <span
            className="relative block w-5 h-0.5 bg-white transition
                     before:content-[''] before:absolute before:-top-1.5 before:left-0 before:w-5 before:h-0.5 before:bg-white before:transition
                     after:content-['']  after:absolute  after:top-1.5  after:left-0  after:w-5  after:h-0.5  after:bg-white  after:transition
                     data-[open=true]:bg-transparent
                     data-[open=true]:before:rotate-45 data-[open=true]:before:top-0
                     data-[open=true]:after:-rotate-45  data-[open=true]:after:top-0"
            data-open={open}
        />
           </button>


           <div
               id="mobile-menu"
               className="hidden max-[768px]:block"
           >
               <div
                   className={`absolute left-0 right-0 top-full z-40 mx-0
                      bg-pink-400/60 backdrop-blur ring-1 ring-white/30
                      flex flex-col
                      overflow-hidden
                      transition-all duration-300 ease-out
                      ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 pointer-events-none'}`}
               >
                   <NavLink to="/geolocation" onClick={closeMenu} className="block px-4 py-1 border-b border-white/20">
                       Локация
                   </NavLink>
                   <NavLink to="/services" onClick={closeMenu} className="block px-4 py-1 border-b border-white/20">
                       Услуги
                   </NavLink>
                   <NavLink to="/extra-services" onClick={closeMenu} className="block px-4 py-1 border-b border-white/20">
                       Доп Услуги
                   </NavLink>
                   <NavLink to="/teachers" onClick={closeMenu} className="block px-4 py-1 border-b border-white/20">
                       Педагоги
                   </NavLink>
                   <NavLink to="/schedule" onClick={closeMenu} className="block px-4 py-1 border-b border-white/20">
                       Распорядок
                   </NavLink>
                   <NavLink to="/documents" onClick={closeMenu} className="block px-4 py-1">
                       Документы
                   </NavLink>
               </div>
           </div>
       </header>
    );
}