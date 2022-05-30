import { CollectionDto } from '../../dtos/collections';
import { makeAutoObservable } from 'mobx';
import { getCollections } from '../../api/collections';


class Collections {
  collections: CollectionDto[] = [];
  error: unknown = null;
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }
  setCollection(collection: CollectionDto[]) {
    this.collections = collection;
  }

  setError(error: unknown) {
    this.error = error;
  }

  setLoading(value: boolean) {
    this.loading = value;
  }

  async getCollections() {
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
