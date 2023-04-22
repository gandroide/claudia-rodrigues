export type lang = 'pt' | 'en'

type ILanguage = {
  [key in lang]: {
    button: {
      title: string
    }
    toastMessages: {
      success: string
      error: string
    }
    topbar: {
      about: string
      practiceArea: string
      team: string
      contact: string
      lawyer: string
    }
    home: {
      title: string
      subTitle: string
    }
    about: {
      separator: string
      title: string
      subTitle: string
      paragraph1: string
      paragraph2: string
      paragraph3: string
      paragraph4: string
      paragraph5: string
      paragraph6: string
    }
    practiceArea: {
      title: string
      subTitle: string
      skillTitle: string
      firstSkill: string
      secondSkill: string
      thirdSkill: string
    }
    cardsZone: {
      card1: {
        icon: string
        title: string
        content: string[]
      }
      card2: {
        icon: string
        title: string
        content: string[]
      }
      card3: {
        icon: string
        title: string
        content: string[]
      }
      card4: {
        icon: string
        title: string
        content: string[]
      }
      card5: {
        icon: string
        title: string
        content: string[]
      }
      card6: {
        icon: string
        title: string
        content: string[]
      }
      card7: {
        icon: string
        title: string
        content: string[]
      }
      card8: {
        icon: string
        title: string
        content: string[]
      }
      card9: {
        icon: string
        title: string
        content: string[]
      }
      card10: {
        icon: string
        title: string
        content: string[]
      }
    }
    team: {
      separator: string
      title: string
      jobTitle: string[]
    }
    contact: {
      separator: string
      title: string
    }
    contactForm: {
      name: string
      lastName: string
      email: string
      message: string
      sendButton: string
      required: string
    }
  }
}
export const Data: ILanguage = {
  pt: {
    button: {
      title: 'entre em contacto aqui',
    },
    toastMessages: {
      success: 'Mensagem enviada',
      error: 'Não foi possivel enviar sua mensagem',
    },
    topbar: {
      about: 'Sobre',
      practiceArea: 'Áreas de Práctica',
      team: 'Equipa',
      contact: 'Contactos',
      lawyer: 'Advogada, RL',
    },
    home: {
      title:
        'Vamos defender os seus direitos e fornecer a orientação jurídica que merece.',
      subTitle:
        'Entre em contacto connosco e a nossa equipa jurídica começará já a trabalhar no seu processo.',
    },
    about: {
      separator: 'Sobre',
      title: 'Colocamos a experiência e conhecimento ao seu dispor.',
      subTitle: 'Entre em contacto hoje para agendar uma reunião.',
      paragraph1:
        'Cláudia Sofia Rodrigues, e a sua equipa, orgulham-se em prestar serviços jurídicos de excelência, onde os problemas dos seus clientes estão sempre em primeiro lugar.',
      paragraph2:
        'Com vários anos de experiência, intervém em todos os campos da prática jurídica. Somos um escritório independente, generalista, que conta com quase duas décadas de atividade na área do Direito',
      paragraph3:
        'Tem o seu empenho focado em prestar soluções eficazes e alcançar os melhores resultados possíveis, para defender e proteger os seus direitos com profissionalismo e dedicação.',
      paragraph4:
        'Navegar no sistema jurídico pode ser complexo e é por isso, que nos esforçamos diariamente para tornar o processo o ais tranquilo prossível para os nossos clientes. Temos orgulho em prestar aos nossos clientes um serviço mais próximo e personalizado, de confiança e exelência.',
      paragraph5:
        'O nosso escritório encontra-se localizado no coração de Lisboan junto ao Saldanha.',
      paragraph6:
        'Proporcionamos um ambiente acolhedor e profissional. No nosso escritório, encontra empenho em oferecer o mais alto nível de serviço e representação.',
    },
    practiceArea: {
      title: 'Áreas de Práctica',
      subTitle:
        'Orgulho em oferecer um vasto leque de serviços jurídicos, sempre com o compromisso de obter bons resultados.',
      skillTitle: 'Apoio jurídico a particulares, empresas e condomínios.',
      firstSkill:
        ' - Cobrança de dívidas, recuperação de créditos e acordos de pagamentos.',
      secondSkill:
        '- Contencioso / Direito Penal / Direito Civil / Direito de trabalho / Arrendamento / Família e Menores / Contra-ordenações / Direito Comercial / Direito Imobiliário / Direito das Sucessões / Serviços a Cidadãos estrangeiros / Direito Administrativo e Urbanismo.',
      thirdSkill: '- Atos Notariais de Advogado / Registos e Notariado.',
    },
    cardsZone: {
      card1: {
        icon: '',
        title: 'Atos Notariais por Advogado',
        content: [
          '. Procurações;',
          '. Certificação de fotocópias;',
          '. Certificações de traduções;',
          '. Reconhecimento de assinaturas;',
          '. Autenticação de documentos particulares;',
          '. Testamentos;',
          '. Escrituras de habilitação de herdeiros;',
          '. Negócios jurídicos de bens imóveis;',
          '. Compra e venda;',
          '. Doações e permutas;',
          '. Registo predial;',
          '. Comercial e registo automóvel.',
        ],
      },
      card2: {
        icon: '',
        title: 'Direito Civil',
        content: [
          '. Cobrança de dívidas e indemnizações;',
          '. Condomínios;',
          '. Contratos civis;',
          '. Despejos/arrendamentos;',
          '. Providências cautelares;',
          '. Execuções/injunções;',
          '. Processos judiciais/extrajudiciais;',
          '. Pareceres;',
          '. Enriquecimento sem causa;',
          '. Fiança;',
          '. Hipotecas;',
          '. Direito de retenção;',
          '. Responsabilidade civil;',
          '. Contencioso;',
          '. Insolvências pessoais;',
          '. Direito da posse;',
          '. Usucapião;',
          '. Direito da propriedade;',
          '. Propriedade horizontal;',
          '. Usufruto/uso e habitação;',
          '. Direito de superfície;',
          '. Servidões prediais.',
        ],
      },
      card3: {
        icon: '',
        title: 'Direito Penal',
        content: [
          '. Denúncias;',
          '. Queixas e acusações particulares;',
          '. Habeas corpus; . Pedidos de indemnização cível;',
          '. Processos judiciais e recursos.',
        ],
      },
      card4: {
        icon: '',
        title: 'Direito Comercial',
        content: [
          '. Cobranças de dívidas;',
          '. Letras; . Livranças e cheques;',
          '. Contratos de natureza comercial;',
          '. Processo judiciais e recuperação de empresas e insolvências;',
          '. Constituição de sociedades comerciais e associações;',
          '. Consultoria; . Transformações de sociedades;',
          '. Aumento e redução de capital social;',
          '. Cessação e/ou unificação de quotas;',
          '. Registo de marcas e patentes;',
          '. Dissolução e liquidação de empresas;',
          '. Alteração de estatutos;',
          '. RCBE;',
          '. Todas as diligências relacionadas com as sociedades comerciais.',
        ],
      },
      card5: {
        icon: '',
        title: 'Direito Imobiliário',
        content: [
          '. Assistência a promotores imobiliários;',
          '. Sociedades comerciais e empresários em nome individual;',
          '. Elaboração de contratos de empreitada e fornecimento;',
          '. Processos judiciais e todas as diligências relacionadas com imóveis.',
        ],
      },
      card6: {
        icon: '',
        title: 'Direito da Família e Menores',
        content: [
          '. Divórcio por mútuo consentimento/litigioso;',
          '. Partilhas extrajudiciais;',
          '. Pensões de alimentos;',
          '. Processo judiciais;',
          '. Providências cautelares;',
          '. Regulação do poder paternal;',
          '. Tutela/paternidade;',
          '. Reconhecimento de decisões estrangeiras (divórcios).',
        ],
      },
      card7: {
        icon: '',
        title: 'Direito das Contra-ordenações',
        content: [
          '. Defesas em contra-ordenações ao código da estrada;',
          '. Fiscais; . Camarárias;',
          '. Impugnação de multas;',
          '. Coimas e sanções de inibição de condução;',
          '. Recursos.',
        ],
      },
      card8: {
        icon: '',
        title: 'Serviços Cidadãos Estrangeiros',
        content: [
          '. Nacionalidade portuguesa, seja reconhecimento por atribuição ou por aquisição;',
          '. Obtenção e prorrogação de vistos de permanência;',
          '. Autorização de residência (AR);',
          '. Reagrupamento familiar e autorização de residência para atividade de investimento (ARI);',
          '. Junto do SEF;',
          '. Visto Gold;',
          '. Golden Visa;',
          '. Revisão e confirmação de sentenças estrangeiras;',
          '. Regime de residente não habitual',
        ],
      },
      card9: {
        icon: '',
        title: 'Administrativo e Urbanismo',
        content: [
          '. Contratação pública;',
          '. Contratos públicos;',
          '. Obras de urbanização;',
          '. Construção;',
          '. Reconstrução;',
          '. Ampliação;',
          '. Alteração ou demolição de edifícios;',
          '. Processos de expropriação por utilidade pública;',
          '. Licenciamento de empreendimentos, turísticos e de alojamento local.',
        ],
      },
      card10: {
        icon: '',
        title: 'Direito do Trabalho',
        content: [
          '. Contratação individual;',
          '. Contratação coletiva;',
          '. Consultoria; . Recursos humanos;',
          '. Segurança social e desemprego;',
          '. Responsabilidade civil e contencioso.',
        ],
      },
    },
    team: {
      separator: 'Equipa',
      title:
        'Compromisso de rigor e profissionalismo, na procura das melhores soluções jurídicas.',
      jobTitle: [
        'Advogada',
        'Advogada Estagiária',
        'Assistente Administrativa',
      ],
    },
    contact: {
      separator: 'Contacto',
      title: 'Lisboa',
    },
    contactForm: {
      name: 'Nome',
      lastName: 'Apelido',
      email: 'Email',
      message: 'Mensagem',
      required: '* Campos obrigatórios',
      sendButton: 'enviar',
    },
  },
  en: {
    button: {
      title: 'contact here',
    },
    toastMessages: {
      success: 'Message sent',
      error: 'Your message could not be sent',
    },
    topbar: {
      about: 'About',
      practiceArea: 'Practice area',
      team: 'Team',
      contact: 'Contacts',
      lawyer: 'Lawyer, RL',
    },
    home: {
      title:
        'We will defend your rights and provide you with the legal advice you deserve.',
      subTitle:
        "Get in touch with us today and we'll start working on your process right away.",
    },
    about: {
      separator: 'About',
      title: 'We put experience and knowledge at your disposal.',
      subTitle: 'Get in touch today to schedule a meeting.',
      paragraph1:
        "Cláudia Sofia Rodrigues, and its team are proud to provide excellent legal services, where their clients' problems are always in the first place.",
      paragraph2:
        'With several years of experience, it intervenes in all fields of legal practice. We are an independent, generalist office, which has almost two decades of activity in the field of law.',
      paragraph3:
        'Its commitment is focused on providing effective solutions and achieving the best possible results, to defend and protect your rights with professionalism and dedication.',
      paragraph4:
        'Navigating the legal system can be complex, which is why we strive daily to make the process as smooth as possible for our clients. We are proud to provide our customers with a closer and more personalized service of trust and excellence.',
      paragraph5:
        'Our office is located in the heart of Lisboan next to Saldanha.',
      paragraph6:
        'We provide a welcoming and professional environment. At our firm, you will find a commitment to providing the highest level of service and representation.',
    },
    practiceArea: {
      title: 'Practice area',
      subTitle:
        'Proud to offer a wide range of legal services, always committed to achieving good results.',
      skillTitle: 'Legal support for individuals, companies and condominiums.',
      firstSkill: '- Debt collection, credit recovery and payment agreements.',
      secondSkill:
        '- Litigation / Criminal Law / Civil Law / Labor Law / Lease / Family and Minors / Administrative Offenses / Law Commercial / Real Estate Law / Inheritance Law / Services to Foreign citizens / Administrative Law and Urbanism',
      thirdSkill: '- Notarial Acts of Lawyer / Registries and Notary',
    },
    cardsZone: {
      card1: {
        icon: '',
        title: 'Notary Acts by Lawyer',
        content: [
          '. Powers of Attorney;',
          '. Certification of photocopies;',
          '. Translation certifications;',
          '. Signature recognition;',
          '. Authentication of private documents;',
          '. testaments;',
          '. Deeds of authorization of heirs;',
          '. Legal business of real estate;',
          '. Buy and sell;',
          '. Donations and exchanges;',
          '. Land register;',
          '. Commercial and car registration.',
        ],
      },
      card2: {
        icon: '',
        title: 'Civil right',
        content: [
          '. Debt collection and compensation;',
          '. Condos;',
          '. Civil contracts;',
          '. Evictions/leases;',
          '. Precautionary measures;',
          '. Executions/Injunctions;',
          '. Judicial/extrajudicial proceedings;',
          '. Opinions;',
          '. Unjust enrichment;',
          '. Bail;',
          '. Mortgages;',
          '. Right of retention;',
          '. Civil responsability;',
          '. Litigation;',
          '. Personal insolvencies;',
          '. Right of possession;',
          '. Usucaption;',
          '. Property right;',
          '. Horizontal property;',
          '. Usufruct/use and housing;',
          '. surface right;',
          '. Building easements.',
        ],
      },
      card3: {
        icon: '',
        title: 'Criminal law',
        content: [
          '. Denounces;',
          '. Private Complaints and Accusations;',
          '. Habeas corpus; ',
          '. Claims for civil damages;',
          '. Legal Proceedings and Appeals.',
        ],
      },
      card4: {
        icon: '',
        title: 'Commercial law',
        content: [
          '. Debt collections;',
          '. bills;',
          '. promissory notes and checks;',
          '. Contracts of a commercial nature;',
          '. Judicial proceedings and recovery of companies and insolvencies;',
          '. Constitution of commercial companies and associations;',
          '. Consultancy;',
          '. Transformations of companies;',
          '. Increase and reduction of share capital;',
          '. Cessation and/or unification of quotas;',
          '. Registration of trademarks and patents;',
          '. Dissolution and liquidation of companies;',
          '. Amendment of statutes;',
          '. RCBE;',
          '. All steps related to commercial companies.',
        ],
      },
      card5: {
        icon: '',
        title: 'Real estate law',
        content: [
          '. Assistance to property developers;',
          '. Commercial companies and individual entrepreneurs;',
          '. Drafting of works and supply contracts;',
          '. Judicial processes and all diligences related to real estate.',
        ],
      },
      card6: {
        icon: '',
        title: 'Family and Minors Law',
        content: [
          '. Divorce by mutual consent/litigation;',
          '. Extrajudicial shares;',
          '. Alimony allowances;',
          '. Judicial proceedings;',
          '. Precautionary measures;',
          '. Regulation of parental authority;',
          '. Guardianship/paternity;',
          '. Recognition of foreign decisions (divorce).',
        ],
      },
      card7: {
        icon: '',
        title: 'Law of Administrative Offenses',
        content: [
          '. Defenses against Highway Code violations;',
          '. Taxes; . Municipalities;',
          '. Opposition of fines;',
          '. Driving inhibition fines and sanctions;',
          '. Resources.',
        ],
      },
      card8: {
        icon: '',
        title: 'Foreign Citizen Services',
        content: [
          '. Portuguese nationality, either recognition by attribution or by acquisition;',
          '. Obtaining and extending residence visas;',
          '. Residence Authorization (AR);',
          '. Family reunification and residence permit for investment activity (ARI);',
          '. With the SEF;',
          '. Gold Visa;',
          '. Golden Visa;',
          '. Revision and confirmation of foreign judgments;',
          '. Non-habitual resident regime',
        ],
      },
      card9: {
        icon: '',
        title: 'Administrative and Urbanism',
        content: [
          '. Public procurement;',
          '. Public contracts;',
          '. Urbanization works;',
          '. Construction;',
          '. reconstruction;',
          '. Enlargement;',
          '. Alteration or demolition of buildings;',
          '. Proceedings of expropriation for public utility;',
          '. Licensing of developments, tourism and local accommodation.',
        ],
      },
      card10: {
        icon: '',
        title: 'Labor Law',
        content: [
          '. Individual hiring;',
          '. Collective contracting;',
          '. Consulting;',
          '. Human resources;',
          '. Social security and unemployment;',
          '. Liability and Litigation.',
        ],
      },
    },
    team: {
      separator: 'Team',
      title:
        'Commitment to rigor and professionalism, in the search for the best legal solutions.',
      jobTitle: ['lawyer', 'Trainee Lawyer', 'Administrative assistant'],
    },
    contact: {
      separator: 'Contact',
      title: 'Lisbon',
    },
    contactForm: {
      name: 'Name',
      lastName: 'Last Name',
      email: 'Email',
      message: 'Message',
      required: '* Required fields',
      sendButton: 'send',
    },
  },
}
