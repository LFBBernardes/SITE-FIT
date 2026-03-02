import { Language } from '../constants';

export const getSupplementContent = (lang: Language, id: string) => {
  const translations: Record<Language, any> = {
    en: {
      creatine: {
        title: 'Creatine Monohydrate: The Ultimate Guide',
        heroImage: 'https://images.unsplash.com/photo-1593095194472-50971212eef7?auto=format&fit=crop&q=80&w=1200',
        excerpt: 'Discover why creatine is the most researched and effective supplement for building muscle, strength, and brain health.',
        body: `
## What is Creatine?

Creatine is a naturally occurring compound found in small amounts in certain foods and produced by the body. It plays a crucial role in energy production, particularly during short bursts of high-intensity exercise like weightlifting and sprinting.

### How It Works
Creatine increases your muscles' phosphocreatine stores. Phosphocreatine helps with the formation of adenosine triphosphate (ATP), the key molecule your cells use for energy and all basic life functions. During exercise, ATP is broken down to produce energy. The rate of ATP resynthesis limits your ability to continually perform at maximum intensity.

### The Benefits of Creatine
1. **Increased Strength and Power:** Studies show a significant increase in 1RM strength and explosive power.
2. **Muscle Hypertrophy:** Creatine draws water into the muscle cells (cell volumization), which is a signal for muscle growth.
3. **Improved Recovery:** It may reduce muscle cell damage and inflammation following exhaustive exercise.
4. **Cognitive Benefits:** Emerging research suggests creatine may improve memory and reduce mental fatigue.

## How to Take Creatine

### The Loading Phase
A common strategy is to take 20 grams of creatine per day for 5–7 days, divided into four 5-gram servings. This quickly saturates your muscles. However, you can simply take 3–5 grams per day from the start; it will just take about 3–4 weeks to reach full saturation.

### Maintenance
Once saturated, 3–5 grams per day is sufficient to maintain elevated muscle creatine levels.

### Timing
Timing is less important than consistency. Whether you take it pre-workout, post-workout, or in the morning, the most important factor is taking it every single day, even on rest days.
        `,
        bodyPart2: `
## Common Myths Debunked

### Myth 1: Creatine Causes Hair Loss
This myth stems from a single study in 2009 on rugby players that showed an increase in DHT. However, this study has never been replicated, and dozens of other studies have shown no effect on hair loss.

### Myth 2: Creatine is Bad for Your Kidneys
In healthy individuals, creatine has been proven safe in hundreds of studies. If you have pre-existing kidney disease, consult a doctor, but for the general population, it is perfectly safe.

### Myth 3: You Need to Cycle Creatine
There is no evidence that your body stops producing its own creatine or that your receptors become "desensitized." You can take it indefinitely.

## Scientific References
- *Buford TW, et al. International Society of Sports Nutrition position stand: creatine supplementation and exercise. J Int Soc Sports Nutr. 2007.*
- *Kreider RB, et al. International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine. J Int Soc Sports Nutr. 2017.*
        `,
        products: [
          {
            title: "Vigorate Pure Creatine Monohydrate",
            description: "Pharmaceutical grade, micronized for instant mixing. No fillers, no junk. 100% pure monohydrate.",
            price: "$29.99",
            imageUrl: "https://images.unsplash.com/photo-1593095194472-50971212eef7?auto=format&fit=crop&q=80&w=400",
            affiliateUrl: "#"
          },
          {
            title: "Premium Whey Isolate",
            description: "High-purity protein with minimal carbs and fats. Perfect for post-workout recovery.",
            price: "$54.99",
            imageUrl: "https://images.unsplash.com/photo-1593095191850-2a7633997240?auto=format&fit=crop&q=80&w=400",
            affiliateUrl: "#"
          }
        ],
        faqs: [
          { question: "Do I need to load creatine?", answer: "No, loading is optional. Taking 5g daily will reach the same saturation point in about 3 weeks." },
          { question: "Should I take it with carbs?", answer: "Insulin can help drive creatine into the muscles, so taking it with a meal or a protein/carb shake is a good idea." },
          { question: "Does it cause bloating?", answer: "Some people experience minor water retention in the muscles, but this is actually beneficial for growth and strength." },
          { question: "Is it safe for teenagers?", answer: "Most experts agree it is safe for healthy teenagers who are already training seriously, but parental guidance is recommended." },
          { question: "Can I take it while cutting?", answer: "Absolutely. Creatine helps preserve strength and muscle mass while in a caloric deficit." }
        ]
      }
    },
    es: {
      creatine: {
        title: 'Creatina Monohidrato: La Guía Definitiva',
        heroImage: 'https://images.unsplash.com/photo-1593095194472-50971212eef7?auto=format&fit=crop&q=80&w=1200',
        excerpt: 'Descubre por qué la creatina es el suplemento más investigado y efectivo para ganar músculo, fuerza y salud cerebral.',
        body: `
## ¿Qué es la Creatina?

La creatina es un compuesto natural que se encuentra en pequeñas cantidades en ciertos alimentos y es producido por el cuerpo. Juega un papel crucial en la producción de energía, particularmente durante ráfagas cortas de ejercicio de alta intensidad como el levantamiento de pesas y los sprints.

### Cómo Funciona
La creatina aumenta las reservas de fosfocreatina de tus músculos. La fosfocreatina ayuda con la formación de trifosfato de adenosina (ATP), la molécula clave que tus células utilizan para la energía y todas las funciones básicas de la vida. Durante el ejercicio, el ATP se descompone para producir energía. La tasa de resíntesis de ATP limita tu capacidad para rendir continuamente a la máxima intensidad.

### Los Beneficios de la Creatina
1. **Aumento de Fuerza y Potencia:** Los estudios muestran un aumento significativo en la fuerza 1RM y la potencia explosiva.
2. **Hipertrofia Muscular:** La creatina atrae agua hacia las células musculares (voluminización celular), lo cual es una señal para el crecimiento muscular.
3. **Mejora de la Recuperación:** Puede reducir el daño de las células musculares y la inflamación después de un ejercicio exhaustivo.
4. **Beneficios Cognitivos:** La investigación emergente sugiere que la creatina puede mejorar la memoria y reducir la fatiga mental.

## Cómo Tomar Creatina

### La Fase de Carga
Una estrategia común es tomar 20 gramos de creatina al día durante 5 a 7 días, divididos en cuatro porciones de 5 gramos. Esto satura rápidamente tus músculos. Sin embargo, puedes simplemente tomar de 3 a 5 gramos al día desde el principio; solo tardarás unas 3 o 4 semanas en alcanzar la saturación completa.

### Mantenimiento
Una vez saturado, de 3 a 5 gramos al día es suficiente para mantener los niveles elevados de creatina muscular.

### Momento de la Toma
El momento es menos importante que la consistencia. Ya sea que la tomes antes del entrenamiento, después del entrenamiento o por la mañana, el factor más importante es tomarla todos los días, incluso en los días de descanso.
        `,
        bodyPart2: `
## Mitos Comunes Desmentidos

### Mito 1: La Creatina Causa Pérdida de Cabello
Este mito proviene de un solo estudio en 2009 sobre jugadores de rugby que mostró un aumento en la DHT. Sin embargo, este estudio nunca ha sido replicado y docenas de otros estudios han demostrado que no tiene efecto en la pérdida de cabello.

### Mito 2: La Creatina es Mala para los Riñones
En individuos sanos, la creatina ha demostrado ser segura en cientos de estudios. Si tienes una enfermedad renal preexistente, consulta a un médico, pero para la población general, es perfectamente segura.

### Mito 3: Necesitas Ciclar la Creatina
No hay evidencia de que tu cuerpo deje de producir su propia creatina o que tus receptores se vuelvan "desensibilizados". Puedes tomarla indefinidamente.

## Referencias Científicas
- *Buford TW, et al. International Society of Sports Nutrition position stand: creatine supplementation and exercise. J Int Soc Sports Nutr. 2007.*
- *Kreider RB, et al. International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine. J Int Soc Sports Nutr. 2017.*
        `,
        products: [
          {
            title: "Vigorate Creatina Monohidrato Pura",
            description: "Grado farmacéutico, micronizada para una mezcla instantánea. Sin rellenos, sin basura. 100% pura.",
            price: "$29.99",
            imageUrl: "https://images.unsplash.com/photo-1593095194472-50971212eef7?auto=format&fit=crop&q=80&w=400",
            affiliateUrl: "#"
          },
          {
            title: "Premium Whey Isolate",
            description: "Proteína de alta pureza con mínimos carbohidratos y grasas. Perfecta para la recuperación post-entrenamiento.",
            price: "$54.99",
            imageUrl: "https://images.unsplash.com/photo-1593095191850-2a7633997240?auto=format&fit=crop&q=80&w=400",
            affiliateUrl: "#"
          }
        ],
        faqs: [
          { question: "¿Necesito hacer fase de carga?", answer: "No, la carga es opcional. Tomar 5g diarios alcanzará el mismo punto de saturación en unas 3 semanas." },
          { question: "¿Debo tomarla con carbohidratos?", answer: "La insulina puede ayudar a llevar la creatina a los músculos, por lo que tomarla con una comida o un batido de proteínas/carbohidratos es una buena idea." },
          { question: "¿Causa hinchazón?", answer: "Algunas personas experimentan una retención de agua menor en los músculos, pero esto es realmente beneficioso para el crecimiento y la fuerza." },
          { question: "¿Es segura para adolescentes?", answer: "La mayoría de los expertos coinciden en que es segura para adolescentes sanos que ya están entrenando seriamente, pero se recomienda la guía de los padres." },
          { question: "¿Puedo tomarla mientras estoy en etapa de definición?", answer: "Absolutamente. La creatina ayuda a preservar la fuerza y la masa muscular mientras estás en un déficit calórico." }
        ]
      }
    },
    br: {
      creatine: {
        title: 'Creatina Monohidratada: O Guia Definitivo',
        heroImage: 'https://images.unsplash.com/photo-1593095194472-50971212eef7?auto=format&fit=crop&q=80&w=1200',
        excerpt: 'Descubra por que a creatina é o suplemento mais pesquisado e eficaz para construir músculos, força e saúde cerebral.',
        body: `
## O que é Creatina?

A creatina é um composto natural encontrado em pequenas quantidades em certos alimentos e produzido pelo corpo. Ela desempenha um papel crucial na produção de energia, particularmente durante curtos períodos de exercícios de alta intensidade, como levantamento de peso e sprints.

### Como Funciona
A creatina aumenta os estoques de fosfocreatina nos seus músculos. A fosfocreatina ajuda na formação de trifosfato de adenosina (ATP), a molécula chave que suas células usam para energia e todas as funções básicas da vida. Durante o exercício, o ATP é quebrado para produzir energia. A taxa de ressíntese de ATP limita sua capacidade de realizar continuamente exercícios em intensidade máxima.

### Os Benefícios da Creatina
1. **Aumento de Força e Potência:** Estudos mostram um aumento significativo na força 1RM e potência explosiva.
2. **Hipertrofia Muscular:** A creatina puxa água para dentro das células musculares (volumização celular), o que é um sinal para o crescimento muscular.
3. **Melhora da Recuperação:** Pode reduzir o dano às células musculares e a inflamação após exercícios exaustivos.
4. **Benefícios Cognitivos:** Pesquisas emergentes sugerem que a creatina pode melhorar a memória e reduzir a fadiga mental.

## Como Tomar Creatina

### A Fase de Saturação (Loading)
Uma estratégia comum é tomar 20 gramas de creatina por dia durante 5 a 7 dias, divididos em quatro porções de 5 gramas. Isso satura rapidamente seus músculos. No entanto, você pode simplesmente tomar de 3 a 5 gramas por dia desde o início; levará cerca de 3 a 4 semanas para atingir a saturação total.

### Manutenção
Uma vez saturado, de 3 a 5 gramas por dia é suficiente para manter os níveis elevados de creatina muscular.

### Timing
O momento da ingestão é menos importante que a consistência. Se você toma antes do treino, depois do treino ou pela manhã, o fator mais importante é tomar todos os dias, mesmo nos dias de descanso.
        `,
        bodyPart2: `
## Mitos Comuns Desmentidos

### Mito 1: Creatina Causa Queda de Cabelo
Este mito surgiu de um único estudo de 2009 com jogadores de rúgbi que mostrou um aumento no DHT. No entanto, este estudo nunca foi replicado e dezenas de outros estudos mostraram que não há efeito na queda de cabelo.

### Mito 2: Creatina é Ruim para os Rins
Em indivíduos saudáveis, a creatina provou ser segura em centenas de estudos. Se você tem doença renal pré-existente, consulte um médico, mas para a população em geral, é perfeitamente segura.

### Mito 3: Você Precisa Fazer Ciclos de Creatina
Não há evidências de que seu corpo pare de produzir sua própria creatina ou que seus receptores se tornem "dessensibilizados". Você pode tomar indefinidamente.

## Referências Científicas
- *Buford TW, et al. International Society of Sports Nutrition position stand: creatine supplementation and exercise. J Int Soc Sports Nutr. 2007.*
- *Kreider RB, et al. International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine. J Int Soc Sports Nutr. 2017.*
        `,
        products: [
          {
            title: "Vigorate Creatina Monohidratada Pura",
            description: "Grau farmacêutico, micronizada para mistura instantânea. Sem enchimentos, sem impurezas. 100% pura.",
            price: "$29.99",
            imageUrl: "https://images.unsplash.com/photo-1593095194472-50971212eef7?auto=format&fit=crop&q=80&w=400",
            affiliateUrl: "#"
          },
          {
            title: "Premium Whey Isolate",
            description: "Proteína de alta pureza com o mínimo de carboidratos e gorduras. Perfeito para recuperação pós-treino.",
            price: "$54.99",
            imageUrl: "https://images.unsplash.com/photo-1593095191850-2a7633997240?auto=format&fit=crop&q=80&w=400",
            affiliateUrl: "#"
          }
        ],
        faqs: [
          { question: "Preciso fazer a fase de saturação?", answer: "Não, a saturação é opcional. Tomar 5g diariamente atingirá o mesmo ponto de saturação em cerca de 3 semanas." },
          { question: "Devo tomar com carboidratos?", answer: "A insulina pode ajudar a levar a creatina para os músculos, então tomar com uma refeição ou um shake de proteína/carboidrato é uma boa ideia." },
          { question: "Causa inchaço?", answer: "Algumas pessoas experimentam uma leve retenção de água nos músculos, mas isso é realmente benéfico para o crescimento e força." },
          { question: "É seguro para adolescentes?", answer: "A maioria dos especialistas concorda que é seguro para adolescentes saudáveis que já treinam seriamente, mas a orientação dos pais é recomendada." },
          { question: "Posso tomar em fase de cutting (definição)?", answer: "Com certeza. A creatina ajuda a preservar a força e a massa muscular enquanto você está em déficit calórico." }
        ]
      }
    }
  };

  const langContent = translations[lang] || translations.en;
  return langContent[id] || langContent['creatine'];
};
