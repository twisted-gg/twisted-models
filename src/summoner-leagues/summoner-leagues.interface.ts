import { IBaseInterface } from '../base'

export interface ISummonerLeagueModel extends IBaseInterface {
  queueId: number
  queueType: string
  summonerName: string
  hotStreak: boolean
  wins: number
  veteran: boolean
  losses: number
  rank: number
  leagueId: string
  inactive: boolean
  freshBlood: boolean
  tier: string
  summonerId: string
  leaguePoints: number
  summoner?: string
  createdAt: Date
  updatedAt: Date
}
