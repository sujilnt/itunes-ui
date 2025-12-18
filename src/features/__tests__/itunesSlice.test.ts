import { expect, test, describe, beforeEach } from 'vitest'
import { itunesReducer, setFilters, setItunes, reset, initialState as sliceInitialState, type ItunesState } from '../itunesSlice'

import type { Itunes } from '@api';

const itunes: Itunes = {
    resultCount: 3,
    results: [
        {
            "wrapperType": "track",
            "kind": "feature-movie",
            "trackId": 1534655000,
            "artistName": "Chris Mason Johnson",
            "trackName": "Test",
            "trackCensoredName": "Test",
            "trackViewUrl": "https://itunes.apple.com/us/movie/test/id1534655000?uo=4",
            "previewUrl": "https://video-ssl.itunes.apple.com/itunes-assets/Video114/v4/4d/7b/a5/4d7ba5ce-0da3-f8dd-cc0a-2f6858eb3f5a/mzvf_7693056141673871999.640x480.h264lc.U.p.m4v",
            "artworkUrl30": "https://is1-ssl.mzstatic.com/image/thumb/Video114/v4/b4/b0/a5/b4b0a5a5-b4ed-3a9f-796d-bc491bd810a3/CRM018_77-en-US.jpg/30x30bb.jpg",
            "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Video114/v4/b4/b0/a5/b4b0a5a5-b4ed-3a9f-796d-bc491bd810a3/CRM018_77-en-US.jpg/60x60bb.jpg",
            "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Video114/v4/b4/b0/a5/b4b0a5a5-b4ed-3a9f-796d-bc491bd810a3/CRM018_77-en-US.jpg/100x100bb.jpg",
            "collectionPrice": 9.99,
            "trackPrice": 9.99,
            "trackRentalPrice": 3.99,
            "collectionHdPrice": 9.99,
            "trackHdPrice": 9.99,
            "trackHdRentalPrice": 3.99,
            "releaseDate": "2014-06-06T07:00:00Z",
            "collectionExplicitness": "notExplicit",
            "trackExplicitness": "notExplicit",
            "trackTimeMillis": 5376292,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Drama",
            "contentAdvisoryRating": "Unrated",
            "shortDescription": "Set in the free-spirited San Francisco of 1985 in the early years of the AIDS epidemic, Chris Mason",
            "longDescription": "Set in the free-spirited San Francisco of 1985, Chris Mason Johnson’s Test lovingly portrays this exciting and harrowing era as young Frankie (dancer Scott Marlowe in a breakout acting debut) confronts the challenges of being an understudy in a modern dance company where he’s taunted to “dance like a man!” Frankie embarks on a budding relationship with hunky Todd (Matthew Risch, HBO’s “Looking”), a veteran dancer in the same company and the bad boy to Frankie’s naiveté. As Frankie and Todd’s friendship deepens, they navigate a world of risk — it’s the early years of the epidemic — but also a world of hope, humor, visual beauty and musical relief. The captivating dance sequences were especially choreographed for the film by acclaimed U.S. choreographer Sidra Bell. The film’s vibrant soundtrack includes work by ‘80s icons Jimmy Somerville (Bronski Beat), Klaus Nomi, Romeo Void, Laurie Anderson, Martha and the Muffins, Cocteau Twins and Sylvester."
        },
        {
            "wrapperType": "track",
            "kind": "feature-movie",
            "trackId": 9876543210,
            "artistName": "Alex Rivera",
            "trackName": "Midnight Echoes",
            "trackCensoredName": "Midnight Echoes",
            "trackViewUrl": "https://itunes.apple.com/us/movie/midnight-echoes/id9876543210?uo=4",
            "previewUrl": "https://video-ssl.itunes.apple.com/itunes-assets/Video122/v4/aa/bb/cc/aabbccdd-eeff-1122-3344-556677889900/mzvf_1234567890123456789.640x480.h264lc.U.p.m4v",
            "artworkUrl30": "https://is1-ssl.mzstatic.com/image/thumb/Video122/v4/11/22/33/11223344-5566-7788-99aa-bbccddeeff00/MidnightEchoes_EN.jpg/30x30bb.jpg",
            "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Video122/v4/11/22/33/11223344-5566-7788-99aa-bbccddeeff00/MidnightEchoes_EN.jpg/60x60bb.jpg",
            "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Video122/v4/11/22/33/11223344-5566-7788-99aa-bbccddeeff00/MidnightEchoes_EN.jpg/100x100bb.jpg",
            "collectionPrice": 12.99,
            "trackPrice": 12.99,
            "trackRentalPrice": 4.99,
            "collectionHdPrice": 14.99,
            "trackHdPrice": 14.99,
            "trackHdRentalPrice": 5.99,
            "releaseDate": "2019-10-18T07:00:00Z",
            "collectionExplicitness": "notExplicit",
            "trackExplicitness": "notExplicit",
            "trackTimeMillis": 6423000,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Thriller",
            "contentAdvisoryRating": "PG-13",
            "shortDescription": "A haunting psychological thriller set over one sleepless night in downtown Los Angeles.",
            "longDescription": "Set against the neon-lit streets of Los Angeles, Midnight Echoes follows struggling journalist Noah Pierce as he uncovers a series of cryptic audio recordings tied to a decades-old disappearance. As the night unfolds, Noah is pulled deeper into a web of secrets involving corruption, memory, and guilt. Blending atmospheric visuals with an evocative synth-driven score, the film explores the fragile line between truth and obsession, culminating in a revelation that changes Noah’s life forever."
        },
        {
            "wrapperType": "track",
            "kind": "feature-movie",
            "trackId": 2468013579,
            "artistName": "Jordan Lee Parker",
            "trackName": "Last Light Before Dawn",
            "trackCensoredName": "Last Light Before Dawn",
            "trackViewUrl": "https://itunes.apple.com/us/movie/last-light-before-dawn/id2468013579?uo=4",
            "previewUrl": "https://video-ssl.itunes.apple.com/itunes-assets/Video130/v4/dd/ee/ff/ddeeff00-1122-3344-5566-77889900aabb/mzvf_9988776655443322110.640x480.h264lc.U.p.m4v",
            "artworkUrl30": "https://is1-ssl.mzstatic.com/image/thumb/Video130/v4/aa/bb/cc/aabbccdd-ee11-2233-4455-66778899aabb/LastLight_EN.jpg/30x30bb.jpg",
            "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Video130/v4/aa/bb/cc/aabbccdd-ee11-2233-4455-66778899aabb/LastLight_EN.jpg/60x60bb.jpg",
            "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Video130/v4/aa/bb/cc/aabbccdd-ee11-2233-4455-66778899aabb/LastLight_EN.jpg/100x100bb.jpg",
            "collectionPrice": 10.99,
            "trackPrice": 10.99,
            "trackRentalPrice": 3.49,
            "collectionHdPrice": 13.99,
            "trackHdPrice": 13.99,
            "trackHdRentalPrice": 4.49,
            "releaseDate": "2021-03-12T08:00:00Z",
            "collectionExplicitness": "notExplicit",
            "trackExplicitness": "notExplicit",
            "trackTimeMillis": 5892000,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Romance",
            "contentAdvisoryRating": "PG",
            "shortDescription": "A quiet, intimate love story unfolding during the final hours of a fading relationship.",
            "longDescription": "Last Light Before Dawn follows Emma and Lucas, two longtime partners spending one final night together before life pulls them in separate directions. Through conversations, memories, and unspoken truths, the film captures the beauty and heartbreak of love at its most fragile. With understated performances and a warm, minimalist score, the story reflects on timing, choice, and the moments that linger long after goodbye."
            }
        ]
}

