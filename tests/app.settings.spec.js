/**
 * Created by theophy on 18/03/2017.
 */
describe('App Settings', function () {
    var Constants;

    // Before each test load our angular module
    beforeEach(angular.mock.module('MusicSearch'));

    beforeEach( inject(function (_Constants_) {
        Constants =_Constants_;
    }));

    /**
     * used for checking all possible test for Constants
     */
    describe('Constants', function () {
        it('should return object containing DEFAULT_TYPEHEAD_ITEM that is a number',function(){
            expect(Constants.DEFAULT_TYPEHEAD_ITEM).toEqual(jasmine.any(Number));
        });
    });


});