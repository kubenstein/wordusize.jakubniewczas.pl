import express from 'express';
import bugsnag from 'bugsnag';
import countWordOnPageWorkflow from 'lib/workflows/count-word-on-page';

bugsnag.register(process.env.BUGSNAG_API_KEY);

export default class Server {
  constructor(params) {
    this.serverPort = params.port;
    this.app = null;
    this.server = null;
  }

  start() {
    this.app = express();
    this.app.use(bugsnag.requestHandler);
    this.server = this.app.listen(this.serverPort, '0.0.0.0');

    this.app.get('/wordscount', (req, res) => {
      const { word, url } = req.query;

      countWordOnPageWorkflow(word, url)
        .then(count => res.send({
          status: 'ok',
          count,
        }))
        .catch(err => res.send({
          status: 'err',
          err: err.message,
        }));
    });
  }

  stop() {
    this.server.close();
    this.server = null;
  }
}
