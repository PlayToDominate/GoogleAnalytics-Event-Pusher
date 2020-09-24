/*
 data-gaep-section
 data-gaep-destination
 data-gaep-label
*/


var defaultSectionHeader="Header";
var defaultSectionMain="Main";
var defaultSectionFooter="Footer";

$(document).on('click', 'a', function() {
  var sectionContainer = $(this).closest('.sectionContainer');
  var gaepSection = sectionContainer.data('gaepSection');
  var gaepLabel = $(this).data('gaepLabel');
  var gaepDestination = $(this).data('gaepDestination');
  if (typeof gaepSection === "undefined") {
    if(
      (sectionContainer.hasClass('header')) ||
      (sectionContainer.attr('id') == 'header') ||
      (sectionContainer.is('header')==true)
    ){
      gaepSection = defaultSectionHeader
    }
    if(
      (sectionContainer.hasClass('main')) ||
      (sectionContainer.attr('id') == 'main') ||
      (sectionContainer.is('main'))
    ){
      gaepSection = defaultSectionMain;
    }
    if(
      (sectionContainer.hasClass('footer')) ||
      (sectionContainer.attr('id') == 'footer') ||
      (sectionContainer.is('footer') == true)
    ){
      gaepSection = defaultSectionFooter;
    }
  }

  if (typeof gaepLabel === "undefined") {
    gaepLabel = $(this).text();
  }
  if (typeof gaepDestination === "undefined") {
    gaepDestination = gaepLabel;
  }

	if (typeof console != "undefined") {
		console.log('1st GA Value: '+gaepSection+'\n2nd GA Value: '+gaepLabel+'\n3rd GA Value: '+gaepDestination);
	}
	//vp_ga_tracking(section,screenid_name,screenid);
});
