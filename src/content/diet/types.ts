export interface DietPlan {
  title: string;
  kcal: string;
  goal: string;
  coverImage: string;
  coverAlt: string;
  ogImage: string;
  excerpt: string;
  macros: {
    protein: number;
    carbs: number;
    fats: number;
  };
  body: string;
  meals: {
    name: string;
    title: string;
    items: string[];
  }[];
  bodyPart2: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}
