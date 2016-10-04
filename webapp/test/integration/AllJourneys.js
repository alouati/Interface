jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 documentHeaderSet in the list
// * All 3 documentHeaderSet have at least one documentItemSet

sap.ui.require([
	"sap/ui/test/Opa5",
	"viseo/git/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"viseo/git/test/integration/pages/App",
	"viseo/git/test/integration/pages/Browser",
	"viseo/git/test/integration/pages/Master",
	"viseo/git/test/integration/pages/Detail",
	"viseo/git/test/integration/pages/Create",
	"viseo/git/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "viseo.git.view."
	});

	sap.ui.require([
		"viseo/git/test/integration/MasterJourney",
		"viseo/git/test/integration/NavigationJourney",
		"viseo/git/test/integration/NotFoundJourney",
		"viseo/git/test/integration/BusyJourney",
		"viseo/git/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});