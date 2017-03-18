/**
 * Created by theophy on 17/03/2017.
 */
describe('Album directive', function () {

    var $compile,
        $rootScope;

    // Load the app module, which contains the directive and the template cache
    beforeEach(angular.mock.module('MusicSearch.templates'));
    beforeEach(angular.mock.module('MusicSearch'));

    // so they are available to all tests in this describe block
    beforeEach(inject(function (_$compile_, _$rootScope_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;

        $rootScope.albums = {
            //sample response needed for our directive
            items: [
                {
                    images: [{url: 'http://dummy-image-large'},{url: 'http://dummy-image-mid'},{url: 'http://dummy-image-small'}],
                    external_urls: {spotify: 'http://dummy-album'},
                    name: 'album name',
                    artists: [{external_urls: {spotify: 'http://dummy-artist'}, name: 'artist name'}]
                }
            ]
        };
    }));


    it('check our directive if it is compiling as expected, with the layout expected', function () {
        // Compile a piece of HTML containing the directive
        var element = $compile('<albums data="albums" current-page="count"></albums>')($rootScope);
        // fire all the watches, so the scope expression message, icon, header will be evaluated
        $rootScope.$digest();

        // Check that the compiled element contains the main content user need to see
        expect(element.html()).toContain('<img ng-src="'+$rootScope.albums.items[0].images[1].url+'" alt="'+$rootScope.albums.items[0].name+'" src="'+$rootScope.albums.items[0].images[1].url+'">');
        expect(element.html()).toContain('<a href="'+$rootScope.albums.items[0].external_urls.spotify+'" class="ng-binding">'+$rootScope.albums.items[0].name+'</a>');
        expect(element.html()).toContain('<a href="'+$rootScope.albums.items[0].artists[0].external_urls.spotify+'" class="ng-binding">'+$rootScope.albums.items[0].artists[0].name +'</a>');

        //check if there is pagination
        expect(element.html()).toContain('pagination');

    });


});