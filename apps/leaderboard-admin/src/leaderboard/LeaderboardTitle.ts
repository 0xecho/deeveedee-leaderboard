import { Leaderboard as TLeaderboard } from "../api/leaderboard/Leaderboard";

export const LEADERBOARD_TITLE_FIELD = "name";

export const LeaderboardTitle = (record: TLeaderboard): string => {
  return record.name?.toString() || String(record.id);
};
