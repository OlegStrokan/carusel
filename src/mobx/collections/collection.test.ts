import { Collections } from './collections';
import { CollectionDto } from '../../dtos/collections';

const collections: CollectionDto[] = [
  {
    bookmarks: 10,
    cover_contains_title: true,
    cover_image_bg: "#758083",
    cover_image_url: "https://d2rbodpj0xodc.cloudfront.net/collections/2118381315261727761/covers/beb21c71-e1a8-4de7-8eae-87aa85b07227-800x960.jpeg",
    default_viewport: {
      last_location: null,
      viewport: {
        northeast:
          {
            lat: 332,
            lon: 231,
          },
        southwest: {
          lat: 232,
          lon: 121,
        }
      }
    },
    description: null,
    draft: false,
    explicitly_followed: false,
    followers: 2,
    header_image_bg: "#E49681",
    header_image_url: null,
    id: "2118381315261727761",
    implicitly_followed: false,
    name: "San Francisco Architecture",
    revision: 10,
    share_url: "https://steller.co/c/C4a6b3rmmtW",
    short_id: "C4a6b3rmmtW",
    stories: 0,
    user: "some user dto",
    web_name: "san-francisco",
  }
]
const error = { message: 'ERROR' }
describe('Collections test', function () {
  it('set collections', () => {
    const store = new Collections()
    store.setCollection(collections)
    expect(store.collections.length).toBe(1)
  });
  it('set loading', () => {
    const store = new Collections()
    store.setLoading(true)
    expect(store.loading).toEqual(true)
    store.setLoading(false)
    expect(store.loading).toEqual(false)
  });
  it('set error', () => {
    const store = new Collections()
    store.setError(error)
    expect(store.error).toEqual(error)
  });
  it('get collections', async () => {
    const store = new Collections()
    await store.getCollections();
    expect(store.loading).toBe(false);
    expect(store.collections.length).not.toBeLessThan(1);
  })
});
