import { instance } from './instance';
import { CollectionDto } from '../dtos/collections';

type ResponseDataType = {
  data: CollectionDto[]
}

export const getCollections = (): Promise<ResponseDataType> => {
  return instance.get<ResponseDataType>('/collections').then((response) => response.data);
}
