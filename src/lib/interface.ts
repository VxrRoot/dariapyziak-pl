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
  images: any[];
  titleImage: any;
  content: any;
}
