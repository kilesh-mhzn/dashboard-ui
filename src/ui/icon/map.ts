import type { AllIcons } from "./types";
import { AddIcon } from "./raw/add.svg.tsx";
import { BackArrowIcon } from "./raw/arrow/back.svg.tsx";

export const iconMap: Record<AllIcons["name"], () => JSX.Element> = {
  add: AddIcon,
  "back-arrow": BackArrowIcon,
};
