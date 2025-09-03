/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2088546089")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "date830654268",
    "max": "",
    "min": "",
    "name": "submitted_at",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

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
      "Submitted",
      "Late",
      "Not Submitted"
    ]
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "number848901969",
    "max": 100,
    "min": null,
    "name": "score",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3525919832",
    "max": 100000,
    "min": 0,
    "name": "feedback",
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
  collection.fields.removeById("date830654268")

  // remove field
  collection.fields.removeById("select2063623452")

  // remove field
  collection.fields.removeById("number848901969")

  // remove field
  collection.fields.removeById("text3525919832")

  return app.save(collection)
})
