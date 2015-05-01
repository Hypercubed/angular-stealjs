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
System.paths["bower_components/bootstrap/dist/fonts/*"] = "fonts/*";
System.paths["bower_components/bootstrap/dist/fonts/*.ttf"] = "fonts/*.ttf";