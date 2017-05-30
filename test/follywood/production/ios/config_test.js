var should = require('chai').should(),
  expect = require('chai').expect(),
  request = require('supertest');

describe('iOS production config', function(){
  var configData, app;
  beforeEach(function(){
    configData = null;
    app = request('http://localhost:5000');
  });
  it('should return a 200 response', function(done){
    app
    .get('/follywood/production/ios/config.json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err,res){
      if (err) return done(err);
      done();
    });
  });
  it('should have the correct value for info.config_version', function(done){
    app
    .get('/follywood/production/ios/config.json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err,res){
      if (err) return done(err);
      configData = res.body;
      configData.info.config_version.should.equal('1.0.2');
      done();
    });
  });
  it('should have a production value for urls.api_baseurl', function(done){
    app
    .get('/follywood/production/ios/config.json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err,res){
      if (err) return done(err);
      configData = res.body;
      configData.urls.api_baseurl.should.equal('http://api.acme.com/ios/');
      done();
    });
  });
  it('should have a production value for urls.shop_url', function(done){
    app
    .get('/follywood/production/ios/config.json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err,res){
      if (err) return done(err);
      configData = res.body;
      configData.urls.shop_url.should.equal('http://shop.acme.com/?ecid=PRF-ACFW-420226&pa=PRF-ACFW-420226');
      done();
    });
  });
  it('should have a production value for twitter.share_baseurl', function(done){
    app
    .get('/follywood/production/ios/config.json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err,res){
      if (err) return done(err);
      configData = res.body;
      configData.socialMedia.twitter.share_baseurl.should.equal('http://www.follywood.com/');
      done();
    });
  });
  it('should have a production value for facebook.share_baseurl', function(done){
    app
    .get('/follywood/production/ios/config.json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err,res){
      if (err) return done(err);
      configData = res.body;
      configData.socialMedia.facebook.share_baseurl.should.equal('http://www.follywood.com/');
      done();
    });
  });
  it('should have a production value for legal.webview_url_eula', function(done){
    app
    .get('/follywood/production/ios/config.json')
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
    .get('/follywood/production/ios/config.json')
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
    .get('/follywood/production/ios/config.json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err,res){
      if (err) return done(err);
      configData = res.body;
      configData.nielsen_app_id.should.equal('T5CFA2B40-4172-481F-B75D-C911B71RO808');
      done();
    })
  });
});
