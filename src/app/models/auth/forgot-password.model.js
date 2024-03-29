import { NetworkManager, API } from "@local/network/core"

export const useForgotPasswordModel = () => {
  const sendEmail = async (values) => {
    const instance = NetworkManager(API.AUTH.FORGOTPASSWORD)
    return await instance.request(values)
  }

  return {
    sendEmail
  }
}
