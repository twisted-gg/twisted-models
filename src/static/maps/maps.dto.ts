import { ApiResponseModelProperty } from '@nestjs/swagger'

export class MapsDTO extends BaseDTO {
  @ApiResponseModelProperty()
  mapId!: string

  @ApiResponseModelProperty()
  mapName!: string

  @ApiResponseModelProperty()
  notes?: string | null
}
