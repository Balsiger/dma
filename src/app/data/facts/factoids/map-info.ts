import { signal } from '@angular/core';
import { EntitiesService } from '../../../services/entity/entities.service';
import { Factoid } from './factoid';
import { Data as TokenData, TokenInfo } from './token-info';

export interface Level {
  name?: string;
  previewMasks?: string[];
  shownMasks?: string[];
  previewLayers?: string[];
  shownLayers?: string[];
}

export interface Data {
  name?: string;
  level?: string;
  levelSelections?: Level[];
  x?: number;
  y?: number;
  rotation?: number;
  tokens?: TokenData[];
  grid?: boolean;
}

export class MapInfo implements Factoid<Data> {
  name = signal('');
  level = signal('');
  levelSelections = signal<Level[]>([]);
  x = signal(0);
  y = signal(0);
  rotation = signal(0);
  tokens = signal<TokenInfo[]>([]);
  grid = signal(false);

  constructor(
    private readonly entitiesService: EntitiesService,
    data: Data,
  ) {
    this.update(data);
  }

  update(data: Data) {
    this.name.set(data.name || '');
    this.level.set(data.level || '');
    this.levelSelections.set(data.levelSelections || []);
    this.x.set(data.x || 0);
    this.y.set(data.y || 0);
    this.rotation.set(data.rotation || 0);
    this.tokens.set(data.tokens?.map((t) => TokenInfo.fromData(this.entitiesService.tokens, t)) || []);
    this.grid.set(data.grid || false);
  }

  static fromData(entitiesService: EntitiesService, data: Data) {
    return new MapInfo(entitiesService, data);
  }

  isShown(levelName: string, mask: string) {
    if (levelName === this.level()) {
      for (const level of this.levelSelections()) {
        if (level.name === levelName) {
          return level.shownMasks?.includes(mask);
        }
      }
    }

    return false;
  }

  isShownLayer(levelName: string, layer: string) {
    if (levelName === this.level()) {
      for (const level of this.levelSelections()) {
        if (level.name === levelName) {
          return level.shownLayers?.includes(layer);
        }
      }
    }

    return false;
  }

  isPreview(levelName: string, mask: string) {
    if (levelName === this.level()) {
      for (const level of this.levelSelections()) {
        if (level.name === levelName) {
          return level.previewMasks?.includes(mask);
        }
      }
    }

    return false;
  }

  isPreviewLayer(levelName: string, layer: string) {
    if (levelName === this.level()) {
      for (const level of this.levelSelections()) {
        if (level.name === levelName) {
          return level.previewLayers?.includes(layer);
        }
      }
    }

    return false;
  }

  toData(): Data {
    return {
      name: this.name(),
      level: this.level(),
      levelSelections: this.levelSelections(),
      x: this.x(),
      y: this.y(),
      rotation: this.rotation(),
      tokens: this.tokens().map((t) => t.toData()),
      grid: this.grid(),
    };
  }

  static isEqual(a: MapInfo, b: MapInfo) {
    return (
      a.name === b.name &&
      a.level === b.level &&
      a.levelSelections === b.levelSelections &&
      a.x === b.x &&
      a.y === b.y &&
      a.rotation === b.rotation &&
      a.tokens === b.tokens &&
      a.grid === b.grid
    );
  }

  withLevel(
    level: string,
    previewMasks: string[],
    shownMasks: string[],
    previewLayers: string[],
    shownLayers: string[],
  ) {
    const newLevel = { name: level, previewMasks, shownMasks, previewLayers, shownLayers };
    const data = this.toData();

    data.level = level;
    if (!data.levelSelections) {
      data.levelSelections = [newLevel];
    } else {
      const index = data.levelSelections?.findIndex((v) => v.name === level) ?? -1;
      if (index >= 0) {
        data.levelSelections[index] = newLevel;
      } else {
        data.levelSelections.push(newLevel);
      }
    }

    return new MapInfo(this.entitiesService, data);
  }

  withPosition(x: number, y: number): MapInfo {
    const data = this.toData();
    data.x = x;
    data.y = y;
    return new MapInfo(this.entitiesService, data);
  }

  withRotation(rotation: number): MapInfo {
    const data = this.toData();
    data.rotation = rotation;
    return new MapInfo(this.entitiesService, data);
  }

  addToken(token: TokenInfo) {
    this.tokens.set([...this.tokens(), token]);
  }

  removeToken(token: TokenInfo) {
    this.tokens.set(this.tokens().filter((t) => t !== token));
  }

  rotateToken(token: TokenInfo, rotation: number) {
    token.rotation.set(rotation);
  }

  toggleGrid() {
    this.grid.update((g) => !g);
  }
}
