import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'

import { AppDispatch } from 'model'
import {
  createNotification,
  NotificationType,
} from 'model/notifications.reducer'

export type OnCreateNotificationProps = {
  type?: NotificationType
  sender: string
  thumbnail?: string
  title: string
  content: string
  action: string
  broadcastedAt: string
}
export const useCreateNotification = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch<AppDispatch>()

  const onCreateNotification = useCallback(
    async (data: OnCreateNotificationProps) => {
      try {
        setLoading(true)
        await dispatch(createNotification(data))
        window.notify({ type: 'success', description: 'Create notification' })
      } catch (err) {
        window.notify({ type: 'error', description: `${err}` })
      } finally {
        setLoading(false)
      }
    },
    [dispatch],
  )

  return { onCreateNotification, loading }
}
