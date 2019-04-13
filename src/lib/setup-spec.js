global.chai = require('chai');
const dirtyChai = require('dirty-chai');

global.expect = chai.expect;
global.chai.use(dirtyChai);
