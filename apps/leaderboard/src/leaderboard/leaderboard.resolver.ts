import * as graphql from "@nestjs/graphql";
import { LeaderboardResolverBase } from "./base/leaderboard.resolver.base";
import { Leaderboard } from "./base/Leaderboard";
import { LeaderboardService } from "./leaderboard.service";

@graphql.Resolver(() => Leaderboard)
export class LeaderboardResolver extends LeaderboardResolverBase {
  constructor(protected readonly service: LeaderboardService) {
    super(service);
  }
}
