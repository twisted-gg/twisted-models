import { ApiModelProperty, ApiResponseModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger'
import { IsString, IsNotEmpty, IsEnum, IsOptional } from 'class-validator'
import { Regions } from '@twisted.gg/common/dist/wrapper/constants'
import { GetSummonerLeaguesDTO } from '../summoner-leagues'
import { BaseDTO } from '../base'
import { ListRegions } from '@twisted.gg/common'

// Queries
export class GetSummonerQueryDTO {
  @ApiModelProperty()
  @IsString()
  @IsNotEmpty()
  summonerName!: string

  @ApiModelProperty({
    enum: ListRegions
  })
  @IsEnum(ListRegions)
  @IsNotEmpty()
  region!: Regions

  // Hidden params
  summonerPUUID?: string
}

// Partial
class GetSummonerDTOMatches {
  @ApiResponseModelProperty()
  gameId!: boolean
}

class GetSummonerDTOLeagues {
  @ApiResponseModelProperty({
    type: GetSummonerLeaguesDTO
  })
  queueType!: GetSummonerLeaguesDTO
}

// DTO
export class GetSummonerDTO extends BaseDTO {
  @ApiResponseModelProperty()
  _id!: string

  @ApiResponseModelProperty()
  name!: string

  @ApiResponseModelProperty()
  profileIconId!: number

  @ApiResponseModelProperty()
  summonerLevel!: number

  @ApiResponseModelProperty()
  revisionDate!: number

  @ApiResponseModelProperty()
  id!: string

  @ApiResponseModelProperty()
  puuid!: string

  @ApiResponseModelProperty()
  accountId!: string

  @ApiResponseModelProperty()
  loading!: boolean

  @ApiResponseModelProperty()
  bot!: boolean

  @ApiResponseModelProperty()
  region!: Regions

  @ApiResponseModelProperty({
    type: GetSummonerDTOLeagues
  })
  leagues!: Map<string, GetSummonerDTOLeagues>
}
