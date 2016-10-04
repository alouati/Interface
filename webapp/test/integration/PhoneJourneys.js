jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"viseo/git/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"viseo/git/test/integration/pages/App",
	"viseo/git/test/integration/pages/Browser",
	"viseo/git/test/integration/pages/Master",
	"viseo/git/test/integration/pages/Detail",
	"viseo/git/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "viseo.git.view."
	});

	sap.ui.require([
		"viseo/git/test/integration/NavigationJourneyPhone",
		"viseo/git/test/integration/NotFoundJourneyPhone",
		"viseo/git/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});