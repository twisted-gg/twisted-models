import { Regions } from '@twisted.gg/common/dist/wrapper/constants'
import { ApiResponseModelProperty, ApiModelProperty } from '@nestjs/swagger'
import { QueueDTO } from '../../static'
import { TftMatchParticipantsModelDto } from '../participants'

// Match details
export class TftMatchModelDTO {
  @ApiResponseModelProperty()
  match_id!: string

  @ApiResponseModelProperty({
    type: String
  })
  region!: Regions

  @ApiResponseModelProperty()
  data_version!: string

  @ApiResponseModelProperty()
  tft_set_number!: number

  @ApiResponseModelProperty()
  game_length!: number

  @ApiResponseModelProperty({ type: QueueDTO })
  queue!: QueueDTO

  @ApiResponseModelProperty()
  game_version!: string

  @ApiResponseModelProperty()
  game_datetime!: Date

  @ApiResponseModelProperty({
    type: [TftMatchParticipantsModelDto]
  })
  participants!: TftMatchParticipantsModelDto[]

  @ApiResponseModelProperty()
  participantsIds!: string[]

}

// Listing

export class TftMatchModelDTOListingMatches {
  @ApiResponseModelProperty()
  _id!: string

  @ApiResponseModelProperty()
  datetime!: Date

  @ApiResponseModelProperty()
  version!: string

  @ApiResponseModelProperty()
  length!: number

  @ApiResponseModelProperty({ type: QueueDTO })
  queue!: QueueDTO

  @ApiResponseModelProperty({ type: TftMatchParticipantsModelDto })
  summoner!: TftMatchParticipantsModelDto
}

export class TftMatchModelDTOListing {
  @ApiResponseModelProperty()
  page!: number

  @ApiResponseModelProperty()
  limit!: number

  @ApiResponseModelProperty()
  total!: number

  @ApiResponseModelProperty({
    type: [TftMatchModelDTOListingMatches]
  })
  data!: TftMatchModelDTOListingMatches[]
}
