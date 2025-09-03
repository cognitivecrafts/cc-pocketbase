/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3395098727")

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2607143816",
    "hidden": false,
    "id": "relation1784196621",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "submodule",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3395098727")

  // remove field
  collection.fields.removeById("relation1784196621")

  return app.save(collection)
})
