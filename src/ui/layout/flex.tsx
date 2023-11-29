import React, { ReactNode, CSSProperties } from "react";

interface FlexProps {
  className?: string;
  container?: boolean;
  justifyContent?: CSSProperties["justifyContent"];
  flexDirection?: CSSProperties["flexDirection"];
  flexGrow?: CSSProperties["flexGrow"];
  flexBasis?: CSSProperties["flexBasis"];
  flexShrink?: CSSProperties["flexShrink"];
  flexWrap?: CSSProperties["flexWrap"];
  flex?: CSSProperties["flex"];
  alignItems?: CSSProperties["alignItems"];
  margin?: CSSProperties["margin"];
  padding?: CSSProperties["padding"];
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  maxWidth?: CSSProperties["maxWidth"];
  gap?: CSSProperties["gap"];
  children?: ReactNode;
}

export const Flex: React.FC<FlexProps> = (props) => (
  <div
    className={props.className}
    style={{
      display: props.container ? "flex" : "block",
      justifyContent: props.justifyContent || "flex-start",
      flexDirection: props.flexDirection || "row",
      flexGrow: props.flexGrow || 0,
      flexBasis: props.flexBasis || "auto",
      flexShrink: props.flexShrink || 1,
      flexWrap: props.flexWrap || "nowrap",
      flex: props.flex || "0 1 auto",
      alignItems: props.alignItems || "stretch",
      margin: props.margin || "0",
      padding: props.padding || "0",
      width: props.width || "auto",
      height: props.height || "auto",
      maxWidth: props.maxWidth || "none",
      gap: props.gap || "0",
    }}
  >
    {props.children || ""}
  </div>
);
