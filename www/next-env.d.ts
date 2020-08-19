/// <reference types="next" />
/// <reference types="next/types/global" />

interface SvgrComponent
  extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module "*.svg" {
  const value: SvgrComponent;
  export default value;
}

type Children = JSX.Element | string | (JSX.Element | string)[];
