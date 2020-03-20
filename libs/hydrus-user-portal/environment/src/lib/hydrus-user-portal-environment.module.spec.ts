import { async, TestBed } from '@angular/core/testing';
import { HydrusUserPortalEnvironmentModule } from './hydrus-user-portal-environment.module';

describe('HydrusUserPortalEnvironmentModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HydrusUserPortalEnvironmentModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(HydrusUserPortalEnvironmentModule).toBeDefined();
  });
});
