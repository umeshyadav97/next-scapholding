import { NetworkManager, API } from "@local/network/core"

export const useSignUpModel = () => {
  const signup = async (values) => {
    const instance = NetworkManager(API.AUTH.SIGNUP)
    return await instance.request(values)
  }

  return {
    signup
  }
}
