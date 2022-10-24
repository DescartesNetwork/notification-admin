import { Col, Row, Space, Typography } from 'antd'

const AdminOnly = () => {
  return (
    <Row gutter={[24, 24]}>
      <Col span={24} style={{ height: 32 }} />
      <Col span={24} style={{ textAlign: 'center' }}>
        <Space direction="vertical">
          <Typography.Title level={2} style={{ color: '#fafafa' }}>
            ⚠️ Only used by Sentre's administrators.
          </Typography.Title>
        </Space>
      </Col>
    </Row>
  )
}

export default AdminOnly
