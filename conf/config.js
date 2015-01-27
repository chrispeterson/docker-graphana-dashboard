define(['settings'],
function (Settings) {
  return new Settings({
    datasources: {
      graphite: {
        type: 'graphite',
        url: "",
      }
    },
    default_route: '/dashboard/file/default.json',
    timezoneOffset: null,
    grafana_index: "grafana-dash",
    unsaved_changes_warning: true,
    panel_names: ['text','graphite']
  });
});
