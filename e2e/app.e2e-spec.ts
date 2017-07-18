import { ClarityappPage } from './app.po';

describe('clarityapp App', () => {
  let page: ClarityappPage;

  beforeEach(() => {
    page = new ClarityappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
