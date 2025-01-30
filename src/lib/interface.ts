export interface IPortfolio {
  _id: string;
  tags: { en: string[]; pl: string[] };
  title: {
    en: string;
    pl: string;
  };
  slug: {
    current: string;
  };
  public?: boolean;
  order: number;
  images: any[];
  titleImage: any;
  content: any;
}
