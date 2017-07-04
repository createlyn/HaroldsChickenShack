//= include ../../../bower_components/jquery/dist/jquery.js

jQuery ( function($) {

	var site = new SiteController($);
	site.init();

});

function SiteController($)
{
	self.init = function()
	{}
	return self;
}
