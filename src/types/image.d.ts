declare module '*.riv' {
  const value: string;
  export default value;
}

declare module '*.svg?react' {
  const value: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default value;
}
