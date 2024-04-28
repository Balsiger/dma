import { Injectable, signal } from '@angular/core';
import { Auth, User, onAuthStateChanged } from '@angular/fire/auth';
import { Resolvers } from '../common/resolvers';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  resolvers = new Resolvers<User | null>();

  initialized = false;
  user = signal<User | null>(null);

  constructor(private readonly auth: Auth) {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.update(user);
      }
    });
  }

  private update(user: User) {
    this.initialized = true;
    this.user.set(user);
    this.resolvers.resolve(user);
  }

  isPrivileged(): boolean {
    return !!this.user()?.email?.endsWith('ixitxachitls.net');
  }

  async getUser(): Promise<User | null> {
    if (this.initialized) {
      return this.user();
    }

    return this.resolvers.create();
  }
}
