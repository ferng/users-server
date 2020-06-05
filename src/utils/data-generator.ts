import { UserModel } from "../models/user/user-model";

export class Generator {

  public static users() {
      const users = [
        { name: "Phil Potts", email: "phil@email.com", dob: "1980-01-01", created: Date.now(), updated: Date.now() },
        { name: "Mighty Mouse", email: "mouse@email.com", dob: "1980-02-02", created: Date.now(), updated: Date.now() },
        { name: "Spindly", email: "spindly@email.com", dob: "1980-03-03", created: Date.now(), updated: Date.now() },
        { name: "Namir Sha", email: "namir@email.com", dob: "1980-04-04", created: Date.now(), updated: Date.now() },
        { name: "Peter Roget", email: "peter@email.com", dob: "1980-05-05", created: Date.now(), updated: Date.now() },
      ]

      try {
        UserModel.deleteMany({}, ()=> {})

        for (const user of users) {
          let userObj = new UserModel(user)
          UserModel.create(userObj)
          console.log(`Created user ${user.name}`)
        }
      } catch (e) {
        console.error(e);
      }

  }

}
