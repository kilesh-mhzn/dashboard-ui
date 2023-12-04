export type Package =
  | "Plan 1"
  | "Plan 2"
  | "Plan3"
  | "Plan 6"
  | "Plan 12"
  | "Plan Unlimited";

export type Subscription = {
  id: number;
  user_id: string;
  package: Package;
  expires_on: string;
};
