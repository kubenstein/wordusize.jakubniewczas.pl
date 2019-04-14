import path from 'path';
import sinon from 'sinon';
import { clear, add } from 'lib/data/models/search-result/repository';
import countWordOnPageWorkflow from '.';

describe('countWordOnPageWorkflow', () => {
  const url = `file://${path.resolve(__dirname, '..', 'src', 'spec', 'fixtures', 'test-page.html')}`;

  it('returns occurrence of a given word at given url', async () => {
    expect(await countWordOnPageWorkflow('the', url)).to.be.eq(2);
    expect(await countWordOnPageWorkflow('fox', url)).to.be.eq(1);
    expect(await countWordOnPageWorkflow('404', url)).to.be.eq(0);
  });

  it('uses cache if the result was calculated before', async () => {
    const customPersisterer = sinon.spy(add);
    await clear();

    await countWordOnPageWorkflow('the', url, customPersisterer);
    await countWordOnPageWorkflow('the', url, customPersisterer);
    await countWordOnPageWorkflow('the', url, customPersisterer);
    expect(customPersisterer).to.have.been.calledOnce();
  });
});
