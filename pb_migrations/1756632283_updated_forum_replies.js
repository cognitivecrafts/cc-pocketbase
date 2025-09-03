/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3103266602")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.collectionName = \"admin\"",
    "deleteRule": "@request.auth.collectionName = \"admin\"",
    "listRule": "@request.auth.collectionName = \"admin\"",
    "updateRule": "@request.auth.collectionName = \"admin\"",
    "viewRule": "@request.auth.collectionName = \"admin\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3103266602")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "",
    "listRule": "",
    "updateRule": "",
    "viewRule": ""
  }, collection)

  return app.save(collection)
})
