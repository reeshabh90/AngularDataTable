import { AngularDataTableAppPage } from './app.po';

describe('angular-data-table-app App', () => {
  let page: AngularDataTableAppPage;

  beforeEach(() => {
    page = new AngularDataTableAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
