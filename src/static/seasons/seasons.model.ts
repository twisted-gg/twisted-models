import * as mongoose from 'mongoose'
import { IModels } from '../../database.types'
import { ModelsOptions } from '../../models.config'
import { ModelsName } from '../../enum/collections.enum'
// Schema definition
const schema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },

  season: {
    type: String,
    required: true
  }
}, ModelsOptions)

// Model definition
export const SeasonsModel: IModels = {
  name: ModelsName.STATIC_SEASONS,
  collection: ModelsName.STATIC_SEASONS,
  schema: schema
}
