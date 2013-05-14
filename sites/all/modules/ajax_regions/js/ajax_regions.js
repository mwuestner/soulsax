
(function ($) {

  /**
   * Regionloader function
   */
  Drupal.ajaxRegions = {
    load: function(url, data, regions, element) {
      data.regionsLoader = regions;
      if (!url) { 
        return;
      }
      if (!element) {
        // Create a dummy element if element is not provided,
        // this is a stupid thing to do and will be removed later
        element = document.createElement('div');
        $(element).css({'display':'none'});
        $('body').append(element);
      }
      if (!$(element).data('ajaxregions')) {
        // We havent bound any ajaxRegions event for this element yet
        var element_settings = {
          'event': 'ajaxregions',
          'progress': { 'type': 'none' },
          'submit': { 'regionsLoader': regions },
          'url': url 
        };
        Drupal.ajax[$(element)] = new Drupal.ajax($(element), element, element_settings);
        $(element).data('ajaxregions', true); 
      }
      // Trigger it immediately
      $(element).trigger("ajaxregions");
    }
  }
}(jQuery));
