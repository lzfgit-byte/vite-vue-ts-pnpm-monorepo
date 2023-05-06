// 前端通用工具类
import type { App, Plugin } from 'vue';
export const isFalsity = (val) => val === null || val === undefined || val === 'undefined';
// AB -> 28
export const letter2Num = (str) => {
  let n = 0;
  const s = str.match(/./g); // 求出字符数组
  for (let i = str.length - 1, j = 1; i >= 0; i--, j *= 26) {
    let c = s[i].toUpperCase();
    if (c < 'A' || c > 'Z') {
      return 0;
    }
    n += (c.charCodeAt(0) - 64) * j;
  }
  return n;
};

// 28 -> AB
export const Num2Letter = (num) => {
  let str = '';
  while (num > 0) {
    let m = num % 26;
    if (m === 0) {
      m = 26;
    }
    str = String.fromCharCode(m + 64) + str;
    num = (num - m) / 26;
  }
  return str;
};
export function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(
    (a, b) =>
      (...args) =>
        b(a(...args))
  );
}
export const getCompName = (component) => {
  if (component.name) {
    return component.name;
  }
  if (component.__name) {
    return component.__name;
  }
  console.log(component);
  return '';
};
export const withInstall = (component) => {
  component.install = (app: App): void => {
    app.component(getCompName(component), component);
  };
};
export type SFCWithInstall<T> = T & Plugin;
