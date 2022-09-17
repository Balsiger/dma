import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { User } from '@angular/fire/auth';
import { collection, deleteDoc, DocumentData, getDocs, setDoc } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { doc, Firestore, getFirestore, onSnapshot } from '@firebase/firestore';
import { Resolvers } from './resolvers';
import { UserService } from './user.service';

export interface Document {
  id: string;
  data: DocumentData;
}

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private readonly database: Firestore;
  private readonly resolvers = new Resolvers<DocumentData | undefined>();
  protected user: User | null = null;

  constructor(
    private readonly userService: UserService,
    private readonly app: FirebaseApp,
    private readonly snackBar: MatSnackBar
  ) {
    this.database = getFirestore(app);
  }

  async loadData(path: string): Promise<DocumentData | undefined> {
    this.user = await this.userService.getUser();

    if (this.user) {
      const document = doc(this.database, '/users/' + this.user.uid + '/' + path);
      onSnapshot(
        document,
        (snapshot) => {
          const data = snapshot.data();
          this.resolvers.resolve(data, path);
        },
        (error) => {
          this.snackBar.open('Cannot read data: ' + error, 'Dismiss');
        }
      );
    }

    return this.resolvers.create(path);
  }

  async loadDocuments(path: string): Promise<Document[]> {
    this.user = await this.userService.getUser();

    if (this.user) {
      const querySnapshot = await getDocs(collection(this.database, this.generatePath(path)));
      const documents: Document[] = [];
      querySnapshot.forEach((document) => {
        documents.push({ id: document.id, data: document.data() });
      });

      return documents;
    }

    return [];
  }

  async listenDocuments(path: string, callback: (documents: Document[]) => void) {
    this.user = await this.userService.getUser();

    if (this.user) {
      onSnapshot(collection(this.database, this.generatePath(path)), (querySnapshot) => {
        const documents: Document[] = [];
        querySnapshot.forEach((document) => {
          documents.push({ id: document.id, data: document.data() });
        });

        callback(documents);
      });
    }
  }

  async saveData(path: string, data: DocumentData) {
    if (this.user) {
      await setDoc(doc(this.database, this.generatePath(path)), data);
    } else {
      this.snackBar.open('Cannot save data! You need to login first.', 'Dismiss');
    }
  }

  async delete(path: string) {
    if (this.user) {
      await deleteDoc(doc(this.database, this.generatePath(path)));
    } else {
      this.snackBar.open('Cannot delete data, you are not logged in.', 'Dismiss');
    }
  }

  private generatePath(path: string): string {
    return '/users/' + this.user?.uid + '/' + path;
  }
}
