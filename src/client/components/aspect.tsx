import React from "react";

export interface IAspectProps extends React.PropsWithChildren<any> {
  ratio?: string;
  width?: string;
  center?: boolean;
  label?: string;
  className?: string;
}

export function Aspect(props: IAspectProps) {
  return (
    <div className={`block ${props.className}`} data-component={props.label}>
      <div className={`flex aspect aspect-${props.ratio}`} style={{ width: props.width }}>
        <div
          className={`absolute top-0 left-0 right-0 bottom-0 ${
            props.center ? "flex items-center justify-center" : ""
          }`}>
          {props.children}
        </div>
      </div>
    </div>
  );
}

Aspect.defaultProps = {
  ratio: "square",
  width: "auto",
  center: true,
  label: "Aspect",
  className: "",
};
