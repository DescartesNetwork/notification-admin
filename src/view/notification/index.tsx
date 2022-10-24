import { Col, Row, Typography } from 'antd'

import NewNotification from './newNotification'
import NotificationTable from './notificationTable'
import SearchAndFilter from './searchAndFilter'

const Notication = () => {
  return (
    <Row gutter={[24, 24]}>
      <Col>
        <Typography.Title level={1}>Notifications</Typography.Title>
      </Col>
      <Col span={24}>
        <Row>
          <Col span={8}>
            <SearchAndFilter />
          </Col>
          <Col flex="auto">
            <NewNotification />
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <NotificationTable />
      </Col>
    </Row>
  )
}

export default Notication
