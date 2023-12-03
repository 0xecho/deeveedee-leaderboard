import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LeaderboardService } from "./leaderboard.service";
import { LeaderboardControllerBase } from "./base/leaderboard.controller.base";

@swagger.ApiTags("leaderboards")
@common.Controller("leaderboards")
export class LeaderboardController extends LeaderboardControllerBase {
  constructor(protected readonly service: LeaderboardService) {
    super(service);
  }
}
