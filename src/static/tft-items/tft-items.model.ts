import * as mongoose from 'mongoose'
import { IModels } from '../../database.types'
import { ModelsName } from '../../enum/collections.enum'
import { ModelsOptions } from '../../models.config'

// Schema definition
const schema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },

  name: {
    type: String,
    required: true
  }
}, ModelsOptions)

// Model definition
export const StaticTftItemsModel: IModels = {
  name: ModelsName.STATIC_TFT_ITEM,
  collection: ModelsName.STATIC_TFT_ITEM,
  schema: schema
}
