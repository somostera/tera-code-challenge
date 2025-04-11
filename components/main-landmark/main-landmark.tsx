import { PropsWithChildren } from "react";

export function MainLandmark({ children }: PropsWithChildren) {
  return <main id="main-content">{children}</main>;
}
