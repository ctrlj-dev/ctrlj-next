type WordpressErrorLocation = {
  line: number;
  column: number;
};

type WordpressError = {
  message: string;
  extensions: {
    category: string;
  };
  locations: [WordpressErrorLocation];
};

type WordpressData<T> = Record<any, T>;

export type WordpressResponse<T> = [WordpressError] | WordpressData<T>;
