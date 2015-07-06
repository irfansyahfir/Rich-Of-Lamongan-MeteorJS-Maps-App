Router.configure({
  layoutTemplate: 'layout'
});

Meteor.startup(function () {
  if (Meteor.isClient) {
    var location = Iron.Location.get();
    if (location.queryObject.platformOverride) {
      Session.set('platformOverride', location.queryObject.platformOverride);
    }
  }
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('actionSheet');
  this.route('backdrop');
  this.route('forms', {
    data: function () {
      return {
        post: Posts.find().fetch()[0]
      };
    }
  });
  this.route('cariPotensi');
  this.route('listPotBm');
  this.route('listPotBlewah');
  this.route('listPotBlimbing');
  this.route('listPotCabeBesar');
  this.route('listPotCabeRawit');
  this.route('listPotJambuAir');
  this.route('listPotJambuBiji');
  this.route('listPotJerukSiam');
  this.route('listPotKacangP');
  this.route('listPotKangkung');
  this.route('listPotKelapa');
  this.route('listPotKetimun');
  this.route('listPotMangga');
  this.route('listPotMelon');
  this.route('listPotNangka');
  this.route('listPotPadi');
  this.route('listPotPepaya');
  this.route('listPotSemangka');
  this.route('listPotSiwalan');
  this.route('listPotTebu');
  this.route('listPotTerong');
  this.route('listPotTomat');
           
           this.route('listKecSukorame');
           this.route('listKecBluluk');
           this.route('listKecNgimbang');
           this.route('listKecSambeng');
           this.route('listKecMantup');
           this.route('listKecKembangbahu');
           this.route('listKecSugio');
           this.route('listKecKedungpring');
           this.route('listKecModo');
           this.route('listKecBabat');
           this.route('listKecPucuk');
           this.route('listKecSukodadi');
           this.route('listKecLamongan');
           this.route('listKecTikung');
           this.route('listKecSarirejo');
           this.route('listKecDeket');
           this.route('listKecGlagah');
           this.route('listKecKarangbinangun');
           this.route('listKecTuri');
           this.route('listKecKalitengah');
           this.route('listKecKaranggeneng');
           /*this.route('listKecSekaran');
           this.route('listKecMaduran');
           this.route('listKecLaren');
           this.route('listKecSolokuro');
           this.route('listKecPaciran');
           this.route('listKecBrondong');*/
           
  this.route('directionPage');
  this.route('headersFooters');
  this.route('lists');
  this.route('loading');
  this.route('modal');
  this.route('navigation');
  this.route('navigation.one', {path: '/navigation/one'});
  this.route('navigation.two', {path: '/navigation/two'});
  this.route('navigation.three', {path: '/navigation/three'});
  this.route('popover');
  this.route('popup');
  this.route('sideMenu');
  this.route('slideBox');
  this.route('tabs.one', {path: '/tabs/one', layoutTemplate: 'tabsLayout'});
  this.route('tabs.two', {path: '/tabs/two', layoutTemplate: 'tabsLayout'});
  this.route('tabs.three', {path: '/tabs/three', layoutTemplate: 'tabsLayout'});
  this.route('tabs.four', {path: '/tabs/four', layoutTemplate: 'tabsLayout'});
  this.route('userAccounts');
});



Router.onBeforeAction(function() {
                      GoogleMaps.load();
                      this.next();
                      }, { only: ['/', 'mapDirection'] });
