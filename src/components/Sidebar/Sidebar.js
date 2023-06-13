import React, { useState } from "react";
import { useLocation, NavLink, useHistory } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Sidebar({ color, image, routes , link }) {
  const location = useLocation();

  const [LE_link_active, setLE_link_active] = useState("");

  let history = useHistory();

  // used
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };

  return (
    <div className="sidebar" data-image={image} data-color={color}>
      <div className="sidebar-background" />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <p className="simple-text" style={{ margin: "auto" }}>
            Tansvision
          </p>
        </div>
        <Nav>
          {routes.map((prop, key) => {
            if (!prop.redirect)
              return (
                <li
                  className={
                    prop.upgrade
                      ? "active active-pro"
                      : activeRoute(prop.layout + prop.path)
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                  {/* when the child link is an id this code block will run */}
                  {prop.Id_children ? (
                    <ul style={{ textDecoration: "none", listStyle: "none" }}>
                      {prop.Id_children.map((child, key) => {
                        return (
                          <li
                            onClick={() => {
                              setLE_link_active(child);
                              history.push(`${prop.layout + prop.path}`)
                            }}
                            key={key}
                            style={{
                              textDecoration: "none",
                              color:
                                LE_link_active === child ? "white" : "gray",
                            }}
                          >
                            <a
                              href={`#${child}`}
                              style={{
                                color:
                                  LE_link_active === child ? "white" : "black",
                              }}
                            >
                              {child}
                            </a>
                          </li>
                        );
                      })}{" "}
                    </ul>
                  ) : null}
                  {/* when the child link is a seperate route this code block will run */}
                    {prop.Link_children ? (
                      <ul style={{ textDecoration: "none", listStyle: "none" }}>
                        {prop.Link_children.map((child, key) => {
                          return (
                            <li
                              onClick={() => {
                                setLE_link_active(child);
                              }}
                              key={key}
                              style={{
                                textDecoration: "none",
                                color:
                                  LE_link_active === child ? "white" : "gray",
                              }}
                            >
                              <NavLink
                                onClick={()=>console.log(`${prop.layout + prop.path + "/" + child}`)}
                                to={`${prop.layout + prop.path + "/" + child}`}
                                style={{color: "black"}}
                                activeClassName="active"
                              >
                                <p style={{margin:0}}>{child}</p>
                              </NavLink>
                            </li>
                          );
                        })}{" "}
                      </ul>
                    ) : null}
                </li>
              );
            return null;
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
