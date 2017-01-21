import { WikicinemaPage } from './app.po';

describe('wikicinema App', function() {
  let page: WikicinemaPage;

  beforeEach(() => {
    page = new WikicinemaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
