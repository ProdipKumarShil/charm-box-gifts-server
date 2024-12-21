import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createUser = async(req: Request, res: Response) => {
  try {
    const user = await UserServices.createUser(req.body)
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'User create error',
    })
  }
}

const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await UserServices.getUserById(req.params.id)
    if(!user){
      res.status(404).json({
        success: false,
        message: "User not found",
      })
    } else {
      res.status(200).json({
        success: true,
        message: "User found successfully",
        data: user,
      })
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "User found by id error",
    });
  }
}

const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await UserServices.updateUser(req.params.id, req.body)
    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "User updated successfully",
        data: user,
      });
    }
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'User update error'
    });
  }
}

const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await UserServices.deleteUser(req.params.id)
    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "User deleted successfully",
        data: user,
      });
    }
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'User delete error'
    });
  }
}

export const UserControllers = {
  createUser, getUserById, updateUser, deleteUser
}