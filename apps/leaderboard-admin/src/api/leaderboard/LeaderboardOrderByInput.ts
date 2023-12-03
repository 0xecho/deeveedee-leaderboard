import { SortOrder } from "../../util/SortOrder";

export type LeaderboardOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
