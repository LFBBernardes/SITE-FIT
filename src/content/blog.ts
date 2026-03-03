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
        coverImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200',
        coverAlt: 'Cover image',
        ogImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200',
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
      },
      '2': {
        title: 'The Truth About Protein: How Much Do You Really Need?',
        category: 'Nutrition',
        author: 'Sarah Collins',
        date: 'March 08, 2024',
        readTime: '10 min read',
        coverImage: 'https://images.unsplash.com/photo-1529566652340-2c41a2c3581b?auto=format&fit=crop&q=80&w=1200',
        coverAlt: 'Cover image',
        ogImage: 'https://images.unsplash.com/photo-1529566652340-2c41a2c3581b?auto=format&fit=crop&q=80&w=1200',
        excerpt: 'Breaking down the 1g per lb rule and looking at recent meta-analyses on protein intake for hypertrophy.',
        body: `
## The Protein Obsession: Fact vs. Fiction

In the fitness community, protein is often treated like a magic potion. While it is essential for muscle repair, the amount you actually need might be less than you think.

### The 1g Per Pound Rule
For decades, the standard advice has been to consume 1 gram of protein per pound of body weight (2.2g/kg). While this is a safe and easy-to-remember target, recent research suggests that the benefits plateau much earlier.

### What the Science Says
Meta-analyses of dozens of studies have shown that for the vast majority of people, protein intake beyond **1.6g per kilogram of body weight (0.7g/lb)** does not result in additional muscle growth. 

## When You Might Need More
There are specific scenarios where higher protein intake (up to 2.2g/kg or more) is beneficial:
1. **Aggressive Caloric Deficit:** Protein helps preserve muscle mass when energy is low.
2. **High Training Volume:** Elite athletes may require more for recovery.
3. **Older Trainees:** Anabolic resistance in older adults may necessitate higher protein doses.
        `,
        bodyPart2: `
## Quality Matters
Not all protein is created equal. Focus on high-quality sources that contain a full profile of essential amino acids:
- **Animal Sources:** Whey, eggs, chicken, beef, and fish.
- **Plant Sources:** Soy, quinoa, buckwheat, and combinations of legumes and grains.

### Timing and Distribution
While total daily intake is most important, spreading your protein across 3-5 meals (20-40g per meal) can help maximize muscle protein synthesis throughout the day.

## Conclusion
Don't stress about hitting massive protein numbers. Aim for at least 1.6g/kg, focus on whole food sources, and spend the rest of your calories on healthy fats and carbohydrates to fuel your training.
        `,
        faqs: [
          { question: "Is too much protein bad for kidneys?", answer: "For healthy individuals, no. However, those with pre-existing kidney conditions should consult a doctor." },
          { question: "Can I get enough protein on a vegan diet?", answer: "Yes, but you need to be more strategic with food combinations and may benefit from a plant-based protein powder." }
        ]
      },
      '3': {
        title: 'Creatine Myths Debunked: Hair Loss, Bloating, and Kidney Health',
        category: 'Supplements',
        author: 'Alex Rivera',
        date: 'March 05, 2024',
        readTime: '8 min read',
        coverImage: 'https://images.unsplash.com/photo-1593095194472-50971212eef7?auto=format&fit=crop&q=80&w=1200',
        coverAlt: 'Cover image',
        ogImage: 'https://images.unsplash.com/photo-1593095194472-50971212eef7?auto=format&fit=crop&q=80&w=1200',
        excerpt: 'Separating bro-science from peer-reviewed research on the world\'s most popular supplement.',
        body: `
## The Most Researched Supplement in History

Creatine monohydrate is the gold standard of sports supplements. It is cheap, effective, and safe. Yet, myths about its side effects persist. Let's look at the evidence.

### Myth 1: Creatine Causes Hair Loss
This myth stems from a single 2009 study on rugby players that showed an increase in DHT (a hormone linked to hair loss). However, this study has never been replicated, and no study has ever directly linked creatine to hair loss.

### Myth 2: Creatine Damages Your Kidneys
Creatine can slightly increase creatinine levels in the blood, which is a marker used to test kidney function. This can lead to a "false positive" on a blood test, but it does not mean your kidneys are damaged.
        `,
        bodyPart2: `
## The Benefits of Creatine
Beyond just "looking bigger" due to water retention in the muscles, creatine provides real performance benefits:
- **Increased ATP Production:** More energy for explosive movements.
- **Improved Recovery:** Reduced muscle cell damage and inflammation.
- **Cognitive Benefits:** Emerging research suggests creatine may improve brain function and memory.

### How to Take It
You don't need a "loading phase." Simply take **3-5 grams of creatine monohydrate daily**. Consistency is more important than timing.

## Conclusion
Creatine is safe for the vast majority of people. It is one of the few supplements that actually delivers on its promises.
        `,
        faqs: [
          { question: "Do I need to cycle creatine?", answer: "No, there is no evidence that cycling is necessary or beneficial." },
          { question: "Should I take it with carbs?", answer: "Insulin can help with uptake, but it's not strictly necessary. Just taking it consistently is what matters." }
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
        coverImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200',
        coverAlt: 'Cover image',
        ogImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200',
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
      },
      '2': {
        title: 'La verdad sobre la proteína: ¿Cuánta necesitas realmente?',
        category: 'Nutrición',
        author: 'Sarah Collins',
        date: '8 de marzo de 2024',
        readTime: '10 min de lectura',
        coverImage: 'https://images.unsplash.com/photo-1529566652340-2c41a2c3581b?auto=format&fit=crop&q=80&w=1200',
        coverAlt: 'Cover image',
        ogImage: 'https://images.unsplash.com/photo-1529566652340-2c41a2c3581b?auto=format&fit=crop&q=80&w=1200',
        excerpt: 'Desglosando la regla de 1g por libra y analizando meta-análisis recientes sobre la ingesta de proteínas para la hipertrofia.',
        body: `
## La Obsesión por la Proteína: Realidad vs. Ficción

En la comunidad del fitness, la proteína a menudo se trata como una poción mágica. Si bien es esencial para la reparación muscular, la cantidad que realmente necesitas podría ser menor de lo que piensas.

### La Regla de 1g por Libra
Durante décadas, el consejo estándar ha sido consumir 1 gramo de proteína por libra de peso corporal (2,2g/kg). Si bien este es un objetivo seguro y fácil de recordar, investigaciones recientes sugieren que los beneficios se estancan mucho antes.

### Lo que Dice la Ciencia
Meta-análisis de docenas de estudios han demostrado que para la gran mayoría de las personas, la ingesta de proteínas más allá de **1,6g por kilogramo de peso corporal (0,7g/lb)** no resulta en un crecimiento muscular adicional.

## Cuándo podrías necesitar más
Existen escenarios específicos donde una mayor ingesta de proteínas (hasta 2,2g/kg o más) es beneficiosa:
1. **Déficit Calórico Agresivo:** La proteína ayuda a preservar la masa muscular cuando la energía es baja.
2. **Alto Volumen de Entrenamiento:** Los atletas de élite pueden requerir más para la recuperación.
3. **Personas Mayores:** La resistencia anabólica en adultos mayores puede requerir dosis más altas de proteína.
        `,
        bodyPart2: `
## La Calidad Importa
No todas las proteínas son iguales. Céntrate en fuentes de alta calidad que contengan un perfil completo de aminoácidos esenciales:
- **Fuentes Animales:** Suero de leche (whey), huevos, pollo, ternera y pescado.
- **Fuentes Vegetales:** Soja, quinoa, trigo sarraceno y combinaciones de legumbres y cereales.

### Sincronización y Distribución
Si bien la ingesta diaria total es lo más importante, distribuir la proteína en 3-5 comidas (20-40g por comida) puede ayudar a maximizar la síntesis de proteína muscular a lo largo del día.

## Conclusión
No te estreses por alcanzar números masivos de proteínas. Apunta a al menos 1,6g/kg, céntrate en fuentes de alimentos integrales y dedica el resto de tus calorías a grasas saludables y carbohidratos para alimentar tu entrenamiento.
        `,
        faqs: [
          { question: "¿Demasiada proteína es mala para los riñones?", answer: "Para personas sanas, no. Sin embargo, aquellos con condiciones renales preexistentes deben consultar a un médico." },
          { question: "¿Puedo obtener suficiente proteína con una dieta vegana?", answer: "Sí, pero debes ser más estratégico con las combinaciones de alimentos y podrías beneficiarte de un polvo de proteína de origen vegetal." }
        ]
      },
      '3': {
        title: 'Mitos de la Creatina Desmentidos: Pérdida de Cabello, Hinchazón y Salud Renal',
        category: 'Suplementos',
        author: 'Alex Rivera',
        date: '5 de marzo de 2024',
        readTime: '8 min de lectura',
        coverImage: 'https://images.unsplash.com/photo-1593095194472-50971212eef7?auto=format&fit=crop&q=80&w=1200',
        coverAlt: 'Cover image',
        ogImage: 'https://images.unsplash.com/photo-1593095194472-50971212eef7?auto=format&fit=crop&q=80&w=1200',
        excerpt: 'Separando la "bro-science" de la investigación revisada por pares sobre el suplemento más popular del mundo.',
        body: `
## El Suplemento más Investigado de la Historia

El monohidrato de creatina es el estándar de oro de los suplementos deportivos. Es barato, eficaz y seguro. Sin embargo, persisten los mitos sobre sus efectos secundarios. Veamos la evidencia.

### Mito 1: La Creatina Causa Pérdida de Cabello
Este mito proviene de un único estudio de 2009 en jugadores de rugby que mostró un aumento en la DHT (una hormona vinculada a la pérdida de cabello). Sin embargo, este estudio nunca ha sido replicado y ningún estudio ha vinculado directamente la creatina con la pérdida de cabello.

### Mito 2: La Creatina Daña tus Riñones
La creatina puede aumentar ligeramente los niveles de creatinina en la sangre, que es un marcador utilizado para probar la función renal. Esto puede llevar a un "falso positivo" en un análisis de sangre, pero no significa que tus riñones estén dañados.
        `,
        bodyPart2: `
## Los Beneficios de la Creatina
Más allá de simplemente "verse más grande" debido a la retención de agua en los músculos, la creatina proporciona beneficios reales de rendimiento:
- **Aumento de la Producción de ATP:** Más energía para movimientos explosivos.
- **Mejora de la Recuperación:** Reducción del daño celular muscular y la inflamación.
- **Beneficios Cognitivos:** Investigaciones emergentes sugieren que la creatina puede mejorar la función cerebral y la memoria.

### Cómo Tomarla
No necesitas una "fase de carga". Simplemente toma **3-5 gramos de monohidrato de creatina al día**. La consistencia es más importante que el momento de la toma.

## Conclusión
La creatina es segura para la gran mayoría de las personas. Es uno de los pocos suplementos que realmente cumple lo que promete.
        `,
        faqs: [
          { question: "¿Necesito hacer ciclos de creatina?", answer: "No, no hay evidencia de que el ciclado sea necesario o beneficioso." },
          { question: "¿Debo tomarla con carbohidratos?", answer: "La insulina puede ayudar con la absorción, pero no es estrictamente necesario. Lo que importa es tomarla de manera constante." }
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
        coverImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200',
        coverAlt: 'Cover image',
        ogImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200',
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
      },
      '2': {
        title: 'A verdade sobre a proteína: quanto você realmente precisa?',
        category: 'Nutrição',
        author: 'Sarah Collins',
        date: '8 de Março de 2024',
        readTime: '10 min de leitura',
        coverImage: 'https://images.unsplash.com/photo-1529566652340-2c41a2c3581b?auto=format&fit=crop&q=80&w=1200',
        coverAlt: 'Cover image',
        ogImage: 'https://images.unsplash.com/photo-1529566652340-2c41a2c3581b?auto=format&fit=crop&q=80&w=1200',
        excerpt: 'Analisando a regra de 1g por libra e olhando para meta-análises recentes sobre a ingestão de proteínas para hipertrofia.',
        body: `
## A Obsessão por Proteína: Fato vs. Ficção

Na comunidade fitness, a proteína é frequentemente tratada como uma poção mágica. Embora seja essencial para a reparação muscular, a quantidade que você realmente precisa pode ser menor do que você imagina.

### A Regra de 1g por Libra
Por décadas, o conselho padrão tem sido consumir 1 grama de proteína por libra de peso corporal (2,2g/kg). Embora este seja um objetivo seguro e fácil de lembrar, pesquisas recentes sugerem que os benefícios estagnam muito antes.

### O que a Ciência Diz
Meta-análises de dezenas de estudos mostraram que, para a grande maioria das pessoas, a ingestão de proteínas além de **1,6g por quilograma de peso corporal (0,7g/lb)** não resulta em crescimento muscular adicional.

## Quando você pode precisar de mais
Existem cenários específicos onde uma ingestão maior de proteínas (até 2,2g/kg ou mais) é benéfica:
1. **Déficit Calórico Agressivo:** A proteína ajuda a preservar a massa muscular quando a energia está baixa.
2. **Alto Volume de Treino:** Atletas de elite podem exigir mais para a recuperação.
3. **Pessoas Mais Velhas:** A resistência anabólica em adultos mais velhos pode necessitar de doses mais altas de proteína.
        `,
        bodyPart2: `
## Qualidade Importa
Nem todas as proteínas são criadas iguais. Foque em fontes de alta qualidade que contenham um perfil completo de aminoácidos essenciais:
- **Fontes Animais:** Whey protein, ovos, frango, carne bovina e peixe.
- **Fontes Vegetais:** Soja, quinoa, trigo sarraceno e combinações de leguminosas e cereais.

### Timing e Distribuição
Embora a ingestão diária total seja o mais importante, distribuir sua proteína em 3-5 refeições (20-40g por refeição) pode ajudar a maximizar a síntese de proteína muscular ao longo do dia.

## Conclusão
Não se estresse em atingir números massivos de proteína. Mire em pelo menos 1,6g/kg, foque em fontes de alimentos integrais e gaste o resto de suas calorias em gorduras saudáveis e carboidratos para abastecer seu treino.
        `,
        faqs: [
          { question: "Muita proteína faz mal para os rins?", answer: "Para indivíduos saudáveis, não. No entanto, aqueles com condições renais pré-existentes devem consultar um médico." },
          { question: "Posso obter proteína suficiente em uma dieta vegana?", answer: "Sim, mas você precisa ser mais estratégico com as combinações de alimentos e pode se beneficiar de um suplemento de proteína vegetal." }
        ]
      },
      '3': {
        title: 'Mitos da Creatina Desmentidos: Queda de Cabelo, Inchaço e Saúde Renal',
        category: 'Suplementos',
        author: 'Alex Rivera',
        date: '5 de Março de 2024',
        readTime: '8 min de leitura',
        coverImage: 'https://images.unsplash.com/photo-1593095194472-50971212eef7?auto=format&fit=crop&q=80&w=1200',
        coverAlt: 'Cover image',
        ogImage: 'https://images.unsplash.com/photo-1593095194472-50971212eef7?auto=format&fit=crop&q=80&w=1200',
        excerpt: 'Separando a "bro-science" da pesquisa revisada por pares sobre o suplemento mais popular do mundo.',
        body: `
## O Suplemento Mais Pesquisado da História

O monohidrato de creatina é o padrão ouro dos suplementos esportivos. É barato, eficaz e seguro. No entanto, mitos sobre seus efeitos colaterais persistem. Vamos olhar para as evidências.

### Mito 1: Creatina Causa Queda de Cabelo
Este mito vem de um único estudo de 2009 com jogadores de rúgbi que mostrou um aumento no DHT (um hormônio ligado à queda de cabelo). No entanto, este estudo nunca foi replicado e nenhum estudo jamais ligou diretamente a creatina à queda de cabelo.

### Mito 2: Creatina Danifica seus Rins
A creatina pode aumentar ligeiramente os níveis de creatinina no sangue, que é um marcador usado para testar a função renal. Isso pode levar a un "falso positivo" em um exame de sangue, mas não significa que seus rins estejam danificados.
        `,
        bodyPart2: `
## Os Benefícios da Creatina
Além de apenas "parecer maior" devido à retenção de água nos músculos, a creatina oferece benefícios reais de desempenho:
- **Aumento da Produção de ATP:** Mais energia para movimentos explosivos.
- **Melhora da Recuperação:** Redução do dano celular muscular e inflamação.
- **Benefícios Cognitivos:** Pesquisas emergentes sugerem que a creatina pode melhorar a função cerebral e a memória.

### Como Tomar
Você não precisa de uma "fase de carga". Simplesmente tome **3-5 gramas de monohidrato de creatina diariamente**. A consistência é mais importante do que o horário.

## Conclusión
A creatina é segura para a grande maioria das pessoas. É um dos poucos suplementos que realmente entrega o que promete.
        `,
        faqs: [
          { question: "Preciso fazer ciclos de creatina?", answer: "Não, não há evidências de que o ciclo seja necessário ou benéfico." },
          { question: "Devo tomar com carboidratos?", answer: "A insulina pode ajudar na absorção, mas não é estritamente necessário. Apenas tomar consistentemente é o que importa." }
        ]
      }
    }
  };

  const langContent = translations[lang] || translations.en;
  return langContent[id] || null;
};
