import { Route, Routes, useLocation } from "react-router-dom";
import AnimatedImage from "./AnimatedImage";
import Nav from "./Nav";
import Home from "./Home";
import "./styles.css";
import SideNav from "./SideNav";
import Dashboard from "./Dashboard";
import DashboardLayout from "./DashboardLayout";
import RightNav from "./RightNav";
import { ThemeProvider } from "./ThemeProvider";
import { useEffect, useState } from "react";
import Intro3D from "./Intro3D";
import Hero from "./Hero";
import BounceCards from "./BounceCards";
function App() {
  const images = [
    "public/eeaf5a2f76422a032d12472ff2e328bb.jpg",
    "public/e7a64eb5cbb1ace9faa48cc8358a281b.jpg",
    "public/1b857c45034273728acda012e79dcfe8.jpg",
    "public/d981e0e0dd15b1a76bc11063a4164cd7.jpg",
    "public/76738a3cce94f472c46f3d83aa739e63.jpg",
  ];

  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)",
  ];

  const location = useLocation();
  const isRootPath = location.pathname === "/";
  const [showIntro, setShowIntro] = useState(isRootPath);
  const [showNav, setShowNav] = useState(false);
  const [showSideNavs, setShowSideNavs] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    const navDelay = isRootPath ? 5000 : 0;

    const navTimer = setTimeout(() => {
      setShowIntro(false);
      setShowNav(true);

      setTimeout(() => {
        setShowSideNavs(true);

        setTimeout(() => {
          setShowDashboard(true);
        }, 500);
      }, 500);
    }, navDelay);

    return () => clearTimeout(navTimer);
  }, [isRootPath]);

  return (
    <>
      <ThemeProvider>
        {showIntro && <Intro3D />}
        <AnimatedImage />
        {!showIntro && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(106,133,241,0.3), rgba(244,114,182,0.3))",
              mixBlendMode: "overlay",
              pointerEvents: "none",
              zIndex: -1,
            }}
          />
        )}

        {showNav && <Nav />}

        {showSideNavs && <SideNav />}

        {showSideNavs && <RightNav />}

        {showDashboard && (
          <Routes>
            <Route
              path="/"
              element={
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
              }
            />

            <Route
              path="/pricing"
              element={
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <BounceCards
                    className="custom-bounceCards"
                    images={images}
                    containerWidth={800}
                    containerHeight={400}
                    animationDelay={0.1}
                    animationStagger={0.08}
                    easeType="elastic.out(1, 0.5)"
                    transformStyles={transformStyles}
                    enableHover
                  />
                </div>
              }
            />
            <Route path="/about" element={<Hero />} />

            {/* <Route path="/" element={<Features />} /> */}
            {/* <Route path="/genai" element={<Features />} /> */}
            <Route path="/features" element={<Home />} />
          </Routes>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
