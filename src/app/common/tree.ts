export class Tree<T> {
  private readonly nodes = new Map<T, Tree<T>>();

  constructor(values: T[] = []) {
    this.add(values);
  }

  add(values: T[]) {
    if (values.length === 0) {
      return;
    }

    const node = this.nodes.get(values[0]);
    if (node) {
      node.add(values.slice(1));
    } else {
      this.nodes.set(values[0], new Tree<T>(values.slice(1)));
    }
  }

  sort(): Tree<T> {
    const keys = Array.from(this.nodes.keys()).sort();
    const result = new Tree<T>();
    for (const key of keys) {
      result.nodes.set(key, this.nodes.get(key)!.sort());
    }

    return result;
  }

  get(values: T[] = []): T[] {
    const node = this.getNode(values);
    if (node) {
      return Array.from(node.nodes.keys());
    }

    return [];
  }

  getNonLeaves(values: T[] = []): T[] {
    const node = this.getNode(values);
    if (node) {
      return Array.from(node.nodes.keys()).filter((k) => node.nodes.get(k)!.nodes.size !== 0);
    }

    return [];
  }

  private getNode(values: T[]): Tree<T> | undefined {
    if (values.length === 0) {
      return this;
    }

    const node = this.nodes.get(values[0]);
    if (node) {
      return node.getNode(values.slice(1));
    }

    return undefined;
  }
}
