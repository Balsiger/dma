import { inject } from '@angular/core';
import { User } from '@angular/fire/auth';
import { ResolveFn } from '@angular/router';
import { UserService } from '../../services/user.service';

export const userResolver: ResolveFn<User | null> = async (): Promise<User | null> => {
  const service = inject(UserService);
  return await service.getUser();
};
