import { ApiResponseModelProperty } from '@nestjs/swagger'
import { BaseDTO } from '../../base'

export class QueueDTO extends BaseDTO {
  @ApiResponseModelProperty()
  queueId!: number

  @ApiResponseModelProperty()
  map!: string

  @ApiResponseModelProperty()
  description?: string

  @ApiResponseModelProperty()
  notes?: string
}
