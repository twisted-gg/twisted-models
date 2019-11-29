import { Regions } from '@twisted.gg/common/dist/wrapper/constants'
import { IBaseInterface } from '../../base'
import { IQueueModel } from '../../static'
import { TftMatchParticipantsModel } from '../participants'

export interface ITFTMatchModel extends IBaseInterface {
  match_id: string
  region: Regions
  data_version: string
  tft_set_number: number
  game_length: number
  queue: Partial<IQueueModel>
  game_version: string
  game_datetime: Date
  participants: Partial<TftMatchParticipantsModel>[]
  participantsIds: string[]
}
