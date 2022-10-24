import { Fragment, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { addNotification, getNotifications } from 'model/notifications.reducer'
import { AppDispatch } from 'model'
import configs from 'configs'
import { LIMIT, upsetPagination } from 'model/pagination.reducer'

const { api } = configs
const eventSource = new EventSource(api.notification.SSE)

const NotificationsWatcher = () => {
  const dispatch = useDispatch<AppDispatch>()

  // First-time fetching
  const fetchData = useCallback(async () => {
    try {
      await dispatch(
        getNotifications({
          offset: 0,
          limit: LIMIT,
        }),
      )
      await dispatch(
        upsetPagination({
          offset: LIMIT,
          limit: LIMIT + LIMIT,
        }),
      )
    } catch (er) {
      return window.notify({
        type: 'error',
        description: 'Cannot fetch notifications',
      })
    }
  }, [dispatch])
  // Watch account changes
  const watchData = useCallback(async () => {
    eventSource.onmessage = async ({ data }) => {
      const notification = JSON.parse(data)
      await dispatch(addNotification({ id: notification._id, notification }))
    }
  }, [dispatch])

  useEffect(() => {
    fetchData()
    watchData()
  }, [fetchData, watchData])

  return <Fragment />
}

export default NotificationsWatcher
