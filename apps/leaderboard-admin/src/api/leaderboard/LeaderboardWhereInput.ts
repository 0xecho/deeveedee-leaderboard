import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LeaderboardWhereInput = {
  id?: StringFilter;
  max_credits?: StringNullableFilter;
  name?: StringNullableFilter;
  timeSurvived?: StringNullableFilter;
};
