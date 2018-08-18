import { GeoQueryModule } from './geo-query.module';

describe('GeoQueryModule', () => {
  let geoQueryModule: GeoQueryModule;

  beforeEach(() => {
    geoQueryModule = new GeoQueryModule();
  });

  it('should create an instance', () => {
    expect(geoQueryModule).toBeTruthy();
  });
});
