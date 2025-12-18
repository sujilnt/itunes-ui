
# Itunes


## Properties

Name | Type
------------ | -------------
`resultCount` | number
`results` | [Array&lt;Track&gt;](Track.md)

## Example

```typescript
import type { Itunes } from ''

// TODO: Update the object below with actual values
const example = {
  "resultCount": 1,
  "results": null,
} satisfies Itunes

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Itunes
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


