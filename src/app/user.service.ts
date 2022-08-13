import { Injectable } from '@angular/core';
import { Auth, onAuthStateChanged, User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  initialized = false;
  resolvers: ((v: User | PromiseLike<User | null> | null) => void)[] = [];
  user: User | null = null;

  constructor(private readonly auth: Auth) {
    onAuthStateChanged(this.auth, (user) => {
      this.initialized = true;
      this.user = user;
      for (const resolver of this.resolvers) {
        resolver(user);
      }

      this.resolvers = [];
    });
  }

  isPrivileged(): boolean {
    return !!this.user?.email?.endsWith('ixitxachitls.net');
  }

  async getUser(): Promise<User|null> {
    if (this.initialized) {
      return this.user;
    }

    return new Promise<User|null>((resolve) => {
      this.resolvers.push(resolve);
    });
  }
}
