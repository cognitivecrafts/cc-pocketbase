/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2607143816")

  // update collection data
  unmarshal({
    "updateRule": "@request.auth.id != \"\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2607143816")

  // update collection data
  unmarshal({
    "updateRule": "@request.auth.collectionName = \"admin\""
  }, collection)

  return app.save(collection)
})
