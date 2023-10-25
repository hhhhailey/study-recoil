import React from "react";
import styled from "styled-components";

const Article: React.FC<any> = ({ children }) => {
  return <StyledArticle>{children}</StyledArticle>;
};

export default Article;

const StyledArticle = styled.div`
  & > p {
    margin-top: 8px;

    code {
      vertical-align: middle;
      background-color: #f6f7f8;
      border: 0.1rem solid #dddedf;
      border-radius: 12px;
      padding: 4px 8px;
      margin: 0 4px;
    }
  }
`;
