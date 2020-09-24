/*
 data-gaep-section
 data-gaep-destination
 data-gaep-label
*/


var defaultSectionHeader="Header";
var defaultSectionMain="Header";
var defaultSectionFooter="Header";

$(document).on('click', 'a'), function() {
  var sectionContainer = $(this).closest('.sectionContainer');
  var gaepSection = sectionContainer.data('gaepSection');
  var gaepLabel = $(this).data('gaepLabel');
  var gaepDestination = $(this).data('gaepDestination');
  if (typeof gaepSection === undefined) {
    if(
      sectionContainer.hasClass('header') ||
      sectionContainer.attr('id') == 'header') ||
      sectionContainer.is('header')
    ){
      section = defaultSectionHeader
    }
    if(
      sectionContainer.hasClass('main') ||
      sectionContainer.attr('id') == 'main') ||
      sectionContainer.is('main')
    ){
      section = defaultSectionMain;
    }
    if(
      sectionContainer.hasClass('footer') ||
      sectionContainer.attr('id') == 'footer') ||
      sectionContainer.is('footer')
    ){
      section = defaultSectionFooter;
    }
  }

  if (typeof gaepLabel === undefined) {
    gaepLabel = $(this).text();
  }
  if (typeof gaepDestination === undefined) {
    gaepDestination = gaepLabel;
  }
});

		if (typeof console != "undefined") {
			console.log('1st GA Value: '+section+'\n2nd GA Value: '+screenid_name+'\n3rd GA Value: '+screenid);
		}
		//vp_ga_tracking(section,screenid_name,screenid);
});
