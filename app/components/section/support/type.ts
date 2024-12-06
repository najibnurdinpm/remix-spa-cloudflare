export interface IContent {
  title: string | JSX.Element | JSX.Element[];
  description: string | JSX.Element | JSX.Element[];
}

export interface IData {
  hero: {
    title: string | JSX.Element | JSX.Element[];
    subTitle: string | JSX.Element | JSX.Element[];
    lastUpdate: string;
  };
  content: IContent[];
}
