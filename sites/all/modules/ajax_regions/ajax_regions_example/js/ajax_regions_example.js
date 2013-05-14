
(function ($) {

  Drupal.behaviors.ajaxRegionsExample = {
    attach: function(context, settings) {

      var regions = new Array();

      for (i in Drupal.settings.ajaxRegionsExample.regions) {
        region = Drupal.settings.ajaxRegionsExample.regions[i];
        regions[i] = {
          selector: '.region-' + region.replace("_", "-"),
          region: region
        };
      }

      var base_element_settings = {
        'event': 'click',
        'progress': { 'type': 'throbber' },
        'submit': { 'regionsLoader': regions }
      };

      // Bind AJAX behaviors to all items showing the class.
      $('a', context).each(function () {
         element_settings = base_element_settings;
         // Set the URL to go to the anchor.
         if ($(this).attr('href')) {
           element_settings.url = $(this).attr('href');
           var base = $(this);
           Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);
         }
       });
    }
  }

} (jQuery));
