import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LeaderboardWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
