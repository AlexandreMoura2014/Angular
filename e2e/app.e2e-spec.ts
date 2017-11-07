import { AlgamoneyUiNewPage } from './app.po';

describe('algamoney-ui-new App', () => {
  let page: AlgamoneyUiNewPage;

  beforeEach(() => {
    page = new AlgamoneyUiNewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
