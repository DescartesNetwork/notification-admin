import { useSelector } from 'react-redux'
import { AppState } from 'model'

export const useNotifications = () => {
  const notifications = useSelector((state: AppState) => state.notifications)
  return notifications
}
