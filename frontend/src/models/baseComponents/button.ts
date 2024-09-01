import { MouseEventHandler } from "react";

export interface IButton {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: React.ReactNode;
  type: "submit" | "reset" | "button" | undefined;
}
