import { ApiResponseModelProperty } from '@nestjs/swagger'
import { BaseDTO } from '../../base'

export class MapsDTO extends BaseDTO {
  @ApiResponseModelProperty()
  mapId!: string

  @ApiResponseModelProperty()
  mapName!: string

  @ApiResponseModelProperty()
  notes?: string | null
}
