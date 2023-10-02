import fetchAPI from '../utils/api';
import { Example } from '../queries/exampleQuery.graphql';
import { print } from 'graphql/language/printer';
import { ExampleQuery, ExampleSchema } from '@/@types/global.ts/graphql';
import { exampleQueryResponseToExampleQuery } from '../mappers/exampleMapper';
import { WordpressResponse } from '../types/rest';

async function exampleProvoder(): Promise<ExampleSchema[]> {
  const parseQuery = print(Example);
  const response: ExampleQuery = await fetchAPI(parseQuery);
  return exampleQueryResponseToExampleQuery(response);
}

export { exampleProvoder };
