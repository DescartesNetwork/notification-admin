import React, { useState } from 'react'

import IonIcon from '@sentre/antd-ionicon'
import { Button, Col, Row } from 'antd'
import NotificationModal from './notificationModal'

const NewNotification = () => {
  const [open, setOpen] = useState(false)
  return (
    <Row justify="end">
      <Col>
        <Button type="primary" onClick={() => setOpen(true)}>
          <IonIcon name="add-outline" />
          Create notification
        </Button>
      </Col>
      <NotificationModal
        open={open}
        setOpen={setOpen}
        title={'Create Notification'}
      />
    </Row>
  )
}

export default NewNotification
