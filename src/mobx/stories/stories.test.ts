import { Stories } from './stories';
import { StorieDto } from '../../dtos/stories';

const stories: StorieDto[] = [{
  amp_url: null,
  aspect_ratio: '2:3',
  auth_user_metadata: {
    reposted: false
  },
  canonical_pin: null,
  collection_count: 18,
  comment_count: 5,
  cover_bg: '#A79C97',
  cover_image_files: {
    _160X240: 'string',
    _320X480: 'string',
    center_of_interest:
      {
        x: 13,
        y: 23
      },
    x: 12,
    y: 23,
    original: 'original',
    w300: 'w300',
  },
  cover_src: 'https://d2rbodpj0xodc.cloudfront.net/stories/330657116928869663/c97cfe6c-5bf4-4132-87d2-c01717bcb072-640x960.jpeg',
  cover_src_160x240: 'https://d2rbodpj0xodc.cloudfront.net/stories/330657116928869663/bbaf3940-a7a2-48f4-9adc-73bfc493b753-160x240.jpeg',
  cover_src_320x480: 'https://d2rbodpj0xodc.cloudfront.net/stories/330657116928869663/c97cfe6c-5bf4-4132-87d2-c01717bcb072-320x480.jpeg',
  default_viewport: {
    ast_location: {
      lat: 12,
      lon: 89,
    },
    viewport: {
      northeast: {
        lat: 87,
        lon: 65,
      },
      southwest: {
        lat: 45,
        lon: 65,
      },
    },
    northeast: {
      lat: 76,
      lon: 87,
    },
    southwest: {
      lat: 56,
      lon: 87,
    }
  },
  download_path: 'stories/330657116928869663',
  feed_preview_video: null,
  id: '330657116928869663',
  landscape_share_image: 'https://d2rbodpj0xodc.cloudfront.net/stories/330657116928869663/ff8e9f8b-3aa2-4611-925a-56a721688fa2-640x335.jpeg',
  likes:
    {
      count: 115,
      current_user: false,
      current_user_count: 0
    },
  page_count: 23,
  private: false,
  revision: 12,
  share_url: 'https://steller.co/s/san-francisco-3ZgH8brBJMz',
  short_id: '3ZgH8brBJMz',
  snippet: {
    entities: {
      hashtags: [],
      urls: [],
      users: []
    },
    hashtags: [],
    urls: [],
    users: [],
    text: 'text',
  },
  source_collection: null,
  source_place: null,
  story_type: null,
  story_type_id: null,
  title: 'SAN FRANCISCO',
  type: 'original',
  user: 'some user dto',
  version: 4
}]
const error = { message: 'ERROR' }

describe('Stories test', function () {
  const store = new Stories()
  it('set stories', () => {
    store.setStories(stories)
    expect(store.stories.length).toBe(1)
  });
  it('set loading', () => {
    store.setLoading(true)
    expect(store.loading).toEqual(true)
    store.setLoading(false)
    expect(store.loading).toEqual(false)
  });
  it('set error', () => {
    store.setError(error)
    expect(store.error).toEqual(error)
  });
  it('get stories', async () => {
    const store = new Stories()
    await store.getStories();
    expect(store.loading).toBe(false);
    expect(store.stories.length).not.toBeLessThan(1);
  })
});
