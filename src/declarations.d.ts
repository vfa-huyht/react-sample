declare module '*.png'
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.ico';
declare module '*.svg';
declare module '*.scss' {
  export const content: { [className: string]: string };
  export default content;
}
