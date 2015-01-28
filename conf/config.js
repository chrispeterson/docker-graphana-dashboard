define(['settings'],
function (Settings) {
  return new Settings({
    datasources: {
      graphite: {
        type: 'graphite',
        url: "",
      },
      elasticsearch: {
        type: 'elasticsearch',
        url: '',
        index: 'grafana-dash',
        grafanaDB: true
      },
      influxdb: {
        type: 'influxdb',
        url: '',
        username: "root",
        password: "root",
        grafanaDB: true
      }
    },
    default_route: '/dashboard/file/default.json',
    timezoneOffset: null,
    grafana_index: "grafana-dash",
    unsaved_changes_warning: true,
    panel_names: ['text','graphite']
  });
});
