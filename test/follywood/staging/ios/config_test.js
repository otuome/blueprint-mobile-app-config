var should = require('chai').should(),
  expect = require('chai').expect(),
  request = require('supertest');

describe('iOS staging config', function(){
  var configData, app;
  beforeEach(function(){
    configData = null;
    app = request('http://localhost:5000');
  });
  it('should return a 200 response', function(done){
    app
    .get('/follywood/staging/ios/config.json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err,res){
      if (err) return done(err);
      done();
    });
  });
  it('should have the correct value for info.config_version', function(done){
    app
    .get('/follywood/staging/ios/config.json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err,res){
      if (err) return done(err);
      configData = res.body;
      configData.info.config_version.should.equal('1.0.2');
      done();
    });
  });
  it('should have a staging value for urls.api_baseurl', function(done){
    app
    .get('/follywood/staging/ios/config.json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err,res){
      if (err) return done(err);
      configData = res.body;
      configData.urls.api_baseurl.should.equal('http://api.staging.acme.com/ios/');
      done();
    });
  });
  it('should have a staging value for twitter.share_baseurl', function(done){
    app
    .get('/follywood/staging/ios/config.json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err,res){
      if (err) return done(err);
      configData = res.body;
      configData.socialMedia.twitter.share_baseurl.should.equal('http://origin.staging.follywood.com/');
      done();
    });
  });
  it('should have a staging value for facebook.share_baseurl', function(done){
    app
    .get('/follywood/staging/ios/config.json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err,res){
      if (err) return done(err);
      configData = res.body;
      configData.socialMedia.facebook.share_baseurl.should.equal('http://origin.staging.follywood.com/');
      done();
    });
  });
  it('should have a staging value for legal.webview_url_eula', function(done){
    app
    .get('/follywood/staging/ios/config.json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err,res){
      if (err) return done(err);
      configData = res.body;
      configData.legal.webview_url_eula.should.equal('http://www.acme.com/eula');
      done();
    });
  });
  it('should have a valid value for chromecast_receiver', function(done){
    app
    .get('/follywood/staging/ios/config.json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err,res){
      if (err) return done(err);
      configData = res.body;
      configData.chromecast_receiver.should.equal('803B4Q51');
      done();
    })
  });
  it('should have a valid value for nielsen_app_id', function(done){
    app
    .get('/follywood/staging/ios/config.json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err,res){
      if (err) return done(err);
      configData = res.body;
      configData.nielsen_app_id.should.equal('T5CFA2B40-4172-481F-B75D-C911B71RO808');
      done();
    })
  });
  it('should have a valid value for adobe_concurrency_app_id', function(done){
    app
    .get('/follywood/staging/ios/config.json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err,res){
      if (err) return done(err);
      configData = res.body;
      configData.adobe_concurrency_app_id.should.equal('786901c5-dfbc-4b88-9340-70119la8228c');
      done();
    })
  });
});
