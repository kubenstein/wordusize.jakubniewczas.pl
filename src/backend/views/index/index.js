export default `
<pre>
                            __
                           /\\ \\                  __
 __  __  __    ___   _ __  \\_\\ \\  __  __    ____/\\_\\  ____      __
/\\ \\/\\ \\/\\ \\  / __'\\/\\''__\\/'_' \\/\\ \\/\\ \\  /',__\\/\\ \\/\\_ ,'\\  /'__'\\
\\ \\ \\_/ \\_/ \\/\\ \\L\\ \\ \\ \\//\\ \\L\\ \\ \\ \\_\\ \\/\\__, '\\ \\ \\/_/  /_/\\  __/
 \\ \\___.___/'\\ \\____/\\ \\_\\\\ \\___,_\\ \\____/\\/\\____/\\ \\_\\/\\____\\ \\____\\
  \\/__//__/   \\/___/  \\/_/ \\/__,_ /\\/___/  \\/___/  \\/_/\\/____/\\/____/



Welcome to wordusize!

Count occurrence of a given word on a given url. A weekend self-hackathon to experiment with puppeteer.
It uses Google Chrome so it can count words also on SPAs as well.


To use the app, make a get request with two params 'word' and 'url'
example:
http://wordusize.jakubniewczas.pl/wordscount?word=node&url=http://www.jakubniewczas.pl

returned JSON:

  {
    "status": "ok",
    "count": 15
  }

In case of an error, for example missing param, the returned JSON will look like:

  {
    "status": "err",
    "err": "'url' param cant be empty"
  }

Thank you and have fun!
Sr. FullStack Dev Jakub Niewczas
</pre>
`;
