import { Request, Response, NextFunction } from 'express';

export const getAllUsers = async (req: Request, res:Response, next: NextFunction) => {
    try {
        const users = await User.find();
        res.status(200).json(
            { success: true,
              data: users 
            }
        );
    } catch (error) {
        next(error);
    }
};