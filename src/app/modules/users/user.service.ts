import { IUser } from "./user.interface"
import { User } from "./user.model"

const createUser = async (userData: IUser) => {
  return await User.create(userData)
}

const getUserById = async (id: string) => {
  return await User.findById(id)
}

const updateUser = async(id: string, updateData: IUser) => {
  return await User.findByIdAndUpdate(id, updateData)
}

const deleteUser = async(id: string) => {
  return await User.findByIdAndDelete(id)
}

export const UserServices = {
  createUser, getUserById, updateUser, deleteUser
}