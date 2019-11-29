import * as mongoose from 'mongoose'
import { SubModelOptions, ModelsOptions } from '../models.config'
import { ModelsName } from '../enum/collections.enum'
import { IModels } from '../database.types'

// Sub schemas definition
const averageSchema = new mongoose.Schema({
  goldLeft: {
    type: Number,
    required: true
  },

  level: {
    type: Number,
    required: true
  },

  lastRound: {
    type: Number,
    required: true
  },

  damageToPlayers: {
    type: Number,
    required: true
  }
}, SubModelOptions)

const placementSchema = new mongoose.Schema({
  placement: {
    type: Number,
    required: true
  },

  percentage: {
    type: Number,
    required: true
  },

  total: {
    type: Number,
    required: true
  }
}, SubModelOptions)

const mostUsedTraitsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  num_units: {
    type: Number,
    required: true
  },

  games: {
    type: Number,
    required: true
  }
}, SubModelOptions)

const mostUsedUnitsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  character_id: {
    type: String,
    required: false
  },

  games: {
    type: Number,
    required: true
  },

  tier: {
    type: Number,
    required: true
  }
}, SubModelOptions)

const mostUsedSchema = new mongoose.Schema({
  traits: {
    type: [mostUsedTraitsSchema],
    required: true
  },

  units: {
    type: [mostUsedUnitsSchema],
    required: true
  }
}, SubModelOptions)

// Schema definition
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  conditional: {
    type: String,
    required: false
  },

  summoner: {
    type: mongoose.Types.ObjectId,
    required: true
  },

  queue: {
    type: Number,
    required: true
  },

  games: {
    type: Number,
    required: true
  },

  winrate: {
    type: Number,
    required: true
  },

  playersEliminated: {
    type: Number,
    required: true
  },

  placements: {
    type: [placementSchema],
    required: true
  },

  averages: {
    type: averageSchema,
    required: true
  },

  mostUsed: {
    type: mostUsedSchema,
    required: true
  }
}, ModelsOptions)

// Model definition
export const TftSummonerStatsModel: IModels = {
  name: ModelsName.TFT_SUMMONER_STATS,
  collection: ModelsName.TFT_SUMMONER_STATS,
  schema: schema
}
