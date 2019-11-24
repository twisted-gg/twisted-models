import * as mongoose from 'mongoose'
import { QueueModel } from '../../static'
import { ModelsOptions } from '../../models.config'
import { IModels } from '../../database.types'
import { ModelsName } from '../../enum/collections.enum'
import { TftMatchParticipantsModel } from '../participants/tft-match.participants.model'

// Schema definition
const schema = new mongoose.Schema({
  match_id: {
    type: String,
    required: true
  },

  region: {
    type: String,
    required: true
  },

  data_version: {
    type: String,
    required: true
  },

  tft_set_number: {
    type: Number,
    required: true
  },

  game_length: {
    type: Number,
    required: true
  },

  queue: {
    type: QueueModel.schema,
    required: true
  },

  game_version: {
    type: String,
    required: true
  },

  game_datetime: {
    type: Date,
    required: true
  },

  participants: {
    type: [TftMatchParticipantsModel],
    required: true
  },

  participantsIds: {
    type: [mongoose.Types.ObjectId],
    required: true
  }
}, ModelsOptions)

// Model definition
export const TftMatchModel: IModels = {
  name: ModelsName.TFT_MATCH,
  collection: ModelsName.TFT_MATCH,
  schema: schema
}
