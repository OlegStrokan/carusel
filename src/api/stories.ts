import { instance } from './instance';
import { StorieDto } from '../dtos/stories';


type ResponseDataType = {
  cursor: {
    before: null,
    after: string,
  }
  data: StorieDto[]
}

export const getStories = (): Promise<ResponseDataType> => {
  return instance.get<ResponseDataType>('/stories').then((response) => response.data);
}
