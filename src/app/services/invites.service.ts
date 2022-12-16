import { Injectable } from '@angular/core';
import { Document, FirebaseService } from './firebase.service';
import { Resolvers } from './resolvers';
import { UserService } from './user.service';

const PREFIX = 'invites/';

@Injectable({
  providedIn: 'root',
})
export class InvitesService {
  private loading?: boolean;
  private readonly resolvers = new Resolvers<void>();
  private readonly campaignNamesById: Map<string, string> = new Map();

  constructor(private readonly firebaseService: FirebaseService, private readonly userService: UserService) {}

  private async load() {
    if (this.loading === false) {
      return;
    }

    if (this.loading === true) {
      return this.resolvers.create();
    }

    this.loading = true;

    const user = await this.userService.getUser();
    if (user) {
      this.firebaseService.listenDocuments(`/invites/${user.email}/campaigns`, this.update.bind(this));
    }

    return this.resolvers.create();
  }

  private update(documents: Document[]) {
    for (const document of documents) {
      this.campaignNamesById.set(document.id, document.data['campaign']);
    }

    if (this.loading) {
      this.resolvers.resolve();
      this.loading = false;
    }
  }

  async fetchCampaignNamesById(): Promise<Map<string, string>> {
    await this.load();

    return this.campaignNamesById;
  }
}
