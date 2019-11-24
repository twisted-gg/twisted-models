import * as mongoose from 'mongoose'
import { SubModelOptions } from '../../../models.config'

// Schema definition
export const TftMatchParticipantsTraitsModel = new mongoose.Schema({
  tier_total: {
    type: Number,
    required: true
  },

  name: {
    type: String,
    required: true
  },

  tier_current: {
    type: Number,
    required: true
  },

  num_units: {
    type: Number,
    required: true
  }
}, SubModelOptions)
