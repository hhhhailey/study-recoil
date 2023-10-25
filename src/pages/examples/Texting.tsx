import React from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import _ from "lodash";

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

  return (
    <div>
      <input type="text" value={text} onChange={changeText} />
      <br />
      Echo: {text}
      <br />
      Count: {count}
    </div>
  );
}

export default TextingPage;
