import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  NotificationType,
  upsetNotification,
} from 'model/notifications.reducer'
import { AppDispatch } from 'model'

export type OnUpdateNotificationProps = {
  _id: string
  type?: NotificationType
  sender: string
  title: string
  content: string
  action: string
  broadcastedAt: string
}
export const useUpdateNotification = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch<AppDispatch>()

  const onUpdateNotification = useCallback(
    async (data: OnUpdateNotificationProps) => {
      try {
        setLoading(true)
        await dispatch(upsetNotification(data))
        window.notify({ type: 'success', description: 'Update notification' })
      } catch (err) {
        window.notify({ type: 'error', description: `${err}` })
      } finally {
        setLoading(false)
      }
    },
    [dispatch],
  )

  return { onUpdateNotification, loading }
}
