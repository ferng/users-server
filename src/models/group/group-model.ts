import { model } from "mongoose"
import { IGroupDocument } from "./group-types"
import { GroupSchema } from "./group-schema"

export const GroupModel = model<IGroupDocument>("group", GroupSchema)
