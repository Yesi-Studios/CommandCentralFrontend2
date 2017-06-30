import { CommandCentralFrontend2Page } from './app.po';

describe('command-central-frontend2 App', () => {
  let page: CommandCentralFrontend2Page;

  beforeEach(() => {
    page = new CommandCentralFrontend2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
