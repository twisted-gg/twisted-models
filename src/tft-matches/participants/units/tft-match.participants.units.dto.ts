import { ApiResponseModelProperty } from '@nestjs/swagger'
import { StaticTftItemsDTO } from '../../../static'

export class TftMatchParticipantsUnitsDTO {
  @ApiResponseModelProperty()
  tier!: Number

  @ApiResponseModelProperty({
    type: [StaticTftItemsDTO]
  })
  items!: StaticTftItemsDTO[]

  @ApiResponseModelProperty()
  character_id!: String

  @ApiResponseModelProperty()
  name!: String

  @ApiResponseModelProperty()
  rarity!: Number
}
