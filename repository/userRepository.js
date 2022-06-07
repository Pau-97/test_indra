const { config } = require('../config');
const AWS = require('aws-sdk');


class UserRepository {
    dynamodb;
    constructor(){
        this.dynamodb = new AWS.DynamoDB.DocumentClient();
    }

    async createUser(user){
        await this.dynamodb.put({
            TableName: config.db.table,
            Item: user
        }).promise();
    }
    
    async deleteUser(id){
        await this.dynamodb.delete({
            TableName: config.db.table,
            Key: { userId:id }
        }).promise();
    }
    
    async getUsers(){
        const items = await this.dynamodb.scan({
            TableName: config.db.table
        }).promise();
        return items;
    }
    
    async getUser(id){
        const item = await this.dynamodb.get({
            TableName: config.db.table,
            Key: {
                userId: id
            }
        }).promise();
        return item;
    }
    
    async updateUser(id, lastName){
        await this.dynamodb.update({
            TableName: 'UserTable',
            Key: { userId: id },
            UpdateExpression: "set lastName = :lastName",
            ExpressionAttributeValues: {
              ":lastName": lastName
            },
            ReturnValues: "ALL_NEW"
        }).promise();
    }

}


const userRepository = new UserRepository();

module.exports = {
    userRepository
}



