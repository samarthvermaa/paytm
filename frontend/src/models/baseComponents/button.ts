import { MouseEventHandler } from "react";

export interface IButton {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}
