// import React from "react";
// import Header from "./componentsw3/Header";
// import About from "./componentsw3/About";
// import Team from "./componentsw3/Team";
// import { GrMail } from "react-icons/gr";
// import Work from "./componentsw3/Work";
// import Pricing from "./componentsw3/Pricing";
// import Contact from "./componentsw3/Contact";
// import Footer from "./componentsw3/Footer";
// import Afterabout from "./componentsw3/Afterabout";
// import Lineafterteam from "./componentsw3/Lineafterteam";
// import Last from "./componentsw3/Last";
// import Afterwork from "./componentsw3/Afterwork";

// export default function App() {
//   return (
//     <div>
//       <Header />
//       <About />
//       <Afterabout />
//       <Team />
//       <Lineafterteam/>
//       <Work />
//       <Afterwork />
//       <Pricing />
//       <Contact />
//       <Footer />
//       <Last />
//     </div>
//   );
// }

import React, { useState } from "react";
import Header from "./componentsw3/Header";
import About from "./componentsw3/About";
import Team from "./componentsw3/Team";
import { GrMail } from "react-icons/gr";
import Work from "./componentsw3/Work";
import Pricing from "./componentsw3/Pricing";
import Contact from "./componentsw3/Contact";
import Footer from "./componentsw3/Footer";
import Afterabout from "./componentsw3/Afterabout";
import Lineafterteam from "./componentsw3/Lineafterteam";
import Last from "./componentsw3/Last";
import Afterwork from "./componentsw3/Afterwork";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-gray-800 antialiased">
      {/* Header with mobile navigation state passed down */}
      <Header isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />

      {/* Main content wrapper with responsive max-width and dynamic padding */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-20">
        <About />
        <Afterabout />
        <Team />
        <Lineafterteam />
        <Work />
        <Afterwork />
        <Pricing />
        <Contact />
      </main>

      {/* Footer sections */}
      <footer className="w-full mt-16 md:mt-24">
        <Footer />
        <Last />
      </footer>
    </div>
  );
}
