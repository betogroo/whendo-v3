import http from '@/services/http'

export default {
  getTasks: () => {
    return http.get('tasks')
  },
  getTask(id) {
    return http.get(`tasks/${id}`)
  }
}
