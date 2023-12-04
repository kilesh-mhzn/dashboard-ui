import { format } from "date-fns";

export const extractInitials = (fullName: string) => {
  const split = fullName?.split(" ");
  const first = split ? split[0] : ["A", "A"];
  const last = split.reverse()[0];

  return `${first[0]}${last[0]}`.toUpperCase();
};

interface DateFormatterOptions {
  formatString?: string;
}

export const formatDate = (
  timestamp: number | string,
  options?: DateFormatterOptions
): string => {
  const defaultFormatString = "yyyy-MM-dd";
  const { formatString = defaultFormatString } = options || {};

  const date = new Date(Number(timestamp) * 1000);
  return format(date, formatString);
};

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export const debounce = <T extends (...args: any[]) => void>(
//   mainFunction: T,
//   delay: number
// ) => {
//   let timer: ReturnType<typeof setTimeout>;

//   return function (...args: Parameters<T>) {
//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       mainFunction(...args);
//     }, delay);
//   };
// };
