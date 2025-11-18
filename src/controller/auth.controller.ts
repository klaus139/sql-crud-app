import { Request, Response } from "express";
import { AuthenticationService } from "../service/authentication/auth.service";

export class AuthController {
    private authenticationService:AuthenticationService;

    constructor() {
        this.authenticationService = new AuthenticationService();
    }

    async createUser(req:Request, res:Response):Promise<void> {
        //lets call the service
        try {
            const {firstName, lastName, email, password} = req.body;
            const newUser = await this.authenticationService.createUser({firstName, lastName, email, password});
            res.status(201).json({
                success:true,
                message:"User created successfully",
                data:newUser
            })
        } catch (error) {
            console.log(`Error creating user: ${error}`);
            res.status(500).json({message: "Failed to create user"});
        }
    }
}