import { IStaticTftItemsModel } from '../../../static'
import { IBaseInterface } from '../../../base'

// Interfae definition
export interface ITftMatchUnitsModel extends IBaseInterface {
  tier: number
  items: Partial<IStaticTftItemsModel>[]
  character_id: string
  rarity: number
  name: string
}
