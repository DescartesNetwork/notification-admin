import { Env } from '@sentre/senhub'
import { PublicKey } from '@solana/web3.js'

/**
 * Contructor
 */

type Conf = {
  admins: PublicKey[]
}

const conf: Record<Env, Conf> = {
  /**
   * Development configurations
   */
  development: {
    admins: [
      new PublicKey('8W6QginLcAydYyMYjxuyKQN56NzeakDE3aRFrAmocS6D'),
      new PublicKey('pkGvE888eDrat79x46p2EmNNYspUsgvLKL9ynU9qSNW'),
      new PublicKey('2Mdbxjidw1oHPwkSsFqfaFcYHjLUrNdkVt98Xc1K5dac'),
    ],
  },

  /**
   * Production configurations
   */
  production: {
    admins: [
      new PublicKey('8W6QginLcAydYyMYjxuyKQN56NzeakDE3aRFrAmocS6D'),
      new PublicKey('pkGvE888eDrat79x46p2EmNNYspUsgvLKL9ynU9qSNW'),
      new PublicKey('2Mdbxjidw1oHPwkSsFqfaFcYHjLUrNdkVt98Xc1K5dac'),
    ],
  },
}

/**
 * Module exports
 */
export default conf
