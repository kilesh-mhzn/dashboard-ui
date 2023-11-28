import React from "react";
import type { Icons } from "./types";
import { iconMap } from "./map";
export const Icon = ({ name }: { name: Icons["name"] }) => {
  const SvgComponent = iconMap[name];

  return <SvgComponent />;
};
