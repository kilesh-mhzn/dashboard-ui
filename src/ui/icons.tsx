import React from "react";

interface BaseIconProps {
  size?: string;
  color?: string;
  className?: string;
}

export const IconClose: React.FC<BaseIconProps> = ({
  size = "1em",
  color = "currentColor",
  className,
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      fill={color}
      height={size}
      width={size}
      {...props}
    >
      <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
    </svg>
  );
};
export const IconRightChevron: React.FC<BaseIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clip-path="url(#clip0_201_5319)">
        <path
          d="M9.29006 6.71002C8.90006 7.10002 8.90006 7.73002 9.29006 8.12002L13.1701 12L9.29006 15.88C8.90006 16.27 8.90006 16.9 9.29006 17.29C9.68006 17.68 10.3101 17.68 10.7001 17.29L15.2901 12.7C15.6801 12.31 15.6801 11.68 15.2901 11.29L10.7001 6.70002C10.3201 6.32002 9.68006 6.32002 9.29006 6.71002Z"
          fill="#475569"
        />
      </g>
      <defs>
        <clipPath id="clip0_201_5319">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const IconLeftChevron: React.FC<BaseIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clip-path="url(#clip0_201_5315)">
        <path
          d="M14.71 6.70998C14.32 6.31998 13.69 6.31998 13.3 6.70998L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.1 16.91 15.1 16.28 14.71 15.89L10.83 12L14.71 8.11998C15.1 7.72998 15.09 7.08998 14.71 6.70998Z"
          fill="#475569"
        />
      </g>
      <defs>
        <clipPath id="clip0_201_5315">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
