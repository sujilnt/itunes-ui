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
            "wrapperType": "audiobook",
            "artistId": 16696215,
            "collectionId": 1788109410,
            "amgArtistId": 938519,
            "artistName": "John Kennedy",
            "collectionName": "How to Test Negative for Stupid",
            "collectionCensoredName": "How to Test Negative for Stupid",
            "artistViewUrl": "https://music.apple.com/us/artist/john-kennedy/16696215?uo=4",
            "collectionViewUrl": "https://books.apple.com/us/audiobook/how-to-test-negative-for-stupid/id1788109410?uo=4",
            "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/83/82/4e/83824ea2-df93-5b85-e27b-f18b004eef5e/9780063428195.jpg/60x60bb.jpg",
            "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/83/82/4e/83824ea2-df93-5b85-e27b-f18b004eef5e/9780063428195.jpg/100x100bb.jpg",
            "collectionPrice": 19.99,
            "collectionExplicitness": "cleaned",
            "trackCount": 1,
            "country": "USA",
            "currency": "USD",
            "releaseDate": "2025-10-07T07:00:00Z",
            "primaryGenreName": "Nonfiction",
            "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ad/a8/13/ada813e4-07dd-3c08-7b56-2c0625bc95c6/mzaf_13650396747325046892.std.aac.p.m4a",
            "description": "Narrated by John Kennedy himself, this audiobook of “America’s most quotable Senator” offers his perceptive (and hilarious) takes on the ridiculousness of political life in this scathingly witty takedown of Washington and its elite denizens.<br /><br />How to Test Negative for Stupid offers the Senator’s tongue-in-cheek guidebook through Washington, punctuated by his thoughts on various issues and humorous stories about life from Louisiana politics and inside the Senate.<br /><br />From the mind—and mouth—of \"\"America's Most Quotable Senator\"\":<br />“Always be yourself . . . unless you suck.”“I say this gently: This is why the aliens won’t talk to us.”“If you trust government, you obviously failed history class.”“I believe that our country was founded by geniuses, but it’s being run by idiots.”“Always follow your heart . . . but take your brain with you.”“I’m not going to Bubble Wrap it: The water in Washington, D.C., won’t clear up until you get the pigs out of the creek.”“I have the right to remain silent but not the ability.”“Common sense is illegal in Washington, D.C., I know. I’ve seen it firsthand.”“I believe that we are going to have to get some new conspiracy theories. All the old ones turned out to be true.”"
        },
        {
            "wrapperType": "audiobook",
            "artistId": 587900482,
            "collectionId": 1674311549,
            "artistName": "Juliana Haygert",
            "collectionName": "The Midnight Test",
            "collectionCensoredName": "The Midnight Test",
            "artistViewUrl": "https://books.apple.com/us/author/juliana-haygert/id587900482?uo=4",
            "collectionViewUrl": "https://books.apple.com/us/audiobook/the-midnight-test/id1674311549?uo=4",
            "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/98/d6/a4/98d6a460-6864-1eec-72c0-0e3df32bde9e/9798368912752.png/60x60bb.jpg",
            "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/98/d6/a4/98d6a460-6864-1eec-72c0-0e3df32bde9e/9798368912752.png/100x100bb.jpg",
            "collectionPrice": 0,
            "collectionExplicitness": "cleaned",
            "trackCount": 1,
            "copyright": " 2023 Juliana Haygert",
            "country": "USA",
            "currency": "USD",
            "releaseDate": "2023-02-22T08:00:00Z",
            "primaryGenreName": "Romance",
            "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/5e/9a/5f/5e9a5fb9-ed74-7178-1fb3-8952581240a4/mzaf_7723526861847135071.std.aac.p.m4a",
            "description": "An unprepared witch. A mysterious human. And a quest that will test them both …<br /><br />Hazel always knew she was one of the weakest witches of her generation. For a moment there, she even cared about that status.<br /><br />Not anymore. She’s determined to live her life as a normal human—with exception for the occasional ghost hunting. What can she do if the damn spirits won’t leave her alone?<br /><br />But when she finally settles into a new routine, Hazel receives a message that changes everything: the Lightgrove Coven, one of the most powerful witch covens in the world, grants her a rare chance to join them, but only if she passes a dangerous test on Friday the Thirteenth.<br /><br />At first, Hazel wants to disregard the message. But who is she kidding? This is an opportunity she can’t say no to.<br /><br />Everything is going unexpectedly fine until a human steps in Hazel's way. Sean is mysterious, hot, and inexplicably alluring. Despite Hazel’s best attempts to ignore him, she can’t. And when Sean’s fate entwines with Hazel’s task, it puts everything at risk—not just her test, but also their own lives.<br /><br />The Midnight Test is the first book in the Rite World: Lightgrove Witches series—full of magic, romance, mystery, and excitement! Grab your copy today and start this new adventure!<br /><br />Rite World: Lightgrove Witches<br /><br />The Midnight Test (book 1)<br /><br />The Midnight Spell (book 2)<br /><br />The Midnight Flame (book 3)<br /><br />The Midnight Secret (book 4)<br /><br />The Midnight Hunt (book 5)<br /><br />The Midnight Wish (book 6)"
        }]
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