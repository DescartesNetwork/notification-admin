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
      new PublicKey('2Mdbxjidw1oHPwkSsFqfaFcYHjLUrNdkVt98Xc1K5dac'),
      new PublicKey('2ZBJ4zJ6vyqAeL4HaggYa28VVUsPas4kmXaRJhsJch37'),
      new PublicKey('FProxTjZgWD4Exu1oYNQbJGuixVzEC1n5szu1xdWxVa2'),
    ],
  },

  /**
   * Production configurations
   */
  production: {
    admins: [
      new PublicKey('8W6QginLcAydYyMYjxuyKQN56NzeakDE3aRFrAmocS6D'),
      new PublicKey('2Mdbxjidw1oHPwkSsFqfaFcYHjLUrNdkVt98Xc1K5dac'),
      new PublicKey('2ZBJ4zJ6vyqAeL4HaggYa28VVUsPas4kmXaRJhsJch37'),
      new PublicKey('FProxTjZgWD4Exu1oYNQbJGuixVzEC1n5szu1xdWxVa2'),
    ],
  },
}

/**
 * Module exports
 */
export default conf
