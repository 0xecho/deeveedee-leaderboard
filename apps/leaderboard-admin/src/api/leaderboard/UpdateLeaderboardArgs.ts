import { LeaderboardWhereUniqueInput } from "./LeaderboardWhereUniqueInput";
import { LeaderboardUpdateInput } from "./LeaderboardUpdateInput";

export type UpdateLeaderboardArgs = {
  where: LeaderboardWhereUniqueInput;
  data: LeaderboardUpdateInput;
};
