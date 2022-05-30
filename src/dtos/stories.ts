export interface StorieDto {
  amp_url: null
  aspect_ratio: string
  auth_user_metadata: {
    reposted: boolean
  }
  canonical_pin: null
  collection_count: number
  comment_count: number
  cover_bg: string
  cover_image_files: {
    _160X240: string
    _320X480: string
    center_of_interest:
      {
        x: number,
        y: number
      }
    x: number,
    y: number,
    original: string
    w300: string
  }
  cover_src: string
  cover_src_160x240: string
  cover_src_320x480: string
  default_viewport: {
    ast_location: {
      lat: number
      lon: number
    }
    viewport: {
      northeast: {
        lat:number
        lon: number
      },
      southwest: {
        lat:number
        lon: number
      }
    }
    northeast: {
      lat: number
      lon: number
    }
    southwest: {
      lat: number,
      lon: number,
    }
  }
  download_path: string
  feed_preview_video: null
  id: string
  landscape_share_image: string
  likes: {
    count: number,
    current_user: false,
    current_user_count: number
  }
  page_count: number,
  private: false
  revision: number,
  share_url: string
  short_id: string
  snippet: {
    entities: {
      hashtags: [],
      urls: [],
      users: []
    }
    hashtags: []
    urls: []
    users: []
    text: string
  }
  source_collection: null
  source_place: null
  story_type: null
  story_type_id: null
  title: string
  type: string
  user: unknown
  version: number,
}
