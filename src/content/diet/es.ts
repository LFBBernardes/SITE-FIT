import { DietPlan } from './types';

export const esDietPlans: Record<string, DietPlan> = {
  '1200-calorias': {
    title: 'Dieta de 1200 Calorías para Perder Peso: La Guía Definitiva',
    kcal: '1200',
    goal: 'Pérdida de Grasa / Definición',
    coverImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1200',
    coverAlt: 'Plan de Dieta 1200 Calorías',
    ogImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Un plan de 1200 calorías diseñado con precisión para una pérdida de grasa significativa manteniendo la densidad de nutrientes y la salud metabólica.',
    macros: { protein: 100, carbs: 120, fats: 35 },
    body: `
## A quién se adapta este plan

La dieta de 1200 calorías es un enfoque bajo en calorías típicamente adecuado para mujeres de complexión pequeña o personas con un estilo de vida sedentario que buscan una pérdida de grasa rápida. Se considera un "corte duro" y debe seguirse con precaución. Para la mayoría de los adultos activos, esta ingesta está por debajo de la tasa metabólica basal (TMB), lo que significa que crea un déficit energético significativo.

### Desglose de Calorías
- **Total Diario:** 1200 kcal
- **Proteína:** 400 kcal (33%) - Crucial para la preservación muscular.
- **Carbohidratos:** 480 kcal (40%) - Proporciona glucosa esencial para la función cerebral.
- **Grasas:** 315 kcal (27%) - Necesarias para la salud hormonal y la absorción de vitaminas.

### Opciones de Macros
1. **Equilibrado:** 30% Proteína / 40% Carbohidratos / 30% Grasas - Mejor para la adherencia general.
2. **Alta Proteína:** 40% Proteína / 30% Carbohidratos / 30% Grasas - Ideal para maximizar la saciedad.
3. **Bajo en Carbohidratos:** 35% Proteína / 20% Carbohidratos / 45% Grasas - Bueno para la sensibilidad a la insulina.

## Principios de Nutrición para el Éxito

1. **Alimentación por Volumen:** Concéntrate en alimentos de alto volumen y bajas calorías como verduras de hoja verde, calabacín y verduras crucíferas.
2. **Proteína Primero:** Cada comida debe contener una fuente de proteína magra.
3. **Hidratación:** Bebe 2 vasos de agua antes de cada comida.

<adslot id="top" />

## Ejemplo de Plan de Comidas Diario

### Comida 1: Desayuno (250 kcal)
- **Tortilla de Claras:** 1 taza de claras de huevo, 1/2 taza de espinacas, 1/4 taza de champiñones.
- **Acompañamiento:** 1 rebanada de pan integral germinado.

### Comida 2: Almuerzo (350 kcal)
- **Ensalada Mediterránea de Atún:** 1 lata de atún al natural, 2 tazas de verduras mixtas, tomates cherry, pepino, 1/2 cucharada de aceite de oliva virgen extra y limón.

### Comida 3: Merienda (150 kcal)
- **Yogur Griego:** 150g de yogur griego natural sin grasa con 1/2 taza de arándanos.

### Comida 4: Cena (350 kcal)
- **Pescado Blanco a la Plancha:** 150g de bacalao o tilapia con limón y ajo.
- **Verduras:** 2 tazas de brócoli al vapor y 1 taza de arroz de coliflor.

<adslot id="mid" />

## Lista de Sustituciones
- **Proteína:** Pechuga de pollo, pavo, pescado blanco, tofu, claras de huevo.
- **Carbohidratos:** Arroz de coliflor, calabacín, bayas, verduras de hoja verde.
- **Grasas:** Aguacate, aceite de oliva, almendras.

## Consejos Prácticos
- **Preparación de Comidas:** Planifica con antelación para evitar tentaciones.
- **Especias:** Usa hierbas para dar sabor sin añadir calorías.
- **Sueño:** La falta de sueño aumenta el hambre.

<adslot id="bottom" />

## Preguntas Frecuentes
**¿Es segura la dieta de 1200 calorías?**
Para periodos cortos y personas específicas, sí. Consulta siempre a un médico.

**¿Cuántos kilos perderé?**
Normalmente de 0.5 a 1 kg por semana.
    `,
    meals: [
      { name: 'Desayuno', title: 'Tortilla de Claras', items: ['1 taza de claras de huevo', 'Espinacas y champiñones', '1 rebanada de pan integral'] },
      { name: 'Almuerzo', title: 'Ensalada de Atún', items: ['1 lata de atún al natural', 'Ensalada mixta grande', '1/2 cucharada de aceite de oliva'] },
      { name: 'Merienda', title: 'Yogur Griego', items: ['150g de yogur griego', '1/2 taza de bayas'] },
      { name: 'Cena', title: 'Pescado Blanco', items: ['150g de pescado blanco', 'Brócoli al vapor', 'Arroz de coliflor'] }
    ],
    bodyPart2: `
## Conclusión
La dieta de 1200 calorías es una herramienta poderosa para la pérdida de peso cuando se usa correctamente.
    `,
    faqs: [
      { question: "¿Es demasiado baja?", answer: "Para muchos sí, es un déficit agresivo." }
    ]
  },
  '1500-calorias': {
    title: 'Plan de 1500 Calorías para Perder Grasa: Resultados Sostenibles',
    kcal: '1500',
    goal: 'Pérdida de Grasa',
    coverImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1200',
    coverAlt: 'Plan de 1500 Calorías',
    ogImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Un plan sostenible de 1500 calorías para una pérdida de grasa constante y mantenimiento de energía.',
    macros: { protein: 120, carbs: 150, fats: 45 },
    body: `
## Resumen del Plan
Este plan es ideal para mujeres activas o hombres sedentarios. Proporciona suficiente energía para entrenar mientras mantiene un déficit saludable.

<adslot id="top" />

## Ejemplo de Comidas
- **Desayuno:** Avena con proteína y bayas.
- **Almuerzo:** Bol de pollo a la plancha con quinoa y verduras.
- **Cena:** Salmón al horno con espárragos y batata.

<adslot id="mid" />
    `,
    meals: [
      { name: 'Desayuno', title: 'Avena con Proteína', items: ['1/2 taza de avena', '1 medida de proteína', 'Bayas'] },
      { name: 'Almuerzo', title: 'Bol de Pollo', items: ['150g de pollo', '1/2 taza de quinoa', 'Verduras'] },
      { name: 'Cena', title: 'Salmón al Horno', items: ['150g de salmón', 'Espárragos', 'Batata'] }
    ],
    bodyPart2: `## Consejos...`,
    faqs: []
  },
  '1800-calorias': {
    title: 'Plan de 1800 Calorías para Mantenimiento y Recomposición',
    kcal: '1800',
    goal: 'Mantenimiento',
    coverImage: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=1200',
    coverAlt: 'Plan de 1800 Calorías',
    ogImage: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Equilibrio y energía con 1800 calorías para un estilo de vida activo.',
    macros: { protein: 140, carbs: 180, fats: 55 },
    body: `## Resumen del Plan...`,
    meals: [
      { name: 'Desayuno', title: 'Yogur con Granola', items: ['200g de yogur griego', 'Granola', 'Fruta'] },
      { name: 'Almuerzo', title: 'Wrap de Pavo', items: ['Tortilla integral', 'Pavo', 'Hummus', 'Ensalada'] },
      { name: 'Cena', title: 'Salteado de Ternera', items: ['150g de ternera magra', 'Arroz', 'Verduras'] }
    ],
    bodyPart2: ``,
    faqs: []
  },
  '2000-calorias': {
    title: 'Dieta de 2000 Calorías para el Rendimiento Deportivo',
    kcal: '2000',
    goal: 'Rendimiento',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200',
    coverAlt: 'Plan de 2000 Calorías',
    ogImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Optimiza tu salud y fuerza con 2000 calorías diseñadas para atletas.',
    macros: { protein: 160, carbs: 200, fats: 60 },
    body: `## Resumen del Plan...`,
    meals: [
      { name: 'Desayuno', title: 'Huevos con Tostadas', items: ['3 huevos', '2 tostadas integrales', 'Espinacas'] },
      { name: 'Almuerzo', title: 'Pollo con Batata', items: ['200g de pollo', 'Batata asada', 'Judías verdes'] },
      { name: 'Cena', title: 'Pescado con Quinoa', items: ['200g de pescado', 'Quinoa', 'Ensalada'] }
    ],
    bodyPart2: ``,
    faqs: []
  },
  '2500-calorias': {
    title: 'Dieta de 2500 Calorías para Ganar Músculo: Volumen Limpio',
    kcal: '2500',
    goal: 'Volumen / Músculo Magro',
    coverImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200',
    coverAlt: 'Plan de Dieta 2500 Calorías',
    ogImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Un plan de comidas integral de 2500 calorías diseñado para alimentar entrenamientos intensos y apoyar la hipertrofia muscular magra.',
    macros: { protein: 180, carbs: 300, fats: 65 },
    body: `
## A quién se adapta este plan
Ideal para hombres activos que buscan ganar músculo o mantener un alto nivel de rendimiento.

### Desglose de Calorías
- **Total Diario:** 2500 kcal
- **Proteína:** 720 kcal (29%)
- **Carbohidratos:** 1200 kcal (48%)
- **Grasas:** 585 kcal (23%)

<adslot id="top" />

## Ejemplo de Plan de Comidas Diario

### Comida 1: Desayuno (600 kcal)
- **Avena Energética:** 1 taza de avena, 1 medida de proteína, 1 cucharada de mantequilla de maní y arándanos.

### Comida 2: Almuerzo (650 kcal)
- **Bol de Carne y Arroz:** 200g de carne magra, 1.5 tazas de arroz jazmín y verduras.

### Comida 3: Merienda (400 kcal)
- **Batido y Nueces:** 1 medida de proteína, 1 plátano y 30g de almendras.

### Comida 4: Cena (750 kcal)
- **Salmón y Quinoa:** 200g de salmón al horno, 1.5 tazas de quinoa y ensalada grande.

<adslot id="mid" />

## Consejos Prácticos
- **Consistencia:** Sigue el plan al menos 4 semanas.
- **Calorías Líquidas:** Usa batidos si te sientes muy lleno.

<adslot id="bottom" />
    `,
    meals: [
      { name: 'Desayuno', title: 'Avena y Proteína', items: ['1 taza de avena', '1 medida de proteína', 'Mantequilla de maní'] },
      { name: 'Almuerzo', title: 'Carne y Arroz', items: ['200g de carne magra', 'Arroz jazmín', 'Verduras'] },
      { name: 'Merienda', title: 'Batido y Plátano', items: ['1 medida de proteína', '1 plátano', 'Almendras'] },
      { name: 'Cena', title: 'Salmón y Quinoa', items: ['200g de salmón', 'Quinoa', 'Ensalada'] }
    ],
    bodyPart2: `
## Preguntas Frecuentes
**¿Es suficiente para ganar volumen?**
Para la mayoría de los hombres, sí. Ajusta según tu progreso.
    `,
    faqs: [
      { question: "¿Puedo comer pizza?", answer: "Ocasionalmente, dentro de tus límites calóricos." }
    ]
  },
  'definicion': {
    title: 'Plan de Definición Extrema: Máxima Nitidez',
    kcal: '1600',
    goal: 'Definición',
    coverImage: 'https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&q=80&w=1200',
    coverAlt: 'Plan de Definición',
    ogImage: 'https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Máxima definición muscular con un enfoque alto en proteínas.',
    macros: { protein: 180, carbs: 120, fats: 40 },
    body: `## Resumen del Plan...`,
    meals: [
      { name: 'Desayuno', title: 'Tortilla de Claras', items: ['1.5 tazas de claras', 'Espinacas'] },
      { name: 'Almuerzo', title: 'Ensalada de Pavo', items: ['200g de pavo', 'Ensalada grande'] },
      { name: 'Cena', title: 'Pescado y Brócoli', items: ['250g de pescado blanco', 'Brócoli'] }
    ],
    bodyPart2: ``,
    faqs: []
  },
  'volumen': {
    title: 'Estrategia de Volumen Masivo: Tamaño Máximo',
    kcal: '3200',
    goal: 'Volumen',
    coverImage: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=1200',
    coverAlt: 'Plan de Volumen',
    ogImage: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Ganancia máxima de tamaño y fuerza para hardgainers.',
    macros: { protein: 200, carbs: 450, fats: 80 },
    body: `## Resumen del Plan...`,
    meals: [
      { name: 'Desayuno', title: 'Avena con Ganador', items: ['1.5 tazas de avena', '2 medidas de proteína', 'Mantequilla de maní'] },
      { name: 'Almuerzo', title: 'Carne y Arroz', items: ['250g de carne', '2 tazas de arroz', 'Aguacate'] },
      { name: 'Cena', title: 'Salmón y Quinoa', items: ['250g de salmón', 'Quinoa', 'Verduras'] }
    ],
    bodyPart2: ``,
    faqs: []
  },
  'bajo-en-carbohidratos': {
    title: 'Estrategia Bajo en Carbohidratos / Keto: Salud Metabólica',
    kcal: '1800',
    goal: 'Salud / Pérdida de Grasa',
    coverImage: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=1200',
    coverAlt: 'Plan Bajo en Carbohidratos',
    ogImage: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Mejora tu sensibilidad a la insulina y quema grasa.',
    macros: { protein: 150, carbs: 50, fats: 110 },
    body: `## Resumen del Plan...`,
    meals: [
      { name: 'Desayuno', title: 'Huevos con Aguacate', items: ['3 huevos', '1/2 aguacate', 'Bacon'] },
      { name: 'Almuerzo', title: 'Ensalada de Filete', items: ['200g de filete', 'Nueces', 'Aceite de oliva'] },
      { name: 'Cena', title: 'Salmón con Mantequilla', items: ['200g de salmón', 'Espárragos con mantequilla'] }
    ],
    bodyPart2: ``,
    faqs: []
  },
  'ganar-musculo': {
    title: 'Plan de Hipertrofia Muscular Magra: Basado en Ciencia',
    kcal: '2800',
    goal: 'Ganar Músculo',
    coverImage: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1200',
    coverAlt: 'Plan para Ganar Músculo',
    ogImage: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Construye músculo minimizando la ganancia de grasa.',
    macros: { protein: 200, carbs: 350, fats: 70 },
    body: `## Resumen del Plan...`,
    meals: [
      { name: 'Desayuno', title: 'Tortitas de Proteína', items: ['Avena', 'Proteína', 'Claras', 'Arándanos'] },
      { name: 'Almuerzo', title: 'Pollo con Pasta', items: ['200g de pollo', 'Pasta integral', 'Salsa marinara'] },
      { name: 'Cena', title: 'Carne con Arroz', items: ['200g de carne magra', 'Arroz', 'Verduras'] }
    ],
    bodyPart2: ``,
    faqs: []
  }
};
