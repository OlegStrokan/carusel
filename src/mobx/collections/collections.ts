import { CollectionDto } from '../../dtos/collections';
import { computed, makeAutoObservable, observable } from 'mobx';
import { getCollections } from '../../api/collections';


export class Collections {
  @observable collections: CollectionDto[] = [];
  @observable error: unknown = null;
  @observable loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }
  @computed setCollection(collection: CollectionDto[]) {
    this.collections = collection;
  }

  @computed setError(error: unknown) {
    this.error = error;
  }

  @computed setLoading(value: boolean) {
    this.loading = value;
  }

  @computed async getCollections() {
    try {
      this.setLoading(true);
      const { data } = await getCollections();
      this.setCollection(data);
        this.setLoading(false);


    } catch (e: unknown) {
      this.setLoading(false);
      this.setError(e)
    }
  }
}

export const collectionState = new Collections()
