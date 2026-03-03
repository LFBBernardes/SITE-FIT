import { DietPlan } from './types';

export const brDietPlans: Record<string, DietPlan> = {
  '1200-calorias': {
    title: 'Dieta de 1200 Calorias para Perda de Peso: O Guia Definitivo',
    kcal: '1200',
    goal: 'Perda de Gordura / Cutting',
    coverImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1200',
    coverAlt: 'Plano de Dieta 1200 Calorias',
    ogImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Um plano de 1200 calorias projetado com precisão para perda significativa de gordura, mantendo a densidade de nutrientes e a saúde metabólica.',
    macros: { protein: 100, carbs: 120, fats: 35 },
    body: `
## Para quem este plano se adapta

A dieta de 1200 calorias é uma abordagem de baixa caloria tipicamente adequada para mulheres de estrutura pequena ou indivíduos com um estilo de vida sedentário que buscam perda rápida de gordura. É considerada um "corte severo" e deve ser seguida com cautela. Para a maioria dos adultos ativos, essa ingestão está abaixo da taxa metabólica basal (TMB), o que significa que cria um déficit energético significativo.

### Divisão de Calorias
- **Total Diário:** 1200 kcal
- **Proteína:** 400 kcal (33%) - Crucial para a preservação muscular.
- **Carboidratos:** 480 kcal (40%) - Fornece glicose essencial para a função cerebral.
- **Gorduras:** 315 kcal (27%) - Necessárias para a saúde hormonal e absorção de vitaminas.

### Opções de Macros
1. **Equilibrado:** 30% Proteína / 40% Carboidratos / 30% Gorduras - Melhor para a adesão geral.
2. **Alta Proteína:** 40% Proteína / 30% Carboidratos / 30% Gorduras - Ideal para maximizar a saciedade.
3. **Low Carb:** 35% Proteína / 20% Carboidratos / 45% Gorduras - Bom para a sensibilidade à insulina.

## Princípios de Nutrição para o Sucesso

1. **Alimentação por Volume:** Foque em alimentos de alto volume e baixas calorias, como folhas verdes, abobrinha e vegetais crucíferos.
2. **Proteína Primeiro:** Cada refeição deve conter uma fonte de proteína magra.
3. **Hidratação:** Beba 2 copos de água antes de cada refeição.

<AdSlot id="top" />

## Exemplo de Plano Alimentar Diário

### Refeição 1: Café da Manhã (250 kcal)
- **Omelete de Claras:** 1 xícara de claras de ovo, 1/2 xícara de espinafre, 1/4 xícara de cogumelos.
- **Acompanhamento:** 1 fatia de pão integral torrado.

### Refeição 2: Almoço (350 kcal)
- **Salada Mediterrânea de Atum:** 1 lata de atum em água, 2 xícaras de folhas verdes, tomate cereja, pepino, 1/2 colher de sopa de azeite de oliva extra virgem e limão.

### Refeição 3: Lanche (150 kcal)
- **Iogurte Grego:** 150g de iogurte grego zero com 1/2 xícara de mirtilos.

### Refeição 4: Jantar (350 kcal)
- **Peixe Branco Grelhado:** 150g de Bacalhau ou Tilápia com limão e alho.
- **Vegetais:** 2 xícaras de brócolis no vapor e 1 xícara de arroz de couve-flor.

<AdSlot id="mid" />

## Lista de Substituições
- **Proteína:** Peito de frango, peru, peixe branco, tofu, claras de ovo.
- **Carboidratos:** Arroz de couve-flor, abobrinha, frutas vermelhas, folhas verdes.
- **Gorduras:** Abacate, azeite de oliva, amêndoas.

## Dicas Práticas
- **Meal Prep:** Planeje com antecedência para evitar escolhas impulsivas.
- **Temperos:** Use ervas e especiarias para dar sabor sem adicionar calorias.
- **Sono:** A falta de sono aumenta a fome.

<AdSlot id="bottom" />

## Perguntas Frecuentes
**A dieta de 1200 calorias é segura?**
Para períodos curtos e pessoas específicas, sim. Consulte sempre um médico.

**Quanto peso vou perder?**
Normalmente de 0.5 a 1 kg por semana.
    `,
    meals: [
      { name: 'Café da Manhã', title: 'Omelete de Claras', items: ['1 xícara de claras', 'Espinafre e cogumelos', '1 fatia de pão integral'] },
      { name: 'Almoço', title: 'Salada de Atum', items: ['1 lata de atum', 'Salada mista grande', '1/2 colher de sopa de azeite'] },
      { name: 'Lanche', title: 'Iogurte Grego', items: ['150g de iogurte grego', '1/2 xícara de mirtilos'] },
      { name: 'Jantar', title: 'Peixe Branco', items: ['150g de peixe branco', 'Brócolis no vapor', 'Arroz de couve-flor'] }
    ],
    bodyPart2: `
## Conclusão
A dieta de 1200 calorias é uma ferramenta poderosa para a perda de peso quando usada corretamente.
    `,
    faqs: [
      { question: "É muito baixa?", answer: "Para muitos sim, é um déficit agressivo." }
    ]
  },
  '1500-calorias': {
    title: 'Plano de 1500 Calorias para Perda de Gordura: Resultados Sustentáveis',
    kcal: '1500',
    goal: 'Perda de Gordura',
    coverImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1200',
    coverAlt: 'Plano de 1500 Calorias',
    ogImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Um plano sustentável de 1500 calorias para perda de gordura constante e manutenção de energia.',
    macros: { protein: 120, carbs: 150, fats: 45 },
    body: `
## Resumo do Plano
Este plano é ideal para mulheres ativas ou homens sedentários. Proporciona energia suficiente para treinar enquanto mantém um déficit saudável.

<AdSlot id="top" />

## Exemplo de Refeições
- **Café da Manhã:** Aveia com proteína e frutas.
- **Almoço:** Bowl de frango grelhado com quinoa e vegetais.
- **Jantar:** Salmão assado com aspargos e batata doce.

<AdSlot id="mid" />
    `,
    meals: [
      { name: 'Café da Manhã', title: 'Aveia com Proteína', items: ['1/2 xícara de aveia', '1 scoop de whey', 'Frutas'] },
      { name: 'Almoço', title: 'Bowl de Frango', items: ['150g de frango', '1/2 xícara de quinoa', 'Vegetais'] },
      { name: 'Jantar', title: 'Salmão Assado', items: ['150g de salmão', 'Aspargos', 'Batata doce'] }
    ],
    bodyPart2: `## Dicas...`,
    faqs: []
  },
  '1800-calorias': {
    title: 'Plano de 1800 Calorias para Manutenção e Recomposição',
    kcal: '1800',
    goal: 'Manutenção',
    coverImage: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=1200',
    coverAlt: 'Plano de 1800 Calorias',
    ogImage: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Equilíbrio e energia com 1800 calorias para um estilo de vida ativo.',
    macros: { protein: 140, carbs: 180, fats: 55 },
    body: `## Resumo do Plano...`,
    meals: [
      { name: 'Café da Manhã', title: 'Iogurte com Granola', items: ['200g de iogurte grego', 'Granola', 'Fruta'] },
      { name: 'Almoço', title: 'Wrap de Peru', items: ['Tortilha integral', 'Peru', 'Hummus', 'Salada'] },
      { name: 'Jantar', title: 'Iscas de Carne', items: ['150g de carne magra', 'Arroz', 'Vegetais'] }
    ],
    bodyPart2: ``,
    faqs: []
  },
  '2000-calorias': {
    title: 'Dieta de 2000 Calorias para Performance Esportiva',
    kcal: '2000',
    goal: 'Performance',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200',
    coverAlt: 'Plano de 2000 Calorias',
    ogImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Otimize sua saúde e força com 2000 calorias projetadas para atletas.',
    macros: { protein: 160, carbs: 200, fats: 60 },
    body: `## Resumo do Plano...`,
    meals: [
      { name: 'Café da Manhã', title: 'Ovos com Torradas', items: ['3 ovos', '2 torradas integrais', 'Espinafre'] },
      { name: 'Almoço', title: 'Frango com Batata Doce', items: ['200g de frango', 'Batata doce assada', 'Vagem'] },
      { name: 'Jantar', title: 'Peixe com Quinoa', items: ['200g de peixe', 'Quinoa', 'Salada'] }
    ],
    bodyPart2: ``,
    faqs: []
  },
  '2500-calorias': {
    title: 'Dieta de 2500 Calorias para Ganho de Massa: Bulking Limpo',
    kcal: '2500',
    goal: 'Bulking / Massa Magra',
    coverImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200',
    coverAlt: 'Plano de Dieta 2500 Calorias',
    ogImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Um plano alimentar abrangente de 2500 calorias projetado para abastecer treinos intensos e apoiar a hipertrofia muscular magra.',
    macros: { protein: 180, carbs: 300, fats: 65 },
    body: `
## Para quem este plano se adapta
Ideal para homens ativos que buscam ganhar músculo ou manter um alto nível de performance.

### Divisão de Calorias
- **Total Diário:** 2500 kcal
- **Proteína:** 720 kcal (29%)
- **Carboidratos:** 1200 kcal (48%)
- **Gorduras:** 585 kcal (23%)

<AdSlot id="top" />

## Exemplo de Plano Alimentar Diário

### Refeição 1: Café da Manhã (600 kcal)
- **Mingau Energético:** 1 xícara de aveia, 1 scoop de whey, 1 colher de sopa de pasta de amendoim e mirtilos.

### Refeição 2: Almoço (650 kcal)
- **Bowl de Carne e Arroz:** 200g de carne magra, 1.5 xícaras de arroz jasmim e vegetais.

### Refeição 3: Lanche (400 kcal)
- **Shake e Nozes:** 1 scoop de whey, 1 banana e 30g de amêndoas.

### Refeição 4: Jantar (750 kcal)
- **Salmão e Quinoa:** 200g de salmão assado, 1.5 xícaras de quinoa e salada grande.

<AdSlot id="mid" />

## Dicas Práticas
- **Consistência:** Siga o plano por pelo menos 4 semanas.
- **Calorias Líquidas:** Use shakes se estiver se estiver se sentindo muito cheio.

<AdSlot id="bottom" />
    `,
    meals: [
      { name: 'Café da Manhã', title: 'Aveia e Proteína', items: ['1 xícara de aveia', '1 scoop de whey', 'Pasta de amendoim'] },
      { name: 'Almoço', title: 'Carne e Arroz', items: ['200g de carne magra', 'Arroz jasmim', 'Vegetais'] },
      { name: 'Lanche', title: 'Shake e Banana', items: ['1 scoop de whey', '1 banana', 'Amêndoas'] },
      { name: 'Jantar', title: 'Salmão e Quinoa', items: ['200g de salmão', 'Quinoa', 'Salada'] }
    ],
    bodyPart2: `
## Perguntas Frequentes
**É suficiente para ganhar massa?**
Para a maioria dos homens, sim. Ajuste conforme seu progresso.
    `,
    faqs: [
      { question: "Posso comer pizza?", answer: "Ocasionalmente, dentro dos seus limites calóricos." }
    ]
  },
  'cutting': {
    title: 'Plano de Cutting Extremo: Máxima Definição',
    kcal: '1600',
    goal: 'Cutting',
    coverImage: 'https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&q=80&w=1200',
    coverAlt: 'Plano de Cutting',
    ogImage: 'https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Máxima definição muscular com foco em alta proteína.',
    macros: { protein: 180, carbs: 120, fats: 40 },
    body: `## Resumo do Plano...`,
    meals: [
      { name: 'Café da Manhã', title: 'Omelete de Claras', items: ['1.5 xícaras de claras', 'Espinafre'] },
      { name: 'Almoço', title: 'Salada de Peru', items: ['200g de peito de peru', 'Salada grande'] },
      { name: 'Jantar', title: 'Peixe e Brócolis', items: ['250g de peixe branco', 'Brócolis'] }
    ],
    bodyPart2: ``,
    faqs: []
  },
  'bulking': {
    title: 'Estratégia de Bulking Massivo: Tamanho Máximo',
    kcal: '3200',
    goal: 'Bulking',
    coverImage: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=1200',
    coverAlt: 'Plano de Bulking',
    ogImage: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Ganho máximo de tamanho e força para hardgainers.',
    macros: { protein: 200, carbs: 450, fats: 80 },
    body: `## Resumo do Plano...`,
    meals: [
      { name: 'Café da Manhã', title: 'Aveia com Hipercalórico', items: ['1.5 xícaras de aveia', '2 scoops de whey', 'Pasta de amendoim'] },
      { name: 'Almoço', title: 'Carne e Arroz', items: ['250g de carne', '2 xícaras de arroz', 'Abacate'] },
      { name: 'Jantar', title: 'Salmão e Quinoa', items: ['250g de salmão', 'Quinoa', 'Vegetais'] }
    ],
    bodyPart2: ``,
    faqs: []
  },
  'low-carb': {
    title: 'Estratégia Low Carb / Keto: Saúde Metabólica',
    kcal: '1800',
    goal: 'Saúde / Perda de Gordura',
    coverImage: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=1200',
    coverAlt: 'Plano Low Carb',
    ogImage: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Melhore sua sensibilidade à insulina e queime gordura.',
    macros: { protein: 150, carbs: 50, fats: 110 },
    body: `## Resumo do Plano...`,
    meals: [
      { name: 'Café da Manhã', title: 'Ovos com Abacate', items: ['3 ovos', '1/2 abacate', 'Bacon'] },
      { name: 'Almoço', title: 'Salada de Bife', items: ['200g de bife', 'Nozes', 'Azeite de oliva'] },
      { name: 'Jantar', title: 'Salmão com Manteiga', items: ['200g de salmão', 'Aspargos na manteiga'] }
    ],
    bodyPart2: ``,
    faqs: []
  },
  'ganho-de-massa': {
    title: 'Plano de Hipertrofia Muscular Magra: Baseado em Ciência',
    kcal: '2800',
    goal: 'Ganho de Massa',
    coverImage: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1200',
    coverAlt: 'Plano para Ganho de Massa',
    ogImage: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Construa músculo minimizando o ganho de gordura.',
    macros: { protein: 200, carbs: 350, fats: 70 },
    body: `## Resumo do Plano...`,
    meals: [
      { name: 'Café da Manhã', title: 'Panquecas de Proteína', items: ['Aveia', 'Whey', 'Claras', 'Mirtilos'] },
      { name: 'Almoço', title: 'Frango com Macarrão', items: ['200g de frango', 'Macarrão integral', 'Molho marinara'] },
      { name: 'Jantar', title: 'Carne com Arroz', items: ['200g de carne magra', 'Arroz', 'Vegetais'] }
    ],
    bodyPart2: ``,
    faqs: []
  }
};
