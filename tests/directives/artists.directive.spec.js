/**
 * Created by theophy on 17/03/2017.
 */
describe('Artist directive', function () {

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

        $rootScope.artists = {
            //sample response needed for our directive
            items: [
                {
                    images: [{url: 'http://dummy-image-large'}, {url: 'http://dummy-image-mid'}, {url: 'http://dummy-image-small'}],
                    external_urls: {spotify: 'http://dummy-artist'},
                    name: 'album name',
                    followers: {total: 50},
                    genres: ["afro", "rock"],
                    popularity: 70
                }
            ]
        };
    }));


    it('check our directive if it is compiling as expected, with the layout expected', function () {
        // Compile a piece of HTML containing the directive
        var element = $compile('<artists data="artists" current-page="count"></artists>')($rootScope);
        // fire all the watches, so the scope expression message, icon, header will be evaluated
        $rootScope.$digest();

        // Check that the compiled element contains the main content user need to see
        expect(element.html()).toContain('<img src="' + $rootScope.artists.items[0].images[2].url + '" alt="' + $rootScope.artists.items[0].name + '" class="img-circle avatar">');
        expect(element.html()).toContain('<h3 class="ng-binding">' + $rootScope.artists.items[0].name + '</h3>');

        expect(element.html()).toContain('<span class="genres ng-binding">' + $rootScope.artists.items[0].genres.join(", ") + '</span>');
        expect(element.html()).toContain($rootScope.artists.items[0].followers.total);
        expect(element.html()).toContain($rootScope.artists.items[0].popularity);

        //check if there is pagination
        expect(element.html()).toContain('pagination');

        //check if there is a modal in place to view the albums
        expect(element.html()).toContain('modal');

    });


});