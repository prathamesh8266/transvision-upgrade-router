import React, { Component } from "react";
import { useLocation, Route, Switch } from "react-router-dom";
import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import routes from "routes.js";
import UserManagement from "views/UserManagement";

function Admin() {
  const [color, setColor] = React.useState("black");
  const location = useLocation();
  const mainPanel = React.useRef(null);

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);

  return (
    <>
      <div className="wrapper">
        <Sidebar color={color} routes={routes} />
        <div className="main-panel" ref={mainPanel}>
          <AdminNavbar />
          <div className="content">
            <Switch>
              <Route
                path={"/admin/userManagement"}
                render={(props) => <UserManagement {...props} />}
              />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Admin;