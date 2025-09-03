/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4211973593")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select1466534506",
    "maxSelect": 2,
    "name": "role",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "admin",
      "owner"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4211973593")

  // remove field
  collection.fields.removeById("select1466534506")

  return app.save(collection)
})
