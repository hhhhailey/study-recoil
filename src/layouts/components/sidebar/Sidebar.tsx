import React from "react";
import { Link, Router, useParams } from "react-router-dom";
import { routes } from "../../../constants/routes";
import styled from "styled-components";

const Sidebar: React.FC<any> = () => {
  const [_, root, sub1] = window.location.pathname.split("/");
  const url = window.location.pathname;
  console.log(root, "root");
  console.log(sub1, "sub");
  console.log(url, "url");

  return (
    <StyledWrap>
      <ul className="menu-parent">
        {routes.map(({ children, label, route }, i) => (
          <li key={i} className={url === route ? "active" : undefined}>
            <Link to={route}>{label}</Link>
            <ul className="menu-child">
              {children?.map(({ label, route }, i) => (
                <li key={i} className={url === route ? "active" : undefined}>
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
