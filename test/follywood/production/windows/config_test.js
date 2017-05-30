var should = require('chai').should(),
  expect = require('chai').expect(),
  request = require('supertest');

describe('Windows production config', function(){
  var configData;
  var app;
  beforeEach(function(){
    configData = null;
    app = request('http://localhost:5000');
  });
  it('should return a 200 response', function(done){
    app
    .get('/follywood/production/windows/config.json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err,res){
      if (err) return done(err);
      done();
    });
  });
  it('should have a production value for urls.api_baseurl', function(done){
    app
    .get('/follywood/production/windows/config.json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err,res){
      if (err) return done(err);
      configData = res.body;
      configData.urls.api_baseurl.should.equal('http://api.acme.com');
      done();
    });
  });
  it('should have a production value for legal.webview_url_help', function(done){
    app
    .get('/follywood/production/windows/config.json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err,res){
      if (err) return done(err);
      configData = res.body;
      configData.legal.webview_url_help.should.equal('http://www.acme.com/follywood/mobile/help/about');
      done();
    });
  });
  it('should have the correct value for urls.channelfinder_baseurl', function(done){
    app
    .get('/follywood/production/windows/config.json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err,res){
      if (err) return done(err);
      configData = res.body;
      configData.urls.channelfinder_baseurl.should.equal('http://acmefeed.channelfinder.net');
      done();
    });
  });
  it('should have the correct value for urls.pcs_baseurl', function(done){
    app
    .get('/follywood/production/windows/config.json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err,res){
      if (err) return done(err);
      configData = res.body;
      configData.urls.pcs_baseurl.should.equal('http://pcs.acme.com/user-restrictions');
      done();
    });
  });
  it('should have the correct value for analytics.rsid', function(done){
    app
    .get('/follywood/production/windows/config.json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err,res){
      if (err) return done(err);
      configData = res.body;
      configData.analytics.rsid.should.equal('fsfollywoodwin8prod');
      done();
    });
  });
});
