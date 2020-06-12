import { UserModel } from '../models/user/user-model'
import { GroupModel } from '../models/group/group-model'
import * as logger from "../utils/logger"

const log = logger.getLogger()

export class Generator {
  public static async reset_db() {
    Generator.wipe_db()
    await Generator.generate_groups()
    await Generator.generate_users()
  }


  static wipe_db() {
    try {
      UserModel.deleteMany({}, ()=> {})
      GroupModel.deleteMany({}, ()=> {})
    } catch (e) {
      log.error(e);
    }
  }


  static async generate_groups() {
    const groups = [
      { level: 0, name: "Super User" },
      { level: 1, name: "Admin"},
      { level: 2, name: "Support"},
    ]

    try {
      for (const group of groups) {
        let groupObj = new GroupModel(group)
        await GroupModel.create(groupObj)
        log.debug(`Created group ${group.name}`)
      }
    } catch (e) {
      log.error(e);
    }
  }


  static async generate_users() {
    const users = [
      { name: "Phil Potts", email: "phil@email.com", dob: "1980-01-01", created: Date.now(), updated: Date.now(), group_levels: [0, 1, 2] },
      { name: "Mighty Mouse", email: "mouse@email.com", dob: "1980-02-02", created: Date.now(), updated: Date.now(), group_levels: [0] },
      { name: "Spindly", email: "spindly@email.com", dob: "1980-03-03", created: Date.now(), updated: Date.now(), group_levels: [1]},
      { name: "Namir Sha", email: "namir@email.com", dob: "1980-04-04", created: Date.now(), updated: Date.now(), group_levels: [0, 2] },
      { name: "Peter Roget", email: "peter@email.com", dob: "1980-05-05", created: Date.now(), updated: Date.now(), group_levels: [2] },
    ]

    try {
      for (const user of users) {
        let userObj = new UserModel(user)
        let groups = await GroupModel.find().where('level').in(user.group_levels).exec();

        userObj.groups = groups
        await UserModel.create(userObj)
        log.debug(`Created user ${user.name}`)
      }
    } catch (e) {
      log.error(e);
    }

  }
}
