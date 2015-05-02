require('bower.json!bower');

System.config({
  'meta': {
    'angular': {
      'format': 'global',
      'exports': 'angular'
    }
  }
});

System.paths["bundles/*.css"] ="bundles/*css";
System.paths["bundles/*"] = "bundles/*.js";
