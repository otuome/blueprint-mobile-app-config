var should = require('chai').should(),
  expect = require('chai').expect(),
  request = require('supertest');

describe('Android production config', function(){
  var configData, app;
  beforeEach(function(){
    configData = null;
    app = request('http://localhost:5000');
  });
  it('should return a 200 response', function(done){
    app
    .get('/follywood/production/android/config.json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err,res){
      if (err) return done(err);
      done();
    });
  });
  it('should have the correct value for info.config_version', function(done){
    app
    .get('/follywood/production/android/config.json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err,res){
      if (err) return done(err);
      configData = res.body;
      configData.info.config_version.should.equal('1.0.1');
      done();
    });
  });
  it('should have a production value for urls.api_baseurl', function(done){
    app
    .get('/follywood/production/android/config.json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err,res){
      if (err) return done(err);
      configData = res.body;
      configData.urls.api_baseurl.should.equal('http://api.acme.com/android');
      done();
    });
  });
  it('should have a production value for urls.search', function(done){
    app
    .get('/follywood/production/android/config.json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err,res){
      if (err) return done(err);
      configData = res.body;
      configData.urls.search.should.equal('http://gsa.acme.com');
      done();
    });
  });
  it('should have a production value for urls_tv.api_baseurl', function(done){
    app
    .get('/follywood/production/android/config.json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err,res){
      if (err) return done(err);
      configData = res.body;
      configData.urls_tv.api_baseurl.should.equal('http://api.acme.com/androidtv');
      done();
    });
  });
  it('should have a production value for urls_tv.search', function(done){
    app
    .get('/follywood/production/android/config.json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err,res){
      if (err) return done(err);
      configData = res.body;
      configData.urls_tv.search.should.equal('http://gsa.acme.com');
      done();
    });
  });
  it('should have a valid value for chromecast_receiver', function(done){
    app
    .get('/follywood/production/android/config.json')
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
    .get('/follywood/production/android/config.json')
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
