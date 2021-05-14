import http from '@/services/http'

export default {
  getTaskLists: () => {
    return http.get('tasklists')
  },
  getTasks: (tasklist) => {
    if (tasklist === 'all') {
      return http.get(`tasks`)
    } else {
      return http.get(`tasks?idTaskList=${tasklist}`)
    }
  },
  getTask(id) {
    return http.get(`tasks/${id}`)
  }
}
