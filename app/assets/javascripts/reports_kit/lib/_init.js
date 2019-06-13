window.ReportsKit = {};

var turbo_fire_kit = function() {
  $('.reports_kit_report').each(function(index, el) {
    var el = $(el)
    var reportClass = el.data('report-class');
    new ReportsKit[reportClass]().render({ 'el': el });
  });
}

$(document).on('turbolinks:load', turbo_fire_kit);
