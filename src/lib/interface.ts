export interface IPortfolio {
  _id: string;
  tags: string[];
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
