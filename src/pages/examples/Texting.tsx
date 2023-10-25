import React from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import _ from "lodash";
import { Article, CopyBlock } from "../../ui";
import styled from "styled-components";

const textState = atom({
  key: "textState",
  default: "",
});

/**
 * selector는 컴포넌트의 Hook과 비슷한 개념
 */
const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

function TextingPage() {
  const [text, setText] = useRecoilState(textState);
  const count = useRecoilValue(charCountState);

  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  const debouncedSearch = React.useMemo(
    () =>
      _.debounce((text) => {
        setText(text);
      }, 1),
    [text]
  );
  //@ts-ignore

  return (
    <div>
      <StyledChunk>
        <input type="text" value={text} onChange={changeText} />
        <br />
        Echo: {text}
        <br />
        Count: {count}
      </StyledChunk>
      <Article>
        <CopyBlock
          text={`const [text, setText] = useRecoilState(textState);`}
        />
        <p>
          컴포넌트가 atom을 읽고 쓰게 하기 위해서는{" "}
          <code>useRecoilState()</code>를 사용합니다.
        </p>

        <CopyBlock
          text={`const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});`}
        />
        <p>
          <code>key</code>값은 고유한 값을 줍니다. <code>default</code>는
          초기값을 줍니다.
        </p>
      </Article>
    </div>
  );
}

export default TextingPage;
const StyledChunk = styled.div`
  padding: 24px 0;
`;
