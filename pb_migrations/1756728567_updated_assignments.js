/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3229316009")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.collectionName = \"admin\"",
    "deleteRule": "@request.auth.collectionName = \"admin\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3229316009")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null
  }, collection)

  return app.save(collection)
})
