import { ApiResponseModelProperty } from '@nestjs/swagger'
import { TftMatchParticipantsUnitsDTO } from './units/tft-match.participants.units.dto'
import { TftMatchParticipantsCompanionDTO } from './companion'
import { GetSummonerDTO } from '../../../../twisted-summoner-api/src/dto/summoner.dto'

export class TftMatchParticipantsModelDto {
  @ApiResponseModelProperty()
  placement!: number

  @ApiResponseModelProperty()
  level!: number

  @ApiResponseModelProperty()
  last_round!: number

  @ApiResponseModelProperty()
  time_eliminated!: number

  @ApiResponseModelProperty({
    type: TftMatchParticipantsCompanionDTO
  })
  companion!: TftMatchParticipantsCompanionDTO

  @ApiResponseModelProperty({
    type: TftMatchParticipantsUnitsDTO
  })
  traits!: TftMatchParticipantsUnitsDTO[]

  @ApiResponseModelProperty()
  players_eliminated!: number

  @ApiResponseModelProperty()
  puuid!: string

  @ApiResponseModelProperty()
  total_damage_to_players!: number

  @ApiResponseModelProperty({
    type: [TftMatchParticipantsUnitsDTO]
  })
  units!: TftMatchParticipantsUnitsDTO[]

  @ApiResponseModelProperty()
  gold_left!: number

  @ApiResponseModelProperty({
    type: GetSummonerDTO
  })
  summoner!: GetSummonerDTO

}
