export interface CollectionDto {
  bookmarks: number,
  cover_contains_title: boolean,
  cover_image_bg: string
  cover_image_url: string
  default_viewport: {
    last_location: null,
    viewport: {
      northeast:
        {
          lat: number,
          lon: number,
        }
      southwest: {
        lat: number,
        lon: number,
      }
    }
  }
  description: null,
  draft: boolean,
  explicitly_followed: boolean,
  followers: number,
  header_image_bg: string,
  header_image_url: null,
  id: string,
  implicitly_followed: false
  name: string
  revision: number,
  share_url: string,
  short_id: string,
  stories: number,
  user: unknown
  web_name: string,
}
