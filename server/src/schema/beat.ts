import { objectType } from "nexus"
import { ObjectDefinitionBlock } from "nexus/dist/core"

export const Beat = objectType({
  name: "Beat",
  definition(t) {
    t.string("name")
  },
})

export const useBeatQuery = (t: ObjectDefinitionBlock<"Query">) => {
  t.field("beat", {
    type: Beat,

    resolve() {
      return {
        name: "yo",
      }
    },
  })
}
