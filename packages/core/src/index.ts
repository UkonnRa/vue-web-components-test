import { defineCustomElement } from "vue";
import { ButtonBase as ButtonBaseComponent } from "./Button";

export { type ButtonBaseProps } from "./Button";

export const ButtonBase = defineCustomElement(ButtonBaseComponent);

export const initialize = () => {
  customElements.define("dn-button-base", ButtonBase);
};
