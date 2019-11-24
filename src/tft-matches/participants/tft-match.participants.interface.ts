
import { ITftMatchCompanionModel } from './companion'
import { ITftMatchTraitsModel } from './traits'
import { ITftMatchUnitsModel } from './units'
import { IBaseInterface } from '../../base'
import { ISummonerModel } from '../summoner'

export interface TftMatchParticipantsModel extends IBaseInterface {
  placement: number
  level: number
  last_round: number
  time_eliminated: number
  companion: Partial<ITftMatchCompanionModel>
  traits: Partial<ITftMatchTraitsModel>[]
  players_eliminated: number
  puuid: string
  total_damage_to_players: number
  units: Partial<ITftMatchUnitsModel>[]
  gold_left: number
  summoner: Partial<ISummonerModel>
}
