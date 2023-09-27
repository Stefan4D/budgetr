# useFetch Hook Usage

## Description

This hook is used to fetch data from the API. It takes in the endpoint and returns the data, isPending and error. The data is the response data from the API, isPending is a boolean value that is true when the data is being fetched and false when the data has been fetched and error is the error message if the data could not be fetched.

## Example Implementation

The following is an example implementation that uses conditional rendering to display the data, error or loading message.

The implementation assumes that the data is passed to a generic component that displays the data. The component is passed the data as a prop.

```js
import { useFetch } from '../hooks/useFetch'; // change to the correct relative path

export default function Home() {
  const {
    data: rates, // data is the name of the response data which can be changed to anything you want
    isPending,
    error,
  } = useFetch(ENDPOINT.baseURL + ENDPOINT.routeName); // change to the correct endpoint and route name

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {rates && <RateListComponent rates={rates} title="All rates" />}
    </div>
  );
}
```
