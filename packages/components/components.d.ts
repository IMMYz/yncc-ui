import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    CcButton: typeof components.Button;
    CcIcon: typeof components.Icon;
    CcInput: typeof components.CcInput;
  }
}
export { };

