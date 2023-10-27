// 고유한 Id 생성을 위한 유틸리티
let id = 0;
export function getId() {
  return id++;
}

// 특정 배열 원소 값 바꾸기
export const replaceItemAtIndex = (
  arr: string[],
  index: number,
  newValue: string
) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

export const removeItemAtIndex = (arr: any[], index: number) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};
