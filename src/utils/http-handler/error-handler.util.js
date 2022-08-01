import {
  Notification
} from 'element-ui';
import {ErrorCode} from "@/constants";

function handleError(_response) {
  let msg = ''
  let errors = []
  let isLogInError = false
  // let dataError = ''
  // let isAuthError = false
  let isForgotPasswordError = false
  // let isChangePasswordError = false
  let isResetPasswordError = false
  // let isRegisterError = false
  // let isGetCurrentUser = false
  if (!_response.response) {
    msg = 'エラーが発生しました。後でもう一度やり直してください。'
  } else {
    isLogInError = _response.response.data.code === ErrorCode.LoginError
    isForgotPasswordError = _response.response.data.code === ErrorCode.ForgotPassword
    isResetPasswordError = _response.response.data.code === ErrorCode.ResetPassword
    if (isLogInError || isResetPasswordError || isForgotPasswordError) return Promise.reject(Array.isArray(errors) && errors.length ? errors : _response.response.data.message)
    const {
      status, data = {}
    } = _response.response || {}
    switch (status) {
      case 400:
        errors = data.data || []
        break
      case 409:
        msg = data.message || ''
        errors = data.data || []
        break
      case 401:
        return window.location.href = `${process.env.VUE_APP_ROOT}auth/login`
      case 403:
      case 404:
        msg = data.message || ''
        break
      case 422:
        msg = data.message || ''
        break
      case 500:
        msg = data.message || ''
        break
    }
  }
  if (errors.length) {
    Notification.error({
      title: 'Error', message: `${errors}`
    });
    return errors
  } else {
    Notification.error({
      title: 'Error', message: `${msg}`
    });
    return msg
  }
}

export {
  handleError
}