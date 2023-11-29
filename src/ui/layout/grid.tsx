import React, { ReactNode, CSSProperties } from "react";

interface GridProps {
  className?: string;
  cols?: number;
  children?: ReactNode;
  alignItems?: CSSProperties["alignItems"];
  margin?: CSSProperties["margin"];
  padding?: CSSProperties["padding"];
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  maxWidth?: CSSProperties["maxWidth"];
  gap?: CSSProperties["gap"];
}

interface GridItemProps {
  colSpan?: number;
  children?: ReactNode;
}

export const GridItem: React.FC<GridItemProps> = ({ colSpan, children }) => (
  <div style={{ gridColumn: `span ${colSpan || 1}` }}>{children}</div>
);

export const Grid: React.FC<GridProps> = (props) => (
  <div
    className={props.className}
    style={{
      display: "grid",
      margin: props.margin || "0",
      padding: props.padding || "0",
      width: props.width || "auto",
      height: props.height || "auto",
      maxWidth: props.maxWidth || "none",
      gap: props.gap || "0",
      gridTemplateColumns: props.cols
        ? `repeat(${props.cols}, minmax(0, 1fr))`
        : "",
    }}
  >
    {props.children || ""}
  </div>
);
