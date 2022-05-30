import { StorieDto } from '../../dtos/stories';
import { computed, makeAutoObservable, observable } from 'mobx';
import { getStories } from '../../api/stories';


export class Stories {
  @observable stories: StorieDto[] = [];
  @observable error: unknown = null;
  @observable loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }
  @computed setStories(stories: StorieDto[]) {
    this.stories = stories;
  }

  @computed setError(error: unknown) {
    this.error = error;
  }

  @computed setLoading(value: boolean) {
    this.loading = value;
  }

  @computed async getStories() {
    try {
      this.setLoading(true);
      const { data } = await getStories();
      this.setStories(data);
      this.setLoading(false);
    } catch (e: unknown) {
      this.setLoading(false);
      this.setError(e)
    }
  }
}

export const storiesState = new Stories()
