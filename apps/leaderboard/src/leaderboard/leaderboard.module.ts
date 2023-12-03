import { Module } from "@nestjs/common";
import { LeaderboardModuleBase } from "./base/leaderboard.module.base";
import { LeaderboardService } from "./leaderboard.service";
import { LeaderboardController } from "./leaderboard.controller";
import { LeaderboardResolver } from "./leaderboard.resolver";

@Module({
  imports: [LeaderboardModuleBase],
  controllers: [LeaderboardController],
  providers: [LeaderboardService, LeaderboardResolver],
  exports: [LeaderboardService],
})
export class LeaderboardModule {}
