import { getModelToken } from '@nestjs/mongoose'
import { ModelsName } from '../enum/collections.enum'

export const useValue = {
  findOne: () => Promise.resolve(),
  find: () => Promise.resolve(),
  create: () => Promise.resolve(),
  countDocuments: () => Promise.resolve()
}

export const DatabaseTestProviders = [
  {
    provide: getModelToken(ModelsName.TFT_MATCH),
    useValue
  },
  {
    provide: getModelToken(ModelsName.SUMMONER),
    useValue
  },
  {
    provide: getModelToken(ModelsName.SUMMONER_LEAGUES),
    useValue
  },
  {
    provide: getModelToken(ModelsName.STATIC_QUEUES),
    useValue
  },
  {
    provide: getModelToken(ModelsName.STATIC_MAPS),
    useValue
  },
  {
    provide: getModelToken(ModelsName.STATIC_SEASONS),
    useValue
  },
  {
    provide: getModelToken(ModelsName.STATIC_TFT_ITEM),
    useValue
  },
  {
    provide: getModelToken(ModelsName.TFT_SUMMONER_STATS),
    useValue
  }
]
