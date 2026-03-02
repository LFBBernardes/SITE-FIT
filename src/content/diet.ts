import { Language } from '../constants';

export const getDietContent = (lang: Language, kcal: string) => {
  const translations: Record<Language, any> = {
    en: {
      '2500': {
        title: '2500 Calorie Muscle Building Diet',
        kcal: '2500',
        goal: 'Bulking / Lean Muscle',
        heroImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200',
        excerpt: 'A comprehensive 2500 calorie meal plan designed to fuel intense workouts and support lean muscle hypertrophy.',
        macros: { protein: 180, carbs: 300, fats: 65 },
        body: `
## The Science of 2500 Calories

For most active individuals, 2500 calories represents a "lean bulk" or maintenance phase. This caloric intake provides enough energy to sustain high-intensity resistance training while maintaining a slight surplus to facilitate muscle protein synthesis.

### Why Protein Matters
In this plan, we prioritize a high protein intake (approx. 180g). Protein is the building block of muscle tissue. During intense training, you create micro-tears in your muscle fibers; protein provides the amino acids necessary to repair and grow these fibers stronger.

### The Role of Complex Carbohydrates
Carbohydrates are your body's preferred energy source. By consuming 300g of carbs, you ensure your glycogen stores are topped off, allowing for better performance in the gym and improved recovery post-workout.

## Nutrition Principles for Success

1. **Meal Frequency:** Aim for 4-5 meals per day to keep a steady flow of nutrients.
2. **Hydration:** Drink at least 3-4 liters of water daily.
3. **Food Quality:** Focus on whole, unprocessed foods 80% of the time.
        `,
        meals: [
          { name: 'Breakfast', title: 'Power Oats & Eggs', items: ['1 cup rolled oats', '1 scoop whey protein', '2 whole eggs', 'Handful of blueberries'] },
          { name: 'Lunch', title: 'Chicken & Sweet Potato', items: ['200g grilled chicken breast', '250g roasted sweet potato', 'Steamed broccoli', '1/2 avocado'] },
          { name: 'Pre-Workout', title: 'Energy Boost', items: ['1 large banana', '1 slice whole grain toast', '1 tbsp peanut butter'] },
          { name: 'Dinner', title: 'Salmon & Quinoa', items: ['200g baked salmon', '1 cup cooked quinoa', 'Mixed green salad', 'Olive oil dressing'] }
        ],
        bodyPart2: `
## Food Substitutions

Don't like chicken? No problem. Use this list to swap ingredients while keeping your macros in check:

- **Protein:** Swap 200g chicken for 200g lean beef, 220g white fish, or 250g tofu.
- **Carbs:** Swap 250g sweet potato for 200g brown rice, 200g pasta, or 300g white potato.
- **Fats:** Swap 1/2 avocado for 15g almonds, 15g walnuts, or 1 tbsp extra virgin olive oil.

### Consistency is King
The best diet is the one you can stick to. If 2500 calories feels like too much food, try drinking some of your calories in the form of smoothies. If you're still hungry, increase your vegetable intake to add volume without significant calories.
        `,
        faqs: [
          { question: "Is 2500 calories enough for bulking?", answer: "For most people between 70-85kg, 2500 calories is a great starting point for a lean bulk." },
          { question: "Can I eat 'junk' food on this plan?", answer: "We recommend the 80/20 rule: 80% whole foods, 20% flexibility for treats." },
          { question: "What if I miss a meal?", answer: "Don't stress. Just try to hit your total daily calories and protein by the end of the day." },
          { question: "Should I take supplements with this diet?", answer: "Supplements are optional but whey protein and creatine can help you hit your targets more easily." },
          { question: "How long should I follow this plan?", answer: "Follow it for at least 4-6 weeks before making adjustments based on your weight progress." }
        ]
      }
    },
    es: {
      '2500': {
        title: 'Dieta de 2500 Calorías para Ganar Músculo',
        kcal: '2500',
        goal: 'Volumen / Músculo Magro',
        heroImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200',
        excerpt: 'Un plan de comidas integral de 2500 calorías diseñado para alimentar entrenamientos intensos y apoyar la hipertrofia muscular magra.',
        macros: { protein: 180, carbs: 300, fats: 65 },
        body: `
## La Ciencia de las 2500 Calorías

Para la mayoría de las personas activas, 2500 calorías representan una fase de "volumen magro" o mantenimiento. Esta ingesta calórica proporciona suficiente energía para sostener un entrenamiento de resistencia de alta intensidad mientras se mantiene un ligero excedente para facilitar la síntesis de proteínas musculares.

### Por qué Importa la Proteína
En este plan, priorizamos una alta ingesta de proteínas (aprox. 180g). La proteína es el bloque de construcción del tejido muscular. Durante el entrenamiento intenso, creas micro-desgarros en tus fibras musculares; la proteína proporciona los aminoácidos necesarios para reparar y hacer que estas fibras crezcan más fuertes.

### El Papel de los Carbohidratos Complejos
Los carbohidratos son la fuente de energía preferida de tu cuerpo. Al consumir 300g de carbohidratos, te aseguras de que tus reservas de glucógeno estén al máximo, lo que permite un mejor rendimiento en el gimnasio y una mejor recuperación después del entrenamiento.

## Principios de Nutrición para el Éxito

1. **Frecuencia de Comidas:** Apunta a 4-5 comidas al día para mantener un flujo constante de nutrientes.
2. **Hidratación:** Bebe al menos 3-4 litros de agua al día.
3. **Calidad de los Alimentos:** Concéntrate en alimentos integrales y no procesados el 80% del tiempo.
        `,
        meals: [
          { name: 'Desayuno', title: 'Avena Energética y Huevos', items: ['1 taza de avena', '1 medida de proteína de suero', '2 huevos enteros', 'Un puñado de arándanos'] },
          { name: 'Almuerzo', title: 'Pollo y Batata', items: ['200g de pechuga de pollo a la plancha', '250g de batata asada', 'Brócoli al vapor', '1/2 aguacate'] },
          { name: 'Pre-Entrenamiento', title: 'Impulso de Energía', items: ['1 plátano grande', '1 rebanada de pan integral', '1 cucharada de mantequilla de maní'] },
          { name: 'Cena', title: 'Salmón y Quinoa', items: ['200g de salmón al horno', '1 taza de quinoa cocida', 'Ensalada verde mixta', 'Aderezo de aceite de oliva'] }
        ],
        bodyPart2: `
## Sustituciones de Alimentos

¿No te gusta el pollo? No hay problema. Usa esta lista para intercambiar ingredientes manteniendo tus macros bajo control:

- **Proteína:** Cambia 200g de pollo por 200g de carne magra, 220g de pescado blanco o 250g de tofu.
- **Carbohidratos:** Cambia 250g de batata por 200g de arroz integral, 200g de pasta o 300g de patata blanca.
- **Grasas:** Cambia 1/2 aguacate por 15g de almendras, 15g de nueces o 1 cucharada de aceite de oliva virgen extra.

### La Consistencia es la Clave
La mejor dieta es la que puedes seguir. Si 2500 calorías te parecen demasiada comida, intenta beber algunas de tus calorías en forma de batidos. Si todavía tienes hambre, aumenta tu ingesta de verduras para añadir volumen sin calorías significativas.
        `,
        faqs: [
          { question: "¿Son suficientes 2500 calorías para ganar volumen?", answer: "Para la mayoría de las personas entre 70-85kg, 2500 calorías es un excelente punto de partida para un volumen magro." },
          { question: "¿Puedo comer comida 'chatarra' en este plan?", answer: "Recomendamos la regla 80/20: 80% alimentos integrales, 20% flexibilidad para caprichos." },
          { question: "¿Qué pasa si me salto una comida?", answer: "No te estreses. Solo intenta alcanzar tus calorías y proteínas totales diarias al final del día." },
          { question: "¿Debo tomar suplementos con esta dieta?", answer: "Los suplementos son opcionales, pero la proteína de suero y la creatina pueden ayudarte a alcanzar tus objetivos más fácilmente." },
          { question: "¿Cuánto tiempo debo seguir este plan?", answer: "Síguelo durante al menos 4-6 semanas antes de hacer ajustes basados en el progreso de tu peso." }
        ]
      }
    },
    br: {
      '2500': {
        title: 'Dieta de 2500 Calorias para Ganho de Massa',
        kcal: '2500',
        goal: 'Bulking / Massa Magra',
        heroImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200',
        excerpt: 'Um plano alimentar abrangente de 2500 calorias projetado para abastecer treinos intensos e apoiar a hipertrofia muscular magra.',
        macros: { protein: 180, carbs: 300, fats: 65 },
        body: `
## A Ciência das 2500 Calorias

Para a maioria dos indivíduos ativos, 2500 calorias representam um "bulking limpo" ou uma fase de manutenção. Essa ingestão calórica fornece energia suficiente para sustentar o treinamento de resistência de alta intensidade, mantendo um leve excedente para facilitar a síntese de proteína muscular.

### Por que a Proteína é Importante
Neste plano, priorizamos uma alta ingestão de proteínas (aprox. 180g). A proteína é o bloco de construção do tecido muscular. Durante o treinamento intenso, você cria micro-lesões em suas fibras musculares; a proteína fornece os aminoácidos necessários para reparar e fazer com que essas fibras cresçam mais fortes.

### O Papel dos Carboidratos Complexos
Os carboidratos são a fonte de energia preferida do seu corpo. Ao consumir 300g de carboidratos, você garante que seus estoques de glicogênio estejam cheios, permitindo um melhor desempenho na academia e uma melhor recuperação pós-treino.

## Princípios Nutricionais para o Sucesso

1. **Frequência de Refeições:** Tente fazer de 4 a 5 refeições por dia para manter um fluxo constante de nutrientes.
2. **Hidratação:** Beba pelo menos 3 a 4 litros de água diariamente.
3. **Qualidade dos Alimentos:** Foque em alimentos integrais e não processados 80% do tempo.
        `,
        meals: [
          { name: 'Café da Manhã', title: 'Mingau Proteico e Ovos', items: ['1 xícara de aveia em flocos', '1 scoop de whey protein', '2 ovos inteiros', 'Punhado de mirtilos'] },
          { name: 'Almoço', title: 'Frango e Batata Doce', items: ['200g de peito de frango grelhado', '250g de batata doce assada', 'Brócolis no vapor', '1/2 abacate'] },
          { name: 'Pré-Treino', title: 'Impulso de Energia', items: ['1 banana grande', '1 fatia de pão integral', '1 colher de sopa de pasta de amendoim'] },
          { name: 'Jantar', title: 'Salmão e Quinoa', items: ['200g de salmão assado', '1 xícara de quinoa cozida', 'Salada de folhas verdes', 'Azeite de oliva'] }
        ],
        bodyPart2: `
## Substituições de Alimentos

Não gosta de frango? Sem problemas. Use esta lista para trocar ingredientes mantendo seus macros sob controle:

- **Proteína:** Troque 200g de frango por 200g de carne bovina magra, 220g de peixe branco ou 250g de tofu.
- **Carboidratos:** Troque 250g de batata doce por 200g de arroz integral, 200g de macarrão integral ou 300g de batata inglesa.
- **Gorduras:** Troque 1/2 abacate por 15g de amêndoas, 15g de nozes ou 1 colher de sopa de azeite de oliva extra virgem.

### Consistência é a Chave
A melhor dieta é aquela que você consegue seguir. Se 2500 calorias parecerem muita comida, tente beber algumas de suas calorias na forma de shakes. Se você ainda estiver com fome, aumente a ingestão de vegetais para adicionar volume sem calorias significativas.
        `,
        faqs: [
          { question: "2500 calorias são suficientes para bulking?", answer: "Para a maioria das pessoas entre 70-85kg, 2500 calorias é um ótimo ponto de partida para um bulking limpo." },
          { question: "Posso comer 'besteiras' neste plano?", answer: "Recomendamos a regra 80/20: 80% alimentos integrais, 20% flexibilidade para mimos." },
          { question: "E se eu perder uma refeição?", answer: "Não se estresse. Apenas tente atingir suas calorias e proteínas totais diárias até o final do dia." },
          { question: "Devo tomar suplementos com esta dieta?", answer: "Suplementos são opcionais, mas whey protein e creatina podem ajudar você a atingir suas metas mais facilmente." },
          { question: "Por quanto tempo devo seguir este plano?", answer: "Siga por pelo menos 4 a 6 semanas antes de fazer ajustes com base no progresso do seu peso." }
        ]
      }
    }
  };

  const langContent = translations[lang] || translations.en;
  return langContent[kcal] || langContent['2500'];
};
