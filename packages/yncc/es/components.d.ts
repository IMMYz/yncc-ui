import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    CcButton: typeof components.Button;
    cCIcon: typeof components.Icon;
  }
}
export { };

