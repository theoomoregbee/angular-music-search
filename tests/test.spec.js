/**
 * Created by theophy on 17/03/2017.
 */
// Be descriptive with titles here. The describe and it titles combined read like a sentence.
describe('Testing Karma', function() {
    it('has a dummy spec to test 2 + 2', function() {
        // An intentionally failing test. No code within expect() will never equal 4.
        expect(2+2).toEqual(4);
    });
});