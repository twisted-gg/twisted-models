import * as mongoose from 'mongoose'
import { StaticTftItemsModel } from '../../../static'
import { SubModelOptions } from '../../../models.config'

// Schema definition
export const TftMatchParticipantsUnitsModel = new mongoose.Schema({
  tier: {
    type: Number,
    required: true
  },

  items: {
    type: [StaticTftItemsModel.schema],
    required: true
  },

  character_id: {
    type: String,
    required: false,
    default: ''
  },

  name: {
    type: String,
    required: true
  },

  rarity: {
    type: Number,
    required: false,
    default: 0
  }
}, SubModelOptions)
