import React, { useState } from 'react'
import moment from 'moment'
import { useWalletAddress } from '@sentre/senhub'

import {
  Button,
  Col,
  DatePicker,
  DatePickerProps,
  Input,
  Row,
  Space,
  Typography,
} from 'antd'

import { useCreateNotification } from 'hooks/useCreateNotification'
import { useUpdateNotification } from 'hooks/useUpdateNotification'
import { NotificationData } from 'model/notifications.reducer'

type NotificationFormProps = {
  onCancel: () => void
  data?: NotificationData
}
const NotificationForm = ({ onCancel, data }: NotificationFormProps) => {
  const walletAddress = useWalletAddress()
  const [title, setTitle] = useState(data?.title || '')
  const [description, setDescription] = useState(data?.content || '')
  const [time, setTime] = useState(moment(new Date()).format() || '')
  const [action, setAction] = useState(data?.action || '')
  const { onCreateNotification, loading: creatingLoading } =
    useCreateNotification()
  const { onUpdateNotification, loading: updatingLoading } =
    useUpdateNotification()

  const onChange = (time: DatePickerProps['value']) => {
    if (!time) return
    setTime(moment(time).format())
  }

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Space style={{ width: '100%' }} size={8} direction="vertical">
          <Typography.Text type="secondary">Title</Typography.Text>
          <Input
            placeholder="Input title"
            value={title}
            onChange={(val) => setTitle(val.target.value)}
          />
        </Space>
      </Col>
      <Col span={24}>
        <Space style={{ width: '100%' }} size={8} direction="vertical">
          <Typography.Text type="secondary">Description</Typography.Text>
          <Input.TextArea
            placeholder="Input description"
            value={description}
            onChange={(val) => setDescription(val.target.value)}
            rows={3}
          />
        </Space>
      </Col>
      <Col span={24}>
        <Space style={{ width: '100%' }} size={8} direction="vertical">
          <Typography.Text type="secondary">Send time</Typography.Text>
          <DatePicker
            placeholder="Select time"
            onChange={onChange}
            value={moment(time)}
            showNow
            showTime
            style={{ width: '100%' }}
          />
        </Space>
      </Col>
      <Col span={24}>
        <Space style={{ width: '100%' }} size={8} direction="vertical">
          <Typography.Text type="secondary">Action</Typography.Text>
          <Input
            placeholder="Redirect to"
            value={action}
            onChange={(e) => setAction(e.target.value)}
          />
        </Space>
      </Col>
      <Col span={24} style={{ marginTop: 16 }}>
        <Row justify="end" gutter={[8, 8]}>
          <Col>
            <Button onClick={onCancel}>Cancel</Button>
          </Col>
          <Col>
            <Button
              onClick={async () => {
                !data
                  ? await onCreateNotification({
                      sender: walletAddress,
                      title,
                      content: description,
                      action: action,
                      broadcastedAt: time,
                    })
                  : await onUpdateNotification({
                      ...data,
                      sender: walletAddress,
                      title,
                      content: description,
                      action: action,
                      broadcastedAt: time,
                    })
                onCancel()
              }}
              loading={!data ? creatingLoading : updatingLoading}
            >
              Continue
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default NotificationForm
