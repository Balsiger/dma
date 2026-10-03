import { computed, Injectable, signal } from '@angular/core';
import { Auth, onAuthStateChanged, User } from '@angular/fire/auth';
import { Resolvers } from '../common/resolvers';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  photoURL = computed(() => this.user()?.photoURL);
  email = computed(() => this.user()?.email);

  resolvers = new Resolvers<User | null>();

  initialized = false;
  // TODO: Make private.
  user = signal<User | null>(null);

  constructor(private readonly auth: Auth) {
    onAuthStateChanged(this.auth, (user) => {
      this.update(user);
    });
  }

  private update(user: User | null) {
    this.user.set(user);
    this.resolvers.resolve(user);
    this.initialized = true;
  }

  isInitialized(): boolean {
    return this.initialized;
  }

  isLoggedIn(): boolean {
    return !!this.user();
  }

  isPrivileged(): boolean {
    return !!this.user()?.email?.endsWith('@ixitxachitls.net');
  }

  // TODO: remove this!
  async getUser(): Promise<User | null> {
    if (this.initialized) {
      return this.user();
    }

    return this.resolvers.create();
  }
}
