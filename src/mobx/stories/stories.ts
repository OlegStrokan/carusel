import { StorieDto } from '../../dtos/stories';
import { makeAutoObservable } from 'mobx';
import { getStories } from '../../api/stories';


class Stories {
  stories: StorieDto[] = [];
  error: unknown = null;
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }
  setStories(stories: StorieDto[]) {
    this.stories = stories;
  }

  setError(error: unknown) {
    this.error = error;
  }

  setLoading(value: boolean) {
    this.loading = value;
  }

   async getStories() {
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
