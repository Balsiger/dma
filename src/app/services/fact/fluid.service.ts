import { signal } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';
import { Resolvers } from '../../common/resolvers';
import { Fluid } from '../../data/entities/fluid/fluid';
import { Document, FirebaseService } from '../firebase.service';

/** A base service to load facts from firebase. Services can be global or local to a parent fact. */
export abstract class FluidService<
  D extends DocumentData,
  F extends Fluid<D, S>,
  S extends FluidService<D, Fluid<D, S>, S>,
> {
  fluids = signal<F[]>([]);
  fluidsByIdDirty = false;
  fluidsById = signal<Map<string, F>>(new Map(), {
    equal: (a, b) => a == b && !this.isDirty(),
  });
  loaded = false;
  resolvers = new Resolvers<void>();

  constructor(
    protected readonly firebase: FirebaseService,
    private readonly path: string,
    private readonly builder: (service: S, id: string, d: D) => F,
  ) {
    this.listen();
  }

  private async listen() {
    await this.firebase.listenDocuments(this.path, this.updateAll.bind(this));
  }

  async ensureLoaded(): Promise<void> {
    if (this.loaded === false) {
      return this.resolvers.create();
    }

    this.resolvers.resolve();
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
    return this.fluidsById().get(id);
  }

  has(id: string): boolean {
    return this.fluidsById().has(id);
  }

  async save(fluid: F) {
    const data = fluid.toData();
    // Remove undefined values.
    Object.keys(data).forEach((key) => data[key] === undefined && delete data[key]);
    await this.firebase.saveData(this.buildFullDocumentId(fluid), data);
  }

  async update(old: F, updated: F) {
    if (old && old.buildDocumentId() !== updated.buildDocumentId()) {
      this.delete(old);
    }

    await this.save(updated);
  }

  async delete(fluid: F) {
    await this.firebase.delete(this.buildFullDocumentId(fluid));
  }

  private buildFullDocumentId(fluid: F): string {
    return `${this.path}/${fluid.buildDocumentId()}`;
  }

  private updateAll(documents: Document[]) {
    this.fluids.set(documents.map((d) => this.updateDocument(d.id, d.data as D)));
    this.fluidsByIdDirty = true;
    this.fluidsById.set(this.fluidsById());
    this.loaded = true;
    this.ensureLoaded();
  }

  private isDirty(): boolean {
    const dirty = this.fluidsByIdDirty;
    this.fluidsByIdDirty = false;
    return dirty;
  }

  private updateDocument(id: string, data: D): F {
    let fluid = this.fluidsById().get(id);
    if (fluid) {
      fluid.update((data || {}) as D);
    } else {
      fluid = this.builder(this as any as S, id, (data || {}) as D);
      this.fluidsById().set(id, fluid);
    }

    return fluid;
  }
}
