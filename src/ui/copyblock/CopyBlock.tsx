import React from "react";
import styled from "styled-components";
import { CopyBlock as CB, dracula } from "react-code-blocks";

const CopyBlock: React.FC<any> = ({ text }) => {
  return (
    <StyledWrap>
      <CB
        language="jsx"
        text={text}
        codeBlock
        theme={dracula}
        showLineNumbers
      />
    </StyledWrap>
  );
};

export default CopyBlock;

const StyledWrap = styled.div`
  margin: 12px 0;
`;
