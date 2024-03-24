import { ExampleQuery, ExampleSchema } from '@/@types/global.ts/graphql';
import { print } from 'graphql/language/printer';
import { exampleQueryResponseToExampleQuery } from '../mappers/exampleMapper';
import { Example } from '../queries/exampleQuery.graphql';
import fetchAPI from '../utils/api';

async function exampleResolver(): Promise<ExampleSchema[]> {
  const parseQuery = print(Example);
  const response: ExampleQuery = await fetchAPI(parseQuery);
  return exampleQueryResponseToExampleQuery(response);
}

export { exampleResolver };
