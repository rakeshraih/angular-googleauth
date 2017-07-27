import { AngularGoogleauthPage } from './app.po';

describe('angular-googleauth App', () => {
  let page: AngularGoogleauthPage;

  beforeEach(() => {
    page = new AngularGoogleauthPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
