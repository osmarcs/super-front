import { SuperUsersPage } from './app.po';

describe('super-users App', () => {
  let page: SuperUsersPage;

  beforeEach(() => {
    page = new SuperUsersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
