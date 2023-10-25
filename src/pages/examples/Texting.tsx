import React from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import _ from "lodash";
import { CopyBlock, dracula } from "react-code-blocks";

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
      <input type="text" value={text} onChange={changeText} />
      <br />
      Echo: {text}
      <br />
      Count: {count}
      <hr />
      <p>
        컴포넌트가 atom을 읽고 쓰게 하기 위해서는 useRecoilState()를 사용합니다.
      </p>
      <CopyBlock
        language="jsx"
        text={`v := Vertex{X: 1, Y: 2}`}
        codeBlock
        theme={dracula}
        showLineNumbers={false}
      />
    </div>
  );
}

export default TextingPage;
