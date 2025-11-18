//create a class that implements the AuthService interface
import bcrypt from "bcryptjs";
import { UserRepository } from "../../repository/user.repository";
import { IAuthService, CreateUserDTO } from "./auth.interface";


export class AuthenticationService implements IAuthService {
    private userRepository:UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(input:CreateUserDTO):Promise<any> {
        //validate the input
      try{
        const {firstName, lastName, email, password} = input;

        if(!firstName || !lastName || !email || !password) {
            throw new Error("All fields are required");
        }

        //check if the user is already existing
        //we are going to use a repository pattern to check if the user is already existing
        const existingUser = await this.userRepository.findByEmail(email);
        if(existingUser){
            throw new Error("User already exists with this email, please use a different email or login");
        }

        //hash the password
        const saltRounds = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        //create the user
        const newUser = await this.userRepository.createUser({
            firstName,
            lastName,
            email,
            password:hashedPassword
        });

        return newUser;

      }catch(error){
        console.log(`Error creating user: ${error}`);
        throw error;
      }

        
    }

    
   
}