import { LeaderboardWhereInput } from "./LeaderboardWhereInput";
import { LeaderboardOrderByInput } from "./LeaderboardOrderByInput";

export type LeaderboardFindManyArgs = {
  where?: LeaderboardWhereInput;
  orderBy?: Array<LeaderboardOrderByInput>;
  skip?: number;
  take?: number;
};
