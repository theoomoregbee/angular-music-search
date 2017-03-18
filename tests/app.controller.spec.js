/**
 * Created by theophy on 17/03/2017.
 */
describe('Main APP Controllers', function () {
    var MainController, scope, Spotify;

    // Before each test load our angular module
    beforeEach(angular.mock.module('MusicSearch'));

    //call all the possible controllers here
    beforeEach(inject(function ($controller, $rootScope, _Spotify_) {
        scope = $rootScope.$new(); //get a child scope
        Spotify = _Spotify_;
        MainController = $controller("MainController", {$scope: scope});
    }));

    /**
     * used for checking all possible test for MainController
     */
    describe('Main Controller', function () {
        it('default selected filters should be artist and album', function () {
            expect(MainController.selected_filter).toContain("artist");
            expect(MainController.selected_filter).toContain("album");
        });

        it('default selected filters should be artist and album', function () {
            expect(MainController.selected_filter).toContain("artist");
            expect(MainController.selected_filter).toContain("album");
        });


        it('search types should be exactly same from our spotify service', function () {
            for (var i = 0; i < Spotify.searchTypes.length; i++){
                expect(MainController.search_types).toContain(Spotify.searchTypes[i]);
            }

            expect(MainController.search_types.length).toEqual(Spotify.searchTypes.length);
        });

        it('searching should be boolean', function () {
            expect(typeof MainController.searching).toEqual('boolean');
        });



    });


});