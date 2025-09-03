/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2607143816")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id != \"\"",
    "viewRule": "@request.auth.id != \"\""
  }, collection)

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select2063623452",
    "maxSelect": 1,
    "name": "status",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Completed",
      "In Progress",
      "Pending"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2607143816")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.collectionName = \"admin\"",
    "viewRule": "@request.auth.collectionName = \"admin\""
  }, collection)

  // remove field
  collection.fields.removeById("select2063623452")

  return app.save(collection)
})
