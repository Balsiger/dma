import { signal } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';
import { Fact } from '../../data/facts/fact';
import { Document, FirebaseService } from '../firebase.service';

/** A base service to load facts from firebase. Services can be global or local to a parent fact. */
export abstract class FactService<
  D extends DocumentData,
  F extends Fact<D, S>,
  S extends FactService<D, Fact<D, S>, S>,
> {
  facts = signal<F[]>([]);
  factsByIdDirty = false;
  factsById = signal<Map<string, F>>(new Map(), {
    equal: (a, b) => a == b && !this.isDirty(),
  });

  constructor(
    protected readonly firebase: FirebaseService,
    private readonly path: string,
    private readonly builder: (service: S, id: string, d: D) => F,
  ) {
    this.listen();
  }

  private async listen() {
    // TODO: check can be removed after refactoring is done.
    if (this.firebase) {
      await this.firebase.listenDocuments(this.path, this.updateAll.bind(this));
    }
  }

  get(id: string): F {
    const fact = this.maybeGet(id);
    if (fact) {
      return fact;
    }

    this.updateDocument(id, {} as D);
    return this.get(id);
  }

  maybeGet(id: string): F | undefined {
    return this.factsById().get(id);
  }

  has(id: string): boolean {
    return this.factsById().has(id);
  }

  async save(fact: F) {
    const data = fact.toData();
    // Remove undefined values.
    Object.keys(data).forEach((key) => data[key] === undefined && delete data[key]);
    await this.firebase.saveData(this.buildFullDocumentId(fact), data);
  }

  async update(old: F, updated: F) {
    if (old && old.buildDocumentId() !== updated.buildDocumentId()) {
      this.delete(old);
    }

    await this.save(updated);
  }

  async delete(fact: F) {
    await this.firebase.delete(this.buildFullDocumentId(fact));
  }

  private buildFullDocumentId(fact: F): string {
    return `${this.path}/${fact.buildDocumentId()}`;
  }

  private updateAll(documents: Document[]) {
    this.facts.set(documents.map((d) => this.updateDocument(d.id, d.data as D)));
    this.factsByIdDirty = true;
    this.factsById.set(this.factsById());
  }

  private isDirty(): boolean {
    const dirty = this.factsByIdDirty;
    this.factsByIdDirty = false;
    return dirty;
  }

  private updateDocument(id: string, data: D): F {
    let fact = this.factsById().get(id);
    if (fact) {
      fact.update((data || {}) as D);
    } else {
      fact = this.builder(this as any as S, id, (data || {}) as D);
      this.factsById().set(id, fact);
    }

    return fact;
  }
}
