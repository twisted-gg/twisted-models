import { IBaseInterface } from '../base'

export interface ISummonerLeagueModel extends IBaseInterface {
  queueId: number
  queueType: string
  mmr: number
  hotStreak: boolean
  wins: number
  veteran: boolean
  losses: number
  rank: string
  leagueId: string
  inactive: boolean
  freshBlood: boolean
  tier: string
  leaguePoints: number
  summoner?: string
  createdAt: Date
  updatedAt: Date
}
