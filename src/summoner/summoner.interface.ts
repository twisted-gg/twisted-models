import { Regions } from '@twisted.gg/common/dist/wrapper/constants'
import { ISummonerLeagueModel } from '../summoner-leagues/summoner-leagues.interface'
import { IBaseInterface } from '../base'

export interface ISummonerModel extends IBaseInterface {
  name: string
  profileIconId: number
  summonerLevel: number
  revisionDate: number
  id: string
  puuid: string
  accountId: string
  loading?: boolean
  bot?: boolean
  region: Regions
  lolMatches: Map<string, boolean>,
  tftMatches: Map<string, boolean>
  leagues: Map<string, Partial<ISummonerLeagueModel>>
}
