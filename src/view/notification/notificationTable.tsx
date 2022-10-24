import type { ColumnsType } from 'antd/es/table'
import moment from 'moment'

import { Table, Image, Typography, Tag } from 'antd'
import Action from './action'
import { NotificationsState } from 'model/notifications.reducer'
import { useNotifications } from 'hooks/useNotifications'

export interface DataType {
  key: React.Key
  time: string
  image: string
  title: string
  description: string
}

export const formatNotificationsData = (
  notifications: NotificationsState,
): DataType[] => {
  const data: DataType[] = []
  for (const key in notifications) {
    const notification = notifications[key]
    data.push({
      key: notification._id,
      time: notification.broadcastedAt,
      image: notification.thumbnail,
      title: notification.title,
      description: notification.content,
    })
  }
  return data
}

const columns: ColumnsType<DataType> = [
  {
    title: 'TIME',
    dataIndex: 'time',
    render: (time: string) => {
      return moment(time).format('MMMM Do YYYY, h:mm')
    },
  },
  {
    title: 'IMAGE',
    dataIndex: 'image',
    render: (image) => {
      return <Image src={image} alt="Notification" />
    },
  },
  {
    title: 'TITLE',
    dataIndex: 'title',
    render: (title) => {
      return (
        <Typography.Title ellipsis level={5}>
          {title}
        </Typography.Title>
      )
    },
    ellipsis: true,
  },
  {
    title: 'DESCRIPTION',
    dataIndex: 'description',
    render: (description) => {
      return (
        <Typography.Text type="secondary" ellipsis>
          {description}
        </Typography.Text>
      )
    },
    ellipsis: true,
  },
  {
    title: 'STATUS',
    dataIndex: 'time',
    render: (time) => {
      const status =
        new Date(time).getTime() > Date.now() ? (
          <Tag color="gold">Pending</Tag>
        ) : (
          <Tag color="green">Sent</Tag>
        )
      return status
    },
  },
  {
    title: 'ACTION',
    dataIndex: 'key',
    render: (key: string) => <Action notificationId={key} />,
  },
]

const NotificationTable = () => {
  const notifications = useNotifications()

  return (
    <Table
      columns={columns}
      dataSource={formatNotificationsData(notifications)}
    />
  )
}

export default NotificationTable
