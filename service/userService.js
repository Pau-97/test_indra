const  { userRepository } = require('../repository/userRepository');

const { v4 } = require('uuid');

class UserService {
   
    constructor(){}

    async createUser(user){
        const { name, lastName, dni } = user;
        const createAt = new Date().getTime();
        const id = v4();

        const newUser = {
            userId: id,
            name,
            lastName,
            dni,
            createAt
        }

        await userRepository.createUser(newUser);

        return {
            status: 200,
            user
        }

    }
    
    async deleteUser(id){
        const { Item } = await userRepository.getUser(id);
      
        if(!Item) {
          return {
            status: 400,
            msg: `We can't find the user with this id, ${id}`
          }
        }
        console.log('el id', id)
        await userRepository.deleteUser(id)
      
        return {
          status: 200,
          msg: 'User deleted'
        }
    }
    
    async getUsers(){
        const { Items } = await userRepository.getUsers();
        return {
            status: 200,
            ...((Items.length > 0) ? { users: Items } : {msg: `We don't have users in our database`})
        }
    }
    
    async getUser(id){
        const { Item } = await userRepository.getUser(id);
        if(!Item) {
            return {
                status: 400,
                msg: `We can't find the user with this id, ${id}`
            }
        }

        return {
            status: 200,
            user: Item
        }
    }
    
    async updateUser(id, lastName){
      
        const { Item } = await userRepository.getUser(id);
      
        if(!Item) {
          return {
            status: 400,
            msg: `We can't find the user with this id, ${id}`
          }
        }
        await userRepository.updateUser(id, lastName);
        
        return {
          status: 200,
          msg: 'User Updated!!!'
        }
    }

}


const userService = new UserService();

module.exports = {
  userService
}
