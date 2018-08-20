import { UpdateCampModule } from './update-camp.module';

describe('UpdateCampModule', () => {
  let updateCampModule: UpdateCampModule;

  beforeEach(() => {
    updateCampModule = new UpdateCampModule();
  });

  it('should create an instance', () => {
    expect(updateCampModule).toBeTruthy();
  });
});
