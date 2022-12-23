import { dmsClient } from "@/plugins/axios-config"

export default {
  name: "apiDms",
  async login(payload) {
    const url = "/dms/authenticate"
    return await dmsClient.post(url, payload)
  },
  async logout() {
    const url = "/dms/authenticate"
    return await dmsClient.delete(url)
  },  
  async getUserInfo() {
    const url = "/dms/authenticate"
    return await dmsClient.get(url)
  },
  async getUsers() {
    const url = "/dms/users"
    return await dmsClient.get(url)
  },      
  async getDmsInfo() {
    const url = "/dms/info"
    return await dmsClient.get(url)
  },
  /*
  async getLogs(date, level, hourFrom, hourTo) {
    let url = URL_VALIDATE + "logs/" + date
    return await dmsClient.get(url, {
      headers: {
        level: level,
        from: hourFrom,
        to: hourTo,
      },
    })
  },
  */
}
