import React, { PropsWithChildren } from "react";

export interface IHorizontalScrollProps extends PropsWithChildren<any> {}

export function HorizontalScroll(props: IHorizontalScrollProps) {
  return (
    <div role="presentation">
      <div className="flex items-center horizontal-scroll scrolling-touch py-3" role="presentation">
        {props.children}
        <span
          className="pr-48 overflow-hidden invisible opacity-0"
          role="presentation"
          aria-hidden="true">
          <span style={{ marginLeft: "-9999px" }}>|</span>
        </span>
      </div>
    </div>
  );
}
