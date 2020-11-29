import React from "react";

export interface IGridProps extends React.PropsWithChildren<any> {
  spacing?: {
    x?: number;
    y?: number;
  };
  cols?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

const defaultProps = {
  spacing: {
    x: 1,
    y: 1,
  },
  cols: {
    xs: 1,
    sm: 2,
    md: 2,
    lg: 3,
    xl: 3,
  },
};

export function Grid(props: IGridProps) {
  const cols = props.cols || defaultProps.cols;
  const spacing = props.spacing || defaultProps.spacing;
  const className = `w-1/${cols.xs} sm:w-1/${cols.sm} md:w-1/${cols.md} lg:w-1/${cols.lg} xl:w-1/${cols.xl} px-${spacing.x} py-${spacing.y}`;
  const gridSpacing = className.split("1/1").join("full");
  return (
    <div
      className={`sm:-mx-${spacing.x} -my-${spacing.y} mx-0 flex flex-wrap`}
      role="feed"
      aria-label={props["aria-label"]}>
      {React.Children.map(props.children, (child: React.ReactElement<any>) => (
        <div className={gridSpacing}>{child}</div>
      ))}
    </div>
  );
}
