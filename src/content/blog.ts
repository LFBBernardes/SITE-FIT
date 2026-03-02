import { Language } from '../constants';

export const getBlogContent = (lang: Language, id: string) => {
  const translations: Record<Language, any> = {
    en: {
      '1': {
        title: 'How Long Does it Actually Take to Build Muscle?',
        category: 'Training Science',
        author: 'Dr. Mike Jensen',
        date: 'March 10, 2024',
        readTime: '12 min read',
        heroImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200',
        excerpt: 'The definitive guide to muscle hypertrophy timelines, genetic limits, and what to expect in your first year of training.',
        body: `
## The Hypertrophy Timeline: What Science Says

One of the most common questions in the fitness world is: "When will I see results?" While the mirror might not change overnight, physiological changes begin the moment you finish your first set.

### The First 4 Weeks: Neurological Adaptations
In the first month of training, most of your strength gains aren't actually from bigger muscles. Instead, your brain is getting better at communicating with your muscles. This is called neurological adaptation. You're learning the movement patterns, and your nervous system is becoming more efficient at recruiting motor units.

### Months 2-6: The "Newbie Gains" Phase
This is the golden era of lifting. As a beginner, your body is hypersensitive to the stimulus of weightlifting. It's not uncommon for a male beginner to gain 0.5kg to 1kg of muscle mass per month during this period, provided nutrition and sleep are optimized.

## Factors That Influence Muscle Growth

1. **Genetic Potential:** We all have a "genetic ceiling." Some people are "hyper-responders" who grow quickly, while others are "hard-gainers."
2. **Training Volume and Intensity:** You must train close to failure (1-3 reps in reserve) to stimulate the maximum amount of muscle fibers.
3. **Nutritional Surplus:** Muscle is metabolically expensive to build. You need a caloric surplus and adequate protein.
4. **Recovery:** Muscle doesn't grow in the gym; it grows while you sleep.
        `,
        bodyPart2: `
## Realistic Expectations: The 1-Year Mark

After a full year of consistent, intelligent training, a natural male trainee can expect to have gained anywhere from 5kg to 10kg of muscle mass. For females, this number is typically 2.5kg to 5kg due to hormonal differences.

### The Law of Diminishing Returns
As you become more advanced, muscle growth slows down significantly.
- **Year 1:** 5-10kg muscle gain.
- **Year 2:** 2-5kg muscle gain.
- **Year 3+:** 1-2kg muscle gain per year.

## Conclusion: It's a Marathon, Not a Sprint
Building a world-class physique takes years, not weeks. Focus on the process, track your lifts, and stay consistent. The results will follow.

### Key Takeaways:
- Strength comes first (neurological).
- Beginners grow the fastest.
- Consistency is the #1 variable for long-term success.
        `,
        faqs: [
          { question: "Can I lose fat and gain muscle at the same time?", answer: "Yes, this is called body recomposition. It's most effective for beginners or those returning from a long break." },
          { question: "How many days a week should I lift?", answer: "3-5 days is the sweet spot for most people to allow for adequate recovery." },
          { question: "Is cardio bad for muscle growth?", answer: "No, moderate cardio improves heart health and recovery. Just don't overdo it to the point of extreme caloric deficit." },
          { question: "Do I need supplements to see results?", answer: "No, supplements are the 'cherry on top.' Focus on real food and hard training first." },
          { question: "What is the best rep range for hypertrophy?", answer: "Research shows that muscle can be built in almost any rep range (5-30), but 8-12 is often the most practical." }
        ]
      }
    },
    es: {
      '1': {
        title: '¿Cuánto tiempo se tarda realmente en ganar músculo?',
        category: 'Ciencia del Entrenamiento',
        author: 'Dr. Mike Jensen',
        date: '10 de marzo de 2024',
        readTime: '12 min de lectura',
        heroImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200',
        excerpt: 'La guía definitiva sobre los plazos de la hipertrofia muscular, los límites genéticos y qué esperar en tu primer año de entrenamiento.',
        body: `
## El Cronograma de la Hipertrofia: Lo que Dice la Ciencia

Una de las preguntas más comunes en el mundo del fitness es: "¿Cuándo veré resultados?" Aunque el espejo no cambie de la noche a la mañana, los cambios fisiológicos comienzan en el momento en que terminas tu primera serie.

### Las Primeras 4 Semanas: Adaptaciones Neurológicas
En el primer mes de entrenamiento, la mayoría de tus ganancias de fuerza no provienen realmente de músculos más grandes. En cambio, tu cerebro está mejorando su comunicación con tus músculos. Esto se llama adaptación neurológica. Estás aprendiendo los patrones de movimiento y tu sistema nervioso se está volviendo más eficiente en el reclutamiento de unidades motoras.

### Meses 2-6: La Fase de "Ganancias de Principiante"
Esta es la era dorada del levantamiento de pesas. Como principiante, tu cuerpo es hipersensible al estímulo de las pesas. No es raro que un hombre principiante gane de 0,5 kg a 1 kg de masa muscular por mes durante este periodo, siempre que la nutrición y el sueño estén optimizados.

## Factores que Influyen en el Crecimiento Muscular

1. **Potencial Genético:** Todos tenemos un "techo genético". Algunas personas son "hiper-respondedoras" que crecen rápido, mientras que otras son "hard-gainers" (les cuesta ganar).
2. **Volumen e Intensidad del Entrenamiento:** Debes entrenar cerca del fallo (1-3 repeticiones en reserva) para estimular la máxima cantidad de fibras musculares.
3. **Superávit Nutricional:** El músculo es metabólicamente costoso de construir. Necesitas un superávit calórico y proteínas adecuadas.
4. **Recuperación:** El músculo no crece en el gimnasio; crece mientras duermes.
        `,
        bodyPart2: `
## Expectativas Realistas: La Marca de 1 Año

Después de un año completo de entrenamiento constante e inteligente, un hombre natural puede esperar haber ganado entre 5 kg y 10 kg de masa muscular. Para las mujeres, este número suele ser de 2,5 kg a 5 kg debido a diferencias hormonales.

### La Ley de Rendimientos Decrecientes
A medida que te vuelves más avanzado, el crecimiento muscular se ralentiza significativamente.
- **Año 1:** 5-10 kg de ganancia muscular.
- **Año 2:** 2-5 kg de ganancia muscular.
- **Año 3+:** 1-2 kg de ganancia muscular por año.

## Conclusión: Es un Maratón, no un Sprint
Construir un físico de clase mundial lleva años, no semanas. Concéntrate en el proceso, haz un seguimiento de tus levantamientos y mantente constante. Los resultados llegarán.

### Conclusiones Clave:
- La fuerza es lo primero (neurológica).
- Los principiantes crecen más rápido.
- La consistencia es la variable número 1 para el éxito a largo plazo.
        `,
        faqs: [
          { question: "¿Puedo perder grasa y ganar músculo al mismo tiempo?", answer: "Sí, esto se llama recomposición corporal. Es más efectivo para principiantes o para quienes regresan después de un largo descanso." },
          { question: "¿Cuántos días a la semana debo entrenar?", answer: "3-5 días es el punto ideal para que la mayoría de las personas permita una recuperación adecuada." },
          { question: "¿Es malo el cardio para el crecimiento muscular?", answer: "No, el cardio moderado mejora la salud del corazón y la recuperación. Solo no te excedas hasta el punto de un déficit calórico extremo." },
          { question: "¿Necesito suplementos para ver resultados?", answer: "No, los suplementos son la 'cereza del pastel'. Concéntrate primero en la comida real y el entrenamiento duro." },
          { question: "¿Cuál es el mejor rango de repeticiones para la hipertrofia?", answer: "La investigación muestra que se puede construir músculo en casi cualquier rango de repeticiones (5-30), pero 8-12 suele ser lo más práctico." }
        ]
      }
    },
    br: {
      '1': {
        title: 'Quanto tempo leva realmente para ganhar músculo?',
        category: 'Ciência do Treinamento',
        author: 'Dr. Mike Jensen',
        date: '10 de Março de 2024',
        readTime: '12 min de leitura',
        heroImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200',
        excerpt: 'O guia definitivo sobre os prazos da hipertrofia muscular, limites genéticos e o que esperar no seu primeiro ano de treino.',
        body: `
## O Cronograma da Hipertrofia: O que a Ciência Diz

Uma das perguntas mais comuns no mundo fitness é: "Quando verei resultados?" Embora o espelho possa não mudar da noite para o dia, as mudanças fisiológicas começam no momento em que você termina sua primeira série.

### As Primeiras 4 Semanas: Adaptações Neurológicas
No primeiro mês de treino, a maioria dos seus ganhos de força não são, na verdade, de músculos maiores. Em vez disso, seu cérebro está melhorando a comunicação com seus músculos. Isso é chamado de adaptação neurológica. Você está aprendendo os padrões de movimento e seu sistema nervoso está se tornando mais eficiente no recrutamento de unidades motoras.

### Meses 2-6: A Fase de "Ganhos de Iniciante" (Newbie Gains)
Esta é a era de ouro da musculação. Como iniciante, seu corpo é hipersensível ao estímulo dos pesos. Não é incomum que um homem iniciante ganhe de 0,5 kg a 1 kg de massa muscular por mês durante este período, desde que a nutrição e o sono estejam otimizados.

## Fatores que Influenciam o Crescimento Muscular

1. **Potencial Genético:** Todos nós temos um "teto genético". Algumas pessoas são "hiper-responsivas" que crescem rápido, enquanto outras são "hard-gainers" (têm dificuldade em ganhar).
2. **Volume e Intensidade do Treino:** Você deve treinar próximo à falha (1-3 repetições de reserva) para estimular a quantidade máxima de fibras musculares.
3. **Superávit Nutricional:** Músculo é metabolicamente caro para construir. Você precisa de um superávit calórico e proteínas adequadas.
4. **Recuperação:** O músculo não cresce na academia; ele cresce enquanto você dorme.
        `,
        bodyPart2: `
## Expectativas Realistas: A Marca de 1 Ano

Após um ano inteiro de treinamento consistente e inteligente, um homem natural pode esperar ter ganho entre 5 kg e 10 kg de massa muscular. Para as mulheres, esse número é tipicamente de 2,5 kg a 5 kg devido a diferenças hormonais.

### A Lei dos Rendimentos Decrescentes
À medida que você se torna mais avançado, o crescimento muscular diminui significativamente.
- **Ano 1:** 5-10 kg de ganho muscular.
- **Ano 2:** 2-5 kg de ganho muscular.
- **Ano 3+:** 1-2 kg de ganho muscular por ano.

## Conclusão: É uma Maratona, não um Sprint
Construir um físico de classe mundial leva anos, não semanas. Foque no processo, acompanhe suas cargas e mantenha a consistência. Os resultados virão.

### Principais Conclusões:
- A força vem primeiro (neurológica).
- Iniciantes crescem mais rápido.
- Consistência é a variável número 1 para o sucesso a longo prazo.
        `,
        faqs: [
          { question: "Posso perder gordura e ganhar músculo ao mesmo tempo?", answer: "Sim, isso é chamado de recomposição corporal. É mais eficaz para iniciantes ou para quem está voltando após uma longa pausa." },
          { question: "Quantos dias por semana devo treinar?", answer: "3-5 dias é o ideal para a maioria das pessoas para permitir uma recuperação adequada." },
          { question: "Cardio é ruim para o crescimento muscular?", answer: "Não, cardio moderado melhora a saúde do coração e a recuperação. Apenas não exagere a ponto de um déficit calórico extremo." },
          { question: "Preciso de suplementos para ver resultados?", answer: "Não, suplementos são a 'cereja do bolo'. Foque em comida de verdade e treino pesado primeiro." },
          { question: "Qual é a melhor faixa de repetições para hipertrofia?", answer: "Pesquisas mostram que o músculo pode ser construído em quase qualquer faixa de repetições (5-30), mas 8-12 é frequentemente a mais prática." }
        ]
      }
    }
  };

  const langContent = translations[lang] || translations.en;
  return langContent[id] || langContent['1'];
};
