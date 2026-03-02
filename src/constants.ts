export type Language = 'en' | 'es' | 'br';

export interface NavItem {
  title: string;
  href: string;
}

export interface ContentStrings {
  common: {
    workouts: string;
    diet: string;
    supplements: string;
    calculators: string;
    blog: string;
    getStarted: string;
    learnMore: string;
    latestPosts: string;
    featuredArticles: string;
    newsletterTitle: string;
    newsletterDesc: string;
    subscribe: string;
    backToWorkouts: string;
    backToDiet: string;
    backToSupplements: string;
    backToBlog: string;
    relatedContent: string;
    medicalDisclaimerTitle: string;
    medicalDisclaimerDesc: string;
    faqTitle: string;
    emailCaptureTitle: string;
    emailCaptureDesc: string;
    emailCaptureCTA: string;
    affiliateDisclosureTitle: string;
    affiliateDisclosureDesc: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    quickNav: string;
  };
  calculators: {
    bmi: string;
    bmr: string;
    calories: string;
    macros: string;
    bodyFat: string;
  };
}

export const translations: Record<Language, ContentStrings> = {
  en: {
    common: {
      workouts: "Workouts",
      diet: "Diet Plans",
      supplements: "Supplements",
      calculators: "Calculators",
      blog: "Blog",
      getStarted: "Get Started",
      learnMore: "Learn More",
      latestPosts: "Latest Posts",
      featuredArticles: "Featured Articles",
      newsletterTitle: "Join Our Community",
      newsletterDesc: "Get the latest fitness tips and exclusive diet plans delivered to your inbox.",
      subscribe: "Subscribe",
      backToWorkouts: "Back to Workouts",
      backToDiet: "Back to Diet Plans",
      backToSupplements: "Back to Supplements",
      backToBlog: "Back to Blog",
      relatedContent: "Related Content",
      medicalDisclaimerTitle: "Medical Disclaimer",
      medicalDisclaimerDesc: "The information provided on Vigorate is for educational and informational purposes only and is not intended as medical advice. Always consult with a qualified healthcare professional before starting any new exercise program, diet, or supplement regimen.",
      faqTitle: "Frequently Asked Questions",
      emailCaptureTitle: "Get the Ultimate Performance Guide",
      emailCaptureDesc: "Join 50,000+ athletes receiving our weekly science-backed training tips, diet plans, and exclusive supplement discounts.",
      emailCaptureCTA: "Join the Authority",
      affiliateDisclosureTitle: "Affiliate Disclosure",
      affiliateDisclosureDesc: "This guide contains affiliate links. If you purchase through these links, we may earn a small commission at no extra cost to you.",
    },
    home: {
      heroTitle: "Elevate Your Performance",
      heroSubtitle: "The ultimate authority in fitness, nutrition, and science-backed training.",
      quickNav: "Quick Navigation",
    },
    calculators: {
      bmi: "BMI Calculator",
      bmr: "BMR Calculator",
      calories: "Daily Calories",
      macros: "Macro Calculator",
      bodyFat: "Body Fat %",
    },
  },
  es: {
    common: {
      workouts: "Entrenamientos",
      diet: "Planes de Dieta",
      supplements: "Suplementos",
      calculators: "Calculadoras",
      blog: "Blog",
      getStarted: "Empezar",
      learnMore: "Saber más",
      latestPosts: "Últimas publicaciones",
      featuredArticles: "Artículos destacados",
      newsletterTitle: "Únete a nuestra comunidad",
      newsletterDesc: "Recibe los últimos consejos de fitness y planes de dieta exclusivos en tu bandeja de entrada.",
      subscribe: "Suscribirse",
      backToWorkouts: "Volver a Entrenamientos",
      backToDiet: "Volver a Planes de Dieta",
      backToSupplements: "Volver a Suplementos",
      backToBlog: "Volver al Blog",
      relatedContent: "Contenido Relacionado",
      medicalDisclaimerTitle: "Aviso Médico",
      medicalDisclaimerDesc: "La información proporcionada en Vigorate es solo para fines educativos e informativos y no pretende ser un consejo médico. Siempre consulte con un profesional de la salud calificado antes de comenzar cualquier nuevo programa de ejercicios, dieta o régimen de suplementos.",
      faqTitle: "Preguntas Frecuentes",
      emailCaptureTitle: "Obtén la Guía Definitiva de Rendimiento",
      emailCaptureDesc: "Únete a más de 50,000 atletas que reciben nuestros consejos de entrenamiento semanales basados en la ciencia.",
      emailCaptureCTA: "Únete a la Autoridad",
      affiliateDisclosureTitle: "Divulgación de Afiliados",
      affiliateDisclosureDesc: "Esta guía contiene enlaces de afiliados. Si compra a través de estos enlaces, podemos ganar una pequeña comisión sin costo adicional para usted.",
    },
    home: {
      heroTitle: "Eleva tu Rendimiento",
      heroSubtitle: "La autoridad definitiva en fitness, nutrición y entrenamiento basado en la ciencia.",
      quickNav: "Navegación Rápida",
    },
    calculators: {
      bmi: "Calculadora IMC",
      bmr: "Calculadora TMB",
      calories: "Calorías Diarias",
      macros: "Calculadora Macros",
      bodyFat: "% Grasa Corporal",
    },
  },
  br: {
    common: {
      workouts: "Treinos",
      diet: "Planos de Dieta",
      supplements: "Suplementos",
      calculators: "Calculadoras",
      blog: "Blog",
      getStarted: "Começar",
      learnMore: "Saiba mais",
      latestPosts: "Últimos Posts",
      featuredArticles: "Artigos em Destaque",
      newsletterTitle: "Junte-se à nossa Comunidade",
      newsletterDesc: "Receba as últimas dicas de fitness e planos de dieta exclusivos no seu e-mail.",
      subscribe: "Inscrever-se",
      backToWorkouts: "Voltar para Treinos",
      backToDiet: "Voltar para Planos de Dieta",
      backToSupplements: "Voltar para Suplementos",
      backToBlog: "Voltar para o Blog",
      relatedContent: "Conteúdo Relacionado",
      medicalDisclaimerTitle: "Aviso Médico",
      medicalDisclaimerDesc: "As informações fornecidas no Vigorate são apenas para fins educacionais e informativos e não se destinam a aconselhamento médico. Sempre consulte um profissional de saúde qualificado antes de iniciar qualquer novo programa de exercícios, dieta ou regime de suplementos.",
      faqTitle: "Perguntas Frequentes",
      emailCaptureTitle: "Obtenha o Guia Definitivo de Performance",
      emailCaptureDesc: "Junte-se a mais de 50.000 atletas que recebem nossas dicas semanais de treinamento baseadas em ciência.",
      emailCaptureCTA: "Junte-se à Autoridade",
      affiliateDisclosureTitle: "Divulgação de Afiliados",
      affiliateDisclosureDesc: "Este guia contém links de afiliados. Se você comprar através desses links, podemos ganhar uma pequena comissão sem custo adicional para você.",
    },
    home: {
      heroTitle: "Eleve seu Desempenho",
      heroSubtitle: "A autoridade máxima em fitness, nutrição e treinamento baseado em ciência.",
      quickNav: "Navegação Rápida",
    },
    calculators: {
      bmi: "Calculadora IMC",
      bmr: "Calculadora TMB",
      calories: "Calorias Diárias",
      macros: "Calculadora Macros",
      bodyFat: "% Gordura Corporal",
    },
  },
};
