# Zipcode -> Lat, Long

Provides an API for getting the latitude and longitude for all US zipcodes. To use it,
simply make a request to `zipcodes.dev/{zipcode}` in order to get JSON back with the
latitude and longitude. For example:


```
curl -L zipcodes.dev/02144
```

Will return:

```json
{
  "lat": "42.399655",
  "long": "-71.122550"
}
```


The `docs/` directory is the result of running:

```bash
deno run --allow-read --allow-write --unstable build.js
```

It spits out an `index.json` file for each zipcode in order to allow Github Pages 
to easily serve it.
