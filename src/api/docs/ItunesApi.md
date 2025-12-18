# ItunesApi

All URIs are relative to *http://localhost:3000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getItunes**](ItunesApi.md#getitunes) | **GET** /itunes | Get and Search iTunes content |



## getItunes

> Itunes getItunes(term, limit)

Get and Search iTunes content

Get and Search for movies, music, and other content in the iTunes store

### Example

```ts
import {
  Configuration,
  ItunesApi,
} from '';
import type { GetItunesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ItunesApi();

  const body = {
    // string | Search term (optional)
    term: term_example,
    // number | limit (optional)
    limit: 8.14,
  } satisfies GetItunesRequest;

  try {
    const data = await api.getItunes(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **term** | `string` | Search term | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | limit | [Optional] [Defaults to `undefined`] |

### Return type

[**Itunes**](Itunes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

