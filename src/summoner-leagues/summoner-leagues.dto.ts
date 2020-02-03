import { ApiResponseModelProperty } from '@nestjs/swagger'
import { BaseDTO } from '../base'

export class GetSummonerLeaguesDTO extends BaseDTO {
  @ApiResponseModelProperty()
  _id!: string

  @ApiResponseModelProperty()
  queueId!: number

  @ApiResponseModelProperty()
  queueType!: string

  @ApiResponseModelProperty()
  mmr!: number

  @ApiResponseModelProperty()
  hotStreak!: boolean

  @ApiResponseModelProperty()
  wins!: number

  @ApiResponseModelProperty()
  veteran!: boolean

  @ApiResponseModelProperty()
  losses!: number

  @ApiResponseModelProperty()
  rank!: number

  @ApiResponseModelProperty()
  leagueId!: string

  @ApiResponseModelProperty()
  inactive!: boolean

  @ApiResponseModelProperty()
  freshBlood!: boolean

  @ApiResponseModelProperty()
  tier!: string

  @ApiResponseModelProperty()
  leaguePoints!: number

  @ApiResponseModelProperty()
  summoner!: string
}
