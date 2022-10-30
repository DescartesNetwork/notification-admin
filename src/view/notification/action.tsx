import React, { useState } from 'react'

import { Button, Col, Row, Tooltip } from 'antd'
import IonIcon from '@sentre/antd-ionicon'

import NotificationModal from './notificationModal'
import { useNotifications } from 'hooks/useNotifications'

type ActionProp = {
  notificationId: string
}
const Action = ({ notificationId }: ActionProp) => {
  const { [notificationId]: notification } = useNotifications()
  const [updatingOpen, setUpdatingOpen] = useState(false)
  return (
    <Row gutter={[8, 8]} wrap={false}>
      <Col>
        <Button onClick={() => setUpdatingOpen(true)}>
          <IonIcon name="create-outline" />
        </Button>
        <NotificationModal
          open={updatingOpen}
          setOpen={setUpdatingOpen}
          data={notification}
          title={'Update Notification'}
        />
      </Col>
      <Col>
        <Tooltip title="Delete currently is disabled!">
          <Button disabled={true}>
            <IonIcon name="trash-outline" />
          </Button>
        </Tooltip>
      </Col>
    </Row>
  )
}

export default Action
