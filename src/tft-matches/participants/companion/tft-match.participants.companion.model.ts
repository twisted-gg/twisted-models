import * as mongoose from 'mongoose'
import { SubModelOptions } from '../../../models.config'

// Schema definition
export const TftMatchParticipantsCompanionModel = new mongoose.Schema({
  content_ID: {
    type: String
  },

  skin_ID: {
    type: Number
  },

  species: {
    type: String
  }

}, SubModelOptions)
