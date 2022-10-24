import { env, net } from '@sentre/senhub'

import manifest from './manifest.config'
import sol from './sol.config'
import api from './api.config'
import admin from './admin.config'

const configs = {
  manifest: manifest[env],
  sol: sol[net],
  api: api[env],
  admin: admin[env],
}

/**
 * Module exports
 */
export default configs
