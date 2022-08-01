import service from './base.service'

export default class AuthService {
  RESOURCE = 'auth'

  /**
   * login
   * @returns {Promise<AxiosResponse<any>>}
   */
  login(data) {
    return service.post(`${this.RESOURCE}/login`, data);
  }

  /**
   * Logout
   * @returns {Promise<AxiosResponse<any>>}
   */
  logout() {
    return service.post(`${this.RESOURCE}/logout`);
  }

  /**
   * forgot password
   * @returns {Promise<AxiosResponse<any>>}
   */
  forgotPassword(data) {
    return service.post(`${this.RESOURCE}/forgot-password`, data);
  }

  /**
   * reset password
   * @returns {Promise<AxiosResponse<any>>}
   */
  resetPassword(data) {
    return service.post(`${this.RESOURCE}/reset-password`, data);
  }
}