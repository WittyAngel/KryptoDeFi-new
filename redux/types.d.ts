type AuthState = {
  authenticated: boolean
}

type CoinState = {
  coins: Coin[]
}

type RootState = {
  auth: AuthState
  coin: CoinState
}

type Coin = {
  id: string
  symbol: string
  name: string
  logoURI: string
  platforms: {
    [key in string]: string
  }
  address?: string
}
