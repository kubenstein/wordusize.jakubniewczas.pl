wordusize.jakubniewczas.pl
=============

http://wordusize.jakubniewczas.pl

Qn app that counts how many times a given word was found on a given website. It is a  weekend self-hackathon to experiment with puppeteer.

## Usage
To use the app, make a get request with two params 'word' and 'url'
example:

http://wordusize.jakubniewczas.pl/wordscount?word=node&url=http://www.jakubniewczas.pl

returned JSON:

```
{
  "status": "ok",
  "count": 15
}
```


In case of error, for example missing param, the returned JSON will look like:

```
{
  "status": "err",
  "err": "'url' param cant be empty"
}
```

## Technical details
Wordusize is an node webapp built as an app in the first place and then expanded to web.

Most logic is in the lib/ folder, split into multiple app layers.

- The top layer, the main usecase is `countWordOnPageWorkflow` combining all other components into explicit app logic flow.
- The persistence is done via `sequelize` package but its hidden behind repository functionalities. Interesting fact is most of development time the persistence was done as a in memory array and then swapped without touching any of the app logic.
- Scraping page is done via `puppeteer` so scraping SPAs is also supported.

Whole app is written in more functional style with heavy use of `async/await/promises` techniques.


## Development

```bash
npm run dev:db:migrate
npm run dev:backend

# tests
npm run test:db:migrate
npm run test:lib:watch
```

Then visit `http://localhost:3000/`.


### License
MIT
