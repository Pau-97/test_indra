const { v4 } = require("uuid");
const { userService } = require("../service/userService");

describe("user test", () => {
    test("create user", async () => {
        const user = { name: 'PAU', lastName: 'JIMENEZ', dni: "123232111" }
        
        const createAt = new Date().getTime();
        const id = v4();

        const newUser = {
            userId: id,
            name : user.name,
            lastName: user.lastName,
            dni: user.dni,
            createAt
        }

        const result = {
            ...user,
            createAt,
            userId: id,
        }

        expect(result).toStrictEqual(newUser);
    });

    test("get user", async () => {
        let result = await userService.getUser('d18d7997-1b18-4704-89bc-0982cd89216c')
        expect(result).toBe({
            "user": {
              "status": 200,
              "user": {
                "createAt": 1654567006075,
                "name": "indra",
                "lastName": "carbajal2022",
                "userId": "e28debad-adfb-46f1-bf2d-6756fcc048b0",
                "dni": 111111
              }
            }
          });
    });

    test("get all users", async () => {
        let result = await userService.getUsers()
        expect(result).toBe({
            "user": {
              "status": 200,
              "users": [
                {
                  "name": "cesar",
                  "createAt": 1654561328276,
                  "lastName": "jimenez",
                  "userId": "d18d7997-1b18-4704-89bc-0982cd89216c",
                  "dni": 123443232
                },
                {
                  "createAt": 1654567006075,
                  "name": "indra",
                  "lastName": "carbajal2022",
                  "userId": "e28debad-adfb-46f1-bf2d-6756fcc048b0",
                  "dni": 111111
                },
                {
                  "createAt": 1654558865706,
                  "name": "paulo",
                  "lastName": "carbajal2022",
                  "userId": "5e1e1038-acca-4746-9901-1db392f3489d",
                  "dni": 123443232
                }
              ]
            }
          });
    });

    test("delete user", async () => {
        let result = await userService.deleteUser('e28debad-adfb-46f1-bf2d-6756fcc048b0')
        expect(result).toBe({
            status: 200,
            msg: 'User deleted'
          });
    });

    test("update user",async  () => {
        let result = await userService.updateUser({
            "lastName": "carbajal2022"
          })
        expect(result).toBe({
            "user": {
            "status": 200,
            "msg": "User Updated!!!"
            }
        });
    });


})