describe("ItunesSlice Test", () => {
    let initialState: ItunesState;

    beforeEach(() => {
        initialState = {
            ...sliceInitialState,
            itunes: {
                ...sliceInitialState.itunes,
                results: [...(sliceInitialState.itunes.results ?? [])]
            },
            filters: {
                ...sliceInitialState.filters
            }
        };
    });

    describe("SET_Itunes reducer", () => {
        test("1. should set itunes data", () => {
            const mockItunes: Itunes = itunes;

            const state = itunesReducer(initialState, setItunes(mockItunes));
            
            expect(state.itunes).toEqual(mockItunes);
            expect(state.itunes.resultCount).toBe(itunes.resultCount);
            expect(state.itunes.results).toHaveLength(3);
        });

        test("2. should replace existing itunes data", () => {
            
           const mockItunes: Itunes = itunes;
           const currentState = { ...initialState, itunes: mockItunes};

            const newItunes: Itunes = {
                resultCount: 1,
                results: [ {
                            "wrapperType": "track",
                        "kind": "feature-movie",
                        "trackId": 1534655000,
                        "artistName": "Chris Mason Johnson",
                        "trackName": "Test",
                        "trackCensoredName": "Test",
                        "trackViewUrl": "https://itunes.apple.com/us/movie/test/id1534655000?uo=4",
                        "previewUrl": "https://video-ssl.itunes.apple.com/itunes-assets/Video114/v4/4d/7b/a5/4d7ba5ce-0da3-f8dd-cc0a-2f6858eb3f5a/mzvf_7693056141673871999.640x480.h264lc.U.p.m4v",
                        "artworkUrl30": "https://is1-ssl.mzstatic.com/image/thumb/Video114/v4/b4/b0/a5/b4b0a5a5-b4ed-3a9f-796d-bc491bd810a3/CRM018_77-en-US.jpg/30x30bb.jpg",
                        "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Video114/v4/b4/b0/a5/b4b0a5a5-b4ed-3a9f-796d-bc491bd810a3/CRM018_77-en-US.jpg/60x60bb.jpg",
                        "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Video114/v4/b4/b0/a5/b4b0a5a5-b4ed-3a9f-796d-bc491bd810a3/CRM018_77-en-US.jpg/100x100bb.jpg",
                        "collectionPrice": 9.99,
                        "trackPrice": 9.99,
                        "trackRentalPrice": 3.99,
                        "collectionHdPrice": 9.99,
                        "trackHdPrice": 9.99,
                        "trackHdRentalPrice": 3.99,
                        "releaseDate": "2014-06-06T07:00:00Z",
                        "collectionExplicitness": "notExplicit",
                        "trackExplicitness": "notExplicit",
                        "trackTimeMillis": 5376292,
                        "country": "USA",
                        "currency": "USD",
                        "primaryGenreName": "Drama",
                        "contentAdvisoryRating": "Unrated",
                        "shortDescription": "Set in the free-spirited San Francisco of 1985 in the early years of the AIDS epidemic, Chris Mason",
                        "longDescription": "Set in the free-spirited San Francisco of 1985, Chris Mason Johnson’s Test lovingly portrays this exciting and harrowing era as young Frankie (dancer Scott Marlowe in a breakout acting debut) confronts the challenges of being an understudy in a modern dance company where he’s taunted to “dance like a man!” Frankie embarks on a budding relationship with hunky Todd (Matthew Risch, HBO’s “Looking”), a veteran dancer in the same company and the bad boy to Frankie’s naiveté. As Frankie and Todd’s friendship deepens, they navigate a world of risk — it’s the early years of the epidemic — but also a world of hope, humor, visual beauty and musical relief. The captivating dance sequences were especially choreographed for the film by acclaimed U.S. choreographer Sidra Bell. The film’s vibrant soundtrack includes work by ‘80s icons Jimmy Somerville (Bronski Beat), Klaus Nomi, Romeo Void, Laurie Anderson, Martha and the Muffins, Cocteau Twins and Sylvester."
                    }]
            };

            const state = itunesReducer(currentState, setItunes(newItunes));
            
            expect(state.itunes).toEqual(newItunes);
            expect(state.itunes.results ?? []).toHaveLength(1);
            expect(state.itunes.results?.[0]?.trackName).toBe("Test");
        });
    });


    describe("Set_Filters reducer", () => {
        test("1. Should Update filters with existing state", () => {
            const existingState: ItunesState = {
                ...initialState,
                filters: {
                    limit: 100,
                    term: "default"
                }
            };

            const state = itunesReducer(existingState, setFilters({ term: "Beatles", limit: 5 }));
            
            expect(state.filters.term).toBe("Beatles");
            expect(state.filters.limit).toBe(5);
        });
    });

    describe("Reset state Reducer", () => {
        test("1. Should reset state to initial state", () => {
            const modifiedState: ItunesState = {
                ...initialState,
                itunes: {
                    resultCount: 5,
                    results: [{ trackId: 1, trackName: "Song" }] as any
                },
            };

            const state = itunesReducer(modifiedState, reset());
            expect(state).toEqual(initialState);
        });
    });
});