import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ImmutablesService } from '../../../services/immutable/immutables.service';

export const immutablesResolver: ResolveFn<ImmutablesService> = async () => {
  const service = inject(ImmutablesService);
  await service.ensureLoaded();
  return service;
};
