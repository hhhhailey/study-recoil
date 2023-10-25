import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../constants/routes";
import styled from "styled-components";

const Sidebar: React.FC<any> = () => {
  const url = window.location.pathname;
  console.log(url, "url");

  return (
    <StyledWrap>
      <h2>Pinea's Recoil Study</h2>
      <ul className="menu-parent">
        {routes.map(({ children, label, route }, i) => (
          <li
            key={i}
            className={url === `/study-recoil${route}` ? "active" : undefined}
          >
            <Link to={route}>{label}</Link>
            <ul className="menu-child">
              {children?.map(({ label, route }, i) => (
                <li
                  key={i}
                  className={
                    url === `/study-recoil${route}` ? "active" : undefined
                  }
                >
                  <Link to={route}>{label}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </StyledWrap>
  );
};

export default Sidebar;

const StyledWrap = styled.div`
  width: 180px;
  height: 100%;
  padding-top: 24px;
  background-color: #001629;
  z-index: 1000;

  h2 {
    color: white;
    padding-left: 12px;
    padding-bottom: 24px;
  }

  ul li {
    color: rgba(255, 255, 255, 0.65);

    &.active {
      & > a {
        background-color: #1890ff;
        color: white;
      }
    }

    a {
      display: block;
      padding: 8px 12px;

      &:hover {
        color: white;
      }
    }
  }

  .menu-child {
    a {
      padding-left: 24px;
    }
  }
`;
