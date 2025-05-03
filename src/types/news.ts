export type Author = {
  name: string;
  published_date: string;
  img: string;
};

export type Rating = {
  number: number;
  badge: string;
};

export type NewsArticle = {
  id: string;
  category_id: number;
  title: string;
  rating: Rating;
  total_view: number;
  author: Author;
  thumbnail_url: string;
  image_url: string;
  details: string;
  tags: string[];
  others: {
    is_today_pick: boolean;
    is_trending: boolean;
  };
  production: boolean;
};
