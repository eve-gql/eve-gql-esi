import { Injectable } from '@nestjs/common';
import Axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';
import { Alliance } from 'src/alliance/alliance.entity';
import { Character } from 'src/character/character.entity';
import { Corporation } from 'src/corporation/corporation.entity';
import { Group } from 'src/group/group.entity';
import { Type } from 'src/type/type.entity';

@Injectable()
export class EsiService {
  private readonly instance = Axios.create();

  private readonly axios = setupCache(this.instance, { ttl: 1000 * 60 * 60 }); // 1 hour

  private esi = 'https://esi.evetech.net/latest';

  private esiUrl = (path: string) => `${this.esi}/${path}/`;
  private fetch = <T>(path: string): Promise<T> =>
    this.axios.get(this.esiUrl(path)).then((res) => res.data);

  public alliances = () => this.fetch<number[]>('alliances');
  public alliance = (id: number) => this.fetch<Alliance>(`alliances/${id}`);
  public allianceContacts = (id: number) => this.fetch(`alliances/${id}/contacts`);
  public allianceContactLabels = (id: number) => this.fetch(`alliances/${id}/contacts/labels`);
  public allianceCorporations = (id: number) =>
    this.fetch<number[]>(`alliances/${id}/corporations`);
  public allianceIcons = (id: number) => this.fetch(`alliances/${id}/icons`);

  public corporations = () => this.fetch<number[]>('corporations');
  public corporation = (id: number) => this.fetch<Corporation>(`corporations/${id}`);

  public characters = () => Promise.resolve([]);
  public character = (id: number) => this.fetch<Character>(`characters/${id}`);

  public groups = () => this.fetch<number[]>('universe/groups');
  public group = (id: number): Promise<Group> => this.fetch<Group>(`universe/groups/${id}`);

  public types = () => this.fetch<number[]>('universe/types');
  public type = (id: number) => this.fetch<Type>(`universe/types/${id}`);
}
