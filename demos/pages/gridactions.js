/* global $ */
$(function () {
	var layout = {
		"name": "form",
		"$type": "block",
		"$items": [
			{
				"$type": "html",
				"$html": "Grid actions",
				"$style": "bs-widget-title accession-h1",
				"$items": []
			},
			{
				"$type": "block",

				"$items": [
				]
			},
			{
				"$type": "block",
				"$items": [
					{
						"$bind": "Offres",
						"$widget": "basicgrid",
						"$name": "g112",
						"options": {
							"autofocus": true,
							"selecting": {
								"multiselect": true,
								"row": true
							},
							"sorting": true,
							"total": {
								"property": "total"
							},
							"height": "250px",
							"align": "middle",
							"border": true,
							"allowColumnResize": true,
							"headerIsHidden": false,
							"scrolling": {
								"horizontal": true,
								"vertical": true
							},
							"editing": false,

							"toolbar": {
								"parentName": "toolbar",
								"items": [
									{
										"type": "select",
										"title": "Programme",
										"value": {
											"default": "OP0001|VEFA",
											"items": [
												{
													"code": "OP0001|VEFA",
													"lib": "Accession VEFA"
												},
												{
													"code": "OP0001|PSLA",
													"lib": "PSLA"
												}
											]
										}
									},
									{
										"type": "links",
										"options": {
											"icon": "bars",
											"titleIsHidden": false
										},
										"links": [
											{
												"name": "$new",
												"options": {
													"icon": "plus-circle",
													"type": "primary"
												},
												"important": true
											},
											{
												"name": "$remove",
												"options": {
													"icon": "trash",
													"titleIsHidden": true,
													"type": "danger"

												},
												"important": true
											},
											{
												"name": "move",
											},
											{
												"name": "addstar"
											},
											{
												"name": "changelabels"
											},
											{
												"name": "mute"
											},
											{
												"name": "spam"
											}
										]
									},
									{
										"type": "links",
										"right": true,
										"bottom": true,
										"links": [
											{
												"name": "$new",
												"options": {
													"icon": "plus-circle",
													"type": "primary"
												},
												"important": true
											},
											{
												"name": "$remove",
												"options": {
													"icon": "trash",
													"type": "danger"

												},
												"important": true
											}
										]
									}
								]
							},
							"columns": [
								{ "$bind": "Type", "options": { "editing": false, "selecting": false, "width": 120, "frozen": false } },
								{ "$bind": "Libelle", "options": { "width": 200, "frozen": false } },
								{ "$bind": "Date", "options": { "width": "8em" } },
								{ "$bind": "Price", "options": { "width": "10em", "align": "right" } },
								{ "$bind": "VAT", "options": { "width": "10em", "align": "right" } },
								{ "$bind": "Imported", "options": { "width": "4em" } }
							]

						}
					}
				]
			},
			{
				"$type": "block",
				"$title": {
					"value": "Actions",
					"$style": "$spo-h2",
					"size": 4
				},
				"$inline": true,
				"$items": [
					{ "$bind": "$links.testdisable" },
					{ "$bind": "$links.testhidden" },
					{ "$bind": "$links.changeselected" }

				]
			}

		]
	};
	var schema = {
		"type": "object",
		"properties": {
			"OAT": { "title": "OAT", "type": "boolean" },
			"SWAP": { "title": "SWAP", "type": "boolean" },
			"Name": { "title": "Nom", "type": "string" },
			"Offres": {
				"autoSelect": true,
				"syncSelected": false,
				"type": "array",
				"items": { "$ref": "#/definitions/Item" },
				"links": {
					"$new": {
						"title": "Compose"
					},
					"$remove": {
						"title": "Remove",
						"select": {
							"multiselect": false
						}
					},
					"move": {
						"title": "Move",
						"select": {
							"multiselect": false
						}
					},
					"addstar": {
						"title": "Add Star",
						"select": {
							"multiselect": true
						}
					},
					"changelabels": {
						"title": "Change Labels",
						"select": {
							"multiselect": true
						}
					},
					"mute": {
						"title": "Mute",
						"select": {
							"multiselect": true
						}
					},
					"spam": {
						"title": "Report as spam",
						"select": {
							"multiselect": true
						}
					}
				}
			},
			"total": {
				"type": "array",
				"items": { "$ref": "#/definitions/Item" }
			}

		},
		"states": {
			"Name": { "isMandatory": true }
		},
		"links": {
			"testdisable": { "title": "Toggle \"disable\" for action \"Change Labels\"" },
			"testhidden": { "title": "Toggle \"hidden\" for action \"Compose\"" },
			"changeselected": { "title": "Change selected lines" }
		},
		"definitions": {
			"Item": {
				"name": "Item",
				"type": "object",
				"primaryKey": "id",
				"lookups": {
					"OdataCountry": {
						"data": {
							"$type": "odata",
							"$params": {
								"$entity": "Country",
								"$filter": {
									"$left": "code",
									"$op": "eq",
									"$right": "$context.country",
									"$nulls": 'ignore'
								}
							}

						},
						"schema": {
							"type": "object",
							"name": "Country",
							"properties": {
								"documents": {
									"type": "array",
									"items": {
										"type": "object",
										"properties": {
											"code": {
												"type": "string",
												"title": "Code",
												"capabilities": "searchable,sortable,filtrable"
											},
											"title": {
												"type": "string",
												"title": "Description",
												"capabilities": "searchable,sortable,filtrable"
											}
										}
									}
								}
							}
						},
						"primaryKey": "code",
						"mapping": {
							"country": "code",
							"countryTitle": "title"
						}
					}

				},
				"properties": {
					"id": { "type": "integer", "title": "Id." },
					"Type": { "type": "string", title: "Type", "enum": ['oat', 'swap'], "enumNames": ["OAT", "SWAP"], "default": "oat" },
					"Price": { "type": "number", title: "Price", format: "money", maximum: 100000 },
					"idCountry": { "type": "integre", title: "Id Code" },
					"country": { "type": "string", title: "Country Code" },
					"countryTitle": { "type": "string", title: "Country Title" },
					"Imported": { "type": "boolean", title: "Imported" },
					"Date": { "type": "string", title: "Date", format: "date" },
					"Libelle": { "type": "string", title: "Libelle", maxLength: 50 },
					"VAT": { "type": "number", title: "VAT", "decimals": 2 },
					"Selected": { "type": "boolean", title: "Selected" }
				},
				"states": {
					"Imported": { "isReadOnly": false }
				}

			}
		}

	};



	var data = {
		OAT: true, Name: "EEEE",
		Offres: [
			{ id: 1, Libelle: "Offre BP", Type: "oat", Imported: false, Date: "2001-05-11", VAT: 9999.253, Selected: false, Price: 9999.77 },
			{ id: 2, Libelle: "Offre CL", Type: "swap", Imported: true, Date: "2001-05-11", VAT: 33, Selected: true, Price: 102.5 },
			{ id: 3, Libelle: "Offre CE", Type: "oat", Imported: true, Date: "2001-05-11", VAT: 45.22, Selected: false, Price: 58.22 },
			{ id: 4, Libelle: "Offre BP", Type: "oat", Imported: false, Date: "2001-05-11", VAT: 9999.253, Selected: false, Price: 9999.77 },
			{ id: 5, Libelle: "Offre CL", Type: "swap", Imported: true, Date: "2001-05-11", VAT: 33, Selected: true, Price: 102.5 },
			{ id: 6, Libelle: "Offre CE", Type: "oat", Imported: true, Date: "2001-05-11", VAT: 45.22, Selected: false, Price: 99.22 },
			{ id: 7, Libelle: "Offre BP", Type: "oat", Imported: false, Date: "2001-05-11", VAT: 9999.253, Selected: false, Price: 9999.77 },
			{ id: 8, Libelle: "Offre CL", Type: "swap", Imported: true, Date: "2012-05-11", VAT: 33, Selected: true, Price: 102.5 },
			{ id: 9, Libelle: "Offre CE", Type: "oat", Imported: true, Date: "2001-05-11", VAT: 45.22, Selected: false, Price: 958.77 },
			{ id: 10, Libelle: "Offre BP", Type: "oat", Imported: false, Date: "2001-05-11", VAT: 9999.253, Selected: false, Price: 9999.77 },
			{ id: 11, Libelle: "Offre CL", Type: "swap", Imported: true, Date: "2001-05-11", VAT: 33, Selected: true, Price: 102.5 },
			{ id: 12, Libelle: "Offre CE", Type: "oat", Imported: true, Date: "2001-05-11", VAT: 45.22, Selected: false, Price: 88.88 },
			{ id: 13, Libelle: "Offre BP", Type: "oat", Imported: false, Date: "2001-05-11", VAT: 9999.253, Selected: false, Price: 9999.77 },
			{ id: 14, Libelle: "Offre CL", Type: "swap", Imported: true, Date: "2001-05-11", VAT: 33, Selected: true, Price: 102.5 },
			{ id: 15, Libelle: "Offre CE", Type: "oat", Imported: true, Date: "2001-05-11", VAT: 45.22, Selected: false, Price: 9999.77 },
			{ id: 16, Libelle: "Offre BP", Type: "oat", Imported: false, Date: "2001-05-11", VAT: 9999.253, Selected: false, Price: 9999.77 },
			{ id: 17, Libelle: "Offre CL", Type: "swap", Imported: true, Date: "2001-05-11", VAT: 33, Selected: true, Price: 102.5 },
			{ id: 18, Libelle: "Offre CE", Type: "oat", Imported: true, Date: "2001-05-11", VAT: 45.22, Selected: false, Price: 302.5 }

		],
		total: [
			{ VAT: 9999.253, caracTA: { Price: 9999.77 } }

		],
		$links: { "Offres.move": { isDisabled: true } },
		$states: { Offres: { selected: '3', orderby: 'type' } },
		$errors: { "$": [{ severity: "success", "message": "Have a nice day !"}] }
	};

	(function om() {
		var odataProvider = Phoenix.data.odata;

		Phoenix.ui.OpenForm(
			$('#form'), layout, schema, data, {},
			function (action, data, formControl) {
				console.log(action);
				switch (action.property) {
					case "$links.testhidden":
						var oldValue = data.Offres.$links.$new.isHidden;
						formControl.patch([{ path: '/$links/Offres.$new/isHidden', op: 'replace', value: !oldValue }])
						break;
					case "$links.testdisable":
						var oldValueDisabled = data.Offres.$links.changelabels.isDisabled;
						data.Offres.$links.changelabels.isDisabled = !oldValueDisabled;
						break;
					case "$links.changeselected":
						var oldValue = data.Offres.$links.$new.isHidden;
						formControl.patch([{ path: '/$states/Offres/selected', op: 'replace', value: '1,5,9' }])
						break;
					case "Offres.$sort":
						var oldValue = data.Offres.$links.$new.isHidden;
						formControl.patch([{ path: '/$states/Offres/orderBy', op: 'replace', value: action.actionParams }])
						break;
				}
			});
	})();



});

