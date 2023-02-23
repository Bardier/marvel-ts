export interface IChar {
  name: string;
  description: string;
  thumbnail: string;
  homepage: string;
  wiki: string;
  comics: { name: string; resourceURI: string }[];
  id: number;
}

export interface ICharApi {
  id: number;
  urls: { url: string }[];
  thumbnail: { path: string; extension: string };
  comics: { items: { name: string; resourceURI: string }[] };
  name: string;
  description: string;
  homepage: string;
}
