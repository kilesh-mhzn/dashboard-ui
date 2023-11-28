export type IconBase = {
  name: string;
  size: "onesize";
};

export type AddIcon = {
  name: "add";
  size: "onesize";
};
export type BackArrowIcon = {
  name: "back-arrow";
  size: "onesize";
};

export type AllIcons = AddIcon | BackArrowIcon;

export type Icons = IconBase & AllIcons;
