import http from '@/services/http'

export default {
  getTasks: () => {
    return http.get('tasks')
  }
}
