import { computed, makeAutoObservable, observable } from 'mobx';
import { storiesState } from '../stories/stories';
import { collectionState } from '../collections/collections';



export class Init {
  @observable isInit: boolean = false
  constructor() {
    makeAutoObservable(this);
  }

  @computed setInit() {
    this.isInit = true
  }
  @computed getData() {
    collectionState.getCollections().then(() => storiesState.getStories()).then(() => this.setInit())

  }
}

export const initState = new Init()
