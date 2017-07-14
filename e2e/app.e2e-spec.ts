import { Pokemon3000Angular2Page } from './app.po';

describe('pokemon3000-angular2 App', () => {
  let page: Pokemon3000Angular2Page;

  beforeEach(() => {
    page = new Pokemon3000Angular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
