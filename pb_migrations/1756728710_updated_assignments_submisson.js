/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2088546089")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3229316009",
    "hidden": false,
    "id": "relation3516072696",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "assignment_id",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation3415494426",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "student_id",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "file513367423",
    "max": 100000,
    "min": 0,
    "name": "submission_file",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2088546089")

  // remove field
  collection.fields.removeById("relation3516072696")

  // remove field
  collection.fields.removeById("relation3415494426")

  // remove field
  collection.fields.removeById("file513367423")

  return app.save(collection)
})
