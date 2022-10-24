import { useAppRoute, useWalletAddress } from '@sentre/senhub'
import { Redirect, Route, Switch } from 'react-router-dom'
import { PublicKey } from '@solana/web3.js'

import { Row, Col } from 'antd'
import Notication from './notification'
import AdminOnly from './adminOnly'

import Watcher from 'watchers'
import configs from 'configs'

const {
  admin: { admins },
} = configs

const View = () => {
  const walletAddress = useWalletAddress()
  const { extend } = useAppRoute()

  const index = admins.findIndex((admin) =>
    admin.equals(new PublicKey(walletAddress)),
  )
  if (index < 0) return <AdminOnly />

  return (
    <Row gutter={[24, 24]} align="middle">
      <Col span={24}>
        <Switch>
          <Route path={extend('/notification')} component={Notication} />
          <Redirect
            from="*"
            to={extend('/notification', { absolutePath: true })}
          />
        </Switch>
      </Col>
      {/* In-Background Run Jobs */}
      <Watcher />
    </Row>
  )
}

export default View
