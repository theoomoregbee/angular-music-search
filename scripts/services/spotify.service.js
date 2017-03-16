/**
 * Created by SQ04 on 3/16/2017.
 * Theophilus Omoregbee <theo4u@ymail.com>
 *
 *
 *     this service is used to interact with spotify endpoints
 */
(function () {
    'use strict';

    angular.module("MusicSearch")
        .factory("Spotify", SpotifyService);

    Spotify.$inject = ["$http"];//inject any external library if need be

    function Spotify($http) {
        var spotify_url = "https://api.spotify.com";
        var searchTypes = ["album", "artist", "playlist", "track"];
        return {
            ENDPOINT: spotify_url,
            searchTypes: searchTypes,
            /**
             * this is used to perform our search to spotify endpoint
             * @param searchTypes array of string of the allowed types of search
             * @param limit default to 20
             * @param offset default to 0
             * @param q search term
             *
             * @return promise
             */
            search: function (searchTypes, q, limit, offset) {
                limit = limit || 20;
                offset = offset || 0;

                var url = spotify_url + "/v1/search";
                /**
                 * let's form our url param
                 */
                var param = {limit: limit, offset: offset, q: q, type: searchTypes.join(",")};

                var send = {
                    method: "GET",
                    url:url,
                    params: $.param(param)
                };

                return $http(send);
            }
        }
    }

})();