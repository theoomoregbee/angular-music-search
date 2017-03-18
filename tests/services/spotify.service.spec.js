/**
 * Created by theophy on 18/03/2017.
 */
describe('Spotify Service', function () {
    var Spotify, promise;

    // Before each test load our angular module
    beforeEach(angular.mock.module('MusicSearch'));

    beforeEach(inject(function (_Spotify_, $q) {
        Spotify = _Spotify_;

        //fake promise call
        promise = $q.when({});
        spyOn(Spotify, "search").and.returnValue(promise);
        spyOn(Spotify, "getAlbums").and.returnValue(promise);
    }));


    it('search types should return allowed types from spotify doc', function () {
        expect(Spotify.searchTypes).toContain("artist");
        expect(Spotify.searchTypes).toContain("album");
        expect(Spotify.searchTypes).toContain("playlist");
        expect(Spotify.searchTypes).toContain("track");

        expect(Spotify.searchTypes.length).toEqual(4);
    });

    it('api endpoint url should exist', function () {
        expect(Spotify.ENDPOINT).toBeDefined();
    });

    it('should contain function to call albums, and it works asynchronously', function () {
        expect(Spotify.getAlbums).toEqual(jasmine.any(Function));
        expect(Spotify.getAlbums()).toEqual(promise);
    });

    it('should contain function to search, and it works asynchronously', function () {
        expect(Spotify.search).toEqual(jasmine.any(Function));
        expect(Spotify.search()).toEqual(promise);
    });


});