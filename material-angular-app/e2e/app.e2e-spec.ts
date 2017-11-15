import { MaterialAngularAppPage } from './app.po';

describe('material-angular-app App', () => {
  let page: MaterialAngularAppPage;

  beforeEach(() => {
    page = new MaterialAngularAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
