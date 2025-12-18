
# Track


## Properties

Name | Type
------------ | -------------
`wrapperType` | string
`kind` | string
`trackId` | number
`artistName` | string
`trackName` | string
`trackCensoredName` | string
`trackViewUrl` | string
`previewUrl` | string
`artworkUrl30` | string
`artworkUrl60` | string
`artworkUrl100` | string
`collectionPrice` | number
`trackPrice` | number
`trackRentalPrice` | number
`collectionHdPrice` | number
`trackHdPrice` | number
`trackHdRentalPrice` | number
`releaseDate` | string
`collectionExplicitness` | string
`trackExplicitness` | string
`trackTimeMillis` | number
`country` | string
`currency` | string
`primaryGenreName` | string
`contentAdvisoryRating` | string
`shortDescription` | string
`longDescription` | string
`collectionId` | number

## Example

```typescript
import type { Track } from ''

// TODO: Update the object below with actual values
const example = {
  "wrapperType": track,
  "kind": feature-movie,
  "trackId": 1856104865,
  "artistName": Tatsuya Yoshihara,
  "trackName": Chainsaw Man - The Movie: Reze Arc,
  "trackCensoredName": Chainsaw Man - The Movie: Reze Arc,
  "trackViewUrl": https://itunes.apple.com/us/movie/chainsaw-man-the-movie-reze-arc/id1856104865?uo=4,
  "previewUrl": https://video-ssl.itunes.apple.com/itunes-assets/Video221/v4/b4/aa/4b/b4aa4b31-feb2-0d22-2898-7f8b7e7d1487/mzvf_1582061625990988600.640x354.h264lc.U.p.m4v,
  "artworkUrl30": null,
  "artworkUrl60": null,
  "artworkUrl100": null,
  "collectionPrice": 24.99,
  "trackPrice": 24.99,
  "trackRentalPrice": 19.99,
  "collectionHdPrice": 24.99,
  "trackHdPrice": 24.99,
  "trackHdRentalPrice": 19.99,
  "releaseDate": 2025-10-24T07:00Z,
  "collectionExplicitness": notExplicit,
  "trackExplicitness": notExplicit,
  "trackTimeMillis": 6005500,
  "country": USA,
  "currency": USD,
  "primaryGenreName": Action & Adventure,
  "contentAdvisoryRating": R,
  "shortDescription": null,
  "longDescription": null,
  "collectionId": 1856104865,
} satisfies Track

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Track
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


