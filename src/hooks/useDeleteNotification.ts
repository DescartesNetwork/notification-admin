import { AppDispatch } from 'model'
import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'

import { deleteNotification } from 'model/notifications.reducer'

export const useDeleteNotification = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch<AppDispatch>()

  const onDeleteNotification = useCallback(
    async (notificationId) => {
      try {
        setLoading(true)
        await dispatch(deleteNotification({ notificationId }))
        window.notify({ type: 'success', description: 'Delete notification' })
      } catch (err) {
        window.notify({ type: 'error', description: `${err}` })
      } finally {
        setLoading(false)
      }
    },
    [dispatch],
  )

  return { onDeleteNotification, loading }
}
