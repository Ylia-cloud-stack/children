import {BrowserRouter, Navigate, Outlet, Route, Routes} from "react-router-dom";
import Landing from "./screens/Landing.tsx";
import Services from "./screens/Services.tsx";
import Teachers from "./screens/Teachers.tsx";
import Schedule from "./screens/Schedule.tsx";
import Documents from "./screens/Documents.tsx";
import Navbar from "./components/Navbar.tsx";
import GeolocationPage from "./screens/Geolocation.tsx";
import ExtraServices from "./screens/ExtraServices.tsx";


function LayoutWithNavbar() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

function App() {



  return (
      <BrowserRouter basename="/children">
          <Routes>
              {/* главный экран‑заставка */}
              <Route path="/" element={<Landing />} />

              {/* остальные разделы */}
              <Route element={<LayoutWithNavbar />}>
               <Route path="/geolocation" element={<GeolocationPage />} />
               <Route path="/services" element={<Services />} />
                  <Route path="/extra-services" element={<ExtraServices />} />
               <Route path="/teachers" element={<Teachers />} />
               <Route path="/schedule" element={<Schedule />} />
               <Route path="/documents" element={<Documents />} />
              </Route>
              {/* редирект «всё остальное» на главную */}
              <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
