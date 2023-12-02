export const extractInitials = (fullName: string) => {
  const split = fullName?.split(" ");
  const first = split ? split[0] : ["A", "A"];
  const last = split.reverse()[0];

  return `${first[0]}${last[0]}`.toUpperCase();
};
