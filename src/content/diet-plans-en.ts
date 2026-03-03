// EN Diet Plans
export const enDietPlans = {
  '1200-calorie': {
    title: '1200 Calorie Weight Loss Diet',
    kcal: '1200',
    goal: 'Fat Loss / Cutting',
    coverImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1200',
    coverAlt: '1200 Calorie Diet Plan',
    ogImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'A precision-engineered 1200 calorie plan for significant fat loss while maintaining nutrient density.',
    macros: { protein: 100, carbs: 120, fats: 35 },
    body: `
## Who This Plan Fits

The 1200 calorie diet is a low-calorie approach typically suited for smaller-framed women or individuals with a sedentary lifestyle looking for rapid fat loss. It is considered a "hard cut" and should be followed with caution.

### Calorie Breakdown
- **Daily Total:** 1200 kcal
- **Protein:** 400 kcal (33%)
- **Carbs:** 480 kcal (40%)
- **Fats:** 315 kcal (27%)

### Macro Options
1. **Balanced:** 30% P / 40% C / 30% F
2. **High Protein:** 40% P / 30% C / 30% F
3. **Low Carb:** 35% P / 20% C / 45% F

## Nutrition Principles

1. **Volume Eating:** Focus on high-volume, low-calorie foods like leafy greens and cruciferous vegetables.
2. **Protein First:** Every meal must contain a lean protein source to preserve muscle.
3. **Hydration:** Drink 2 glasses of water before every meal to increase satiety.
    `,
    meals: [
      { name: 'Breakfast', title: 'Egg White Omelet', items: ['1 cup egg whites', 'Spinach and mushrooms', '1 slice low-carb toast'] },
      { name: 'Lunch', title: 'Tuna Salad', items: ['1 can tuna in water', 'Large mixed green salad', '1 tbsp light dressing', 'Cucumber slices'] },
      { name: 'Snack', title: 'Greek Yogurt', items: ['150g non-fat Greek yogurt', '1/2 cup berries'] },
      { name: 'Dinner', title: 'Grilled White Fish', items: ['150g Cod or Tilapia', 'Steamed asparagus', '100g cauliflower rice'] }
    ],
    bodyPart2: `
## Substitution List
- **Protein:** Chicken breast, turkey, tofu, egg whites.
- **Carbs:** Berries, leafy greens, zucchini, cauliflower.
- **Fats:** Small amounts of olive oil, avocado, or nuts.

## Practical Tips
- **Meal Prep:** Prepare your vegetables in advance to avoid reaching for snacks.
- **Seasoning:** Use herbs and spices instead of sauces to keep calories low.

## Common Mistakes
- **Underestimating Portions:** At 1200 calories, every gram counts. Use a food scale.
- **Skipping Protein:** This leads to muscle loss and increased hunger.

## FAQ
- **Is 1200 calories safe?** For short periods and specific populations, yes. Consult a doctor.
- **Will I lose muscle?** High protein intake and resistance training help mitigate this.
- **Can I exercise?** Light to moderate exercise is fine, but listen to your body.
    `,
    faqs: [
      { question: "Is 1200 calories too low?", answer: "For many, yes. It is a very aggressive deficit." },
      { question: "How much weight will I lose?", answer: "Typically 1-2 lbs per week depending on starting weight." }
    ]
  },
  '2500-calorie': {
    title: '2500 Calorie Muscle Building Diet',
    kcal: '2500',
    goal: 'Bulking / Lean Muscle',
    coverImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200',
    coverAlt: '2500 Calorie Diet Plan',
    ogImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'A comprehensive 2500 calorie meal plan designed to fuel intense workouts and support lean muscle hypertrophy.',
    macros: { protein: 180, carbs: 300, fats: 65 },
    body: `
## Who This Plan Fits

The 2500 calorie diet is ideal for active men or women looking to build muscle or maintain a high level of performance.

### Calorie Breakdown
- **Daily Total:** 2500 kcal
- **Protein:** 720 kcal (29%)
- **Carbs:** 1200 kcal (48%)
- **Fats:** 585 kcal (23%)

### Macro Options
1. **Bulking:** 25% P / 55% C / 20% F
2. **Maintenance:** 30% P / 40% C / 30% F
3. **Performance:** 20% P / 60% C / 20% F

## Nutrition Principles

1. **Consistency:** Eat at similar times daily to optimize digestion.
2. **Complex Carbs:** Focus on oats, rice, and potatoes for sustained energy.
3. **Post-Workout:** Ensure a mix of protein and fast-acting carbs after training.
    `,
    meals: [
      { name: 'Breakfast', title: 'Oatmeal & Eggs', items: ['1 cup oats', '2 whole eggs', '1 scoop whey', 'Berries'] },
      { name: 'Lunch', title: 'Chicken & Rice', items: ['200g chicken', '1 cup brown rice', 'Broccoli', 'Olive oil'] },
      { name: 'Snack', title: 'Protein Shake & Nuts', items: ['1 scoop whey', '30g almonds', '1 banana'] },
      { name: 'Dinner', title: 'Steak & Potato', items: ['200g lean steak', '250g potato', 'Asparagus'] }
    ],
    bodyPart2: `
## Substitution List
- **Protein:** Beef, salmon, turkey, eggs.
- **Carbs:** Quinoa, pasta, sweet potato, fruit.
- **Fats:** Avocado, nut butters, olive oil.

## Practical Tips
- **Liquid Calories:** If struggling to eat enough, use smoothies.
- **Fiber:** Don't forget your greens for gut health.

## Common Mistakes
- **Dirty Bulking:** Eating too much junk leads to excessive fat gain.
- **Ignoring Sleep:** Muscle grows while you sleep, not in the gym.

## FAQ
- **Will I get fat?** A slight surplus minimizes fat gain.
- **How long to bulk?** Usually 12-16 weeks.
    `,
    faqs: [
      { question: "Is 2500 enough for a bulk?", answer: "For most, yes. Adjust if weight doesn't move." },
      { question: "Can I eat pizza?", answer: "Occasionally, as part of the 20% flexibility." }
    ]
  },
  // Add other plans here...
};
