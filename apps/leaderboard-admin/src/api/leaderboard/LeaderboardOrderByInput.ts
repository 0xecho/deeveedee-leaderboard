import { SortOrder } from "../../util/SortOrder";

export type LeaderboardOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  max_credits?: SortOrder;
  name?: SortOrder;
  timeSurvived?: SortOrder;
  updatedAt?: SortOrder;
};
