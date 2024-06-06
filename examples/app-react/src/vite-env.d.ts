/// <reference types="vite/client" />

import { DOMAttributes } from "react";
import { type ButtonBaseProps } from "@door-knob/core";

type CustomEvents<K extends string> = {
  [key in K]: (event: CustomEvent) => void;
};

type CustomElement<T, K extends string> = Partial<
  T & DOMAttributes<T> & { children: unknown } & CustomEvents<`on${K}`>
>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["dn-button-base"]: CustomElement<ButtonBaseProps, "click">;
    }
  }
}
