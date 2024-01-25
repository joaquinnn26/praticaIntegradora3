import { usersModel } from "../../models/users.model.js"

class UsersManager  {
    async findUserByID(id) {
        try {
            const result = await usersModel.findOne({id});
            console.log(result);
            return result;
        } catch (error) {
            console.error(error);
            throw error; 
        }
    }

    async findUserByEmail(email){
        const result = await usersModel.findOne({ email })
        return result
    }

    async createUser(obj){
        const result = await usersModel.create(obj)
        return result
    }

    async findUserByCart(cart){        
        return await usersModel.findOne({cart})
    }
    async findUserByRole(role){
        const result= await usersModel.findOne({role})
        return result
    }
    async updateUser(email, obj) {
        const result = await usersModel.updateOne({ email }, obj);
        return result;
      }  
}

export const uManager = new UsersManager()