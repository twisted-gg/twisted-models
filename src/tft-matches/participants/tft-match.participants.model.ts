import * as mongoose from 'mongoose'
import { TftMatchParticipantsCompanionModel } from './companion'
import { TftMatchParticipantsUnitsModel } from './units'
import { TftMatchParticipantsTraitsModel } from './traits'
import { SummonerModel } from '../../summoner/summoner.model'
import { SubModelOptions } from '../../models.config'

// Schema definition
export const TftMatchParticipantsModel = new mongoose.Schema({
  placement: {
    type: Number,
    required: true
  },

  level: {
    type: Number,
    required: true
  },

  last_round: {
    type: Number,
    required: true
  },

  time_eliminated: {
    type: Number,
    required: true
  },

  players_eliminated: {
    type: Number,
    required: true
  },

  total_damage_to_players: {
    type: Number,
    required: true
  },

  gold_left: {
    type: Number,
    required: true
  },

  summoner: {
    type: SummonerModel.schema,
    required: true
  },

  companion: {
    type: TftMatchParticipantsCompanionModel,
    required: true
  },

  units: {
    type: [TftMatchParticipantsUnitsModel],
    required: true
  },

  traits: {
    type: [TftMatchParticipantsTraitsModel],
    required: true
  }
}, SubModelOptions)
