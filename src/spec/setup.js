global.chai = require('chai');
const dirtyChai = require('dirty-chai');
const sinonChai = require('sinon-chai');

global.expect = chai.expect;
global.chai.use(dirtyChai);
global.chai.use(sinonChai);
