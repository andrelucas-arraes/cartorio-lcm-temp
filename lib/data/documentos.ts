export interface DocumentoItem {
  titulo: string;
  itens: string[];
  observacao?: string;
}

export interface ServicoDoc {
  titulo: string;
  slug: string;
  categoria: string;
  descricao?: string;
  sessoes: DocumentoItem[];
  observacoesFinais?: string[];
}

export const servicosDocs: ServicoDoc[] = [
  {
    titulo: "Escritura de Compra e Venda",
    slug: "compra-e-venda",
    categoria: "Tabelionato de Notas (Imóveis)",
    descricao:
      "Para realizar a escritura de compra e venda de um imóvel urbano, é necessário apresentar alguns documentos do vendedor, do comprador e do imóvel.",
    sessoes: [
      {
        titulo: "1. Documentos do Vendedor (Pessoa Física)",
        itens: [
          "RG ou CNH",
          "CPF (caso não conste no documento de identidade)",
          "Certidão de nascimento ou certidão de casamento atualizada",
          "Comprovante de residência",
          "Profissão",
          "Telefone",
          "E-mail",
        ],
        observacao:
          "Se o vendedor for casado, será necessário apresentar também os documentos do cônjuge.",
      },
      {
        titulo: "2. Documentos do Vendedor (Pessoa Jurídica)",
        itens: [
          "CNPJ",
          "Contrato social (ou contrato social consolidado)",
          "Alterações contratuais (caso não tenha contrato consolidado)",
          "Certidão simplificada da Junta Comercial",
          "Documento de identidade (RG ou CNH) do representante legal",
          "Telefone do representante",
          "E-mail do representante",
        ],
      },
      {
        titulo: "3. Documentos do Comprador (Pessoa Física)",
        itens: [
          "RG ou CNH",
          "CPF (caso não conste no documento de identidade)",
          "Certidão de nascimento ou certidão de casamento atualizada",
          "Comprovante de residência",
          "Profissão",
          "Telefone",
          "E-mail",
        ],
        observacao:
          "Se o comprador for casado, também será necessário apresentar os documentos do cônjuge.",
      },
      {
        titulo: "4. Documentos do Comprador (Pessoa Jurídica)",
        itens: [
          "CNPJ",
          "Contrato social (ou contrato social consolidado)",
          "Alterações contratuais (caso não tenha contrato consolidado)",
          "Certidão simplificada da Junta Comercial",
          "Documento de identidade (RG ou CNH) do representante legal",
          "Telefone do representante",
          "E-mail do representante",
        ],
      },
      {
        titulo: "5. Documentos do Imóvel",
        itens: [
          "Certidão de inteiro teor atualizada da matrícula do imóvel",
          "Certidão de ônus e ações atualizada",
          "IPTU do imóvel",
          "Certidão negativa de débitos de IPTU",
          "Ficha cadastral do imóvel na Prefeitura",
          "Declaração de inexistência de débitos condominiais (quando houver condomínio)",
        ],
      },
      {
        titulo: "6. Informações Sobre o Pagamento",
        itens: [
          "Valor da negociação do imóvel",
          "Forma de pagamento (à vista ou parcelado)",
          "Dados da conta bancária do comprador e do vendedor",
        ],
      },
    ],
    observacoesFinais: [
      "Poderá ser necessário apresentar o ITBI (Imposto de Transmissão de Bens Imóveis).",
      "Em alguns casos específicos pode haver cobrança de laudêmio.",
      "Caso haja cessão de direitos, devem ser apresentados os documentos do cedente.",
    ],
  },
  {
    titulo: "Usucapião Extrajudicial",
    slug: "usucapiao",
    categoria: "Tabelionato de Notas (Imóveis)",
    descricao:
      "Ata Notarial para fins de Usucapião Extrajudicial. Confira abaixo os documentos.",
    sessoes: [
      {
        titulo: "Documentos dos Requerentes",
        itens: [
          "RG e CPF",
          "Certidão de nascimento ou casamento atualizada",
          "Comprovante de residência",
          "Profissão",
        ],
      },
      {
        titulo: "Documentos do Imóvel",
        itens: [
          "Planta e memorial descritivo assinados por profissional habilitado",
          "ART/RRT do profissional responsável",
          "Justo título ou documentos que comprovem a posse (contas de luz, água, telefone, IPTU, etc.)",
          "Certidão negativa de distribuição de ações cíveis na comarca do imóvel",
          "Carnês de IPTU das áreas correspondentes à posse",
        ],
      },
    ],
    observacoesFinais: [
      "Pode ser necessária a presença de testemunhas que comprovem a posse mansa e pacífica.",
    ]
  },
  {
    titulo: "Certidão de Óbito",
    slug: "obito",
    categoria: "Registro Civil",
    descricao:
      "Para solicitar e registrar a Certidão de Óbito no Registro Civil.",
    sessoes: [
      {
        titulo: "Documentos do Falecido",
        itens: [
          "Declaração de Óbito (D.O.) original fornecida pelo médico ou hospital",
          "Certidão de nascimento ou casamento",
          "RG e CPF",
          "Título de Eleitor",
          "Cartão do INSS ou número de benefício (se aposentado/pensionista)",
          "Carteira de Trabalho",
        ],
      },
      {
        titulo: "Documentos do Declarante",
        itens: [
          "Documento de identificação com foto (RG, CNH, carteira profissional)",
          "CPF",
        ],
      },
      {
        titulo: "Informações Adicionais Requeridas",
        itens: [
          "Se o falecido deixou bens a inventariar",
          "Se o falecido deixou testamento",
          "Nome e idade dos filhos vivos",
          "Local de sepultamento ou cremação",
        ],
      },
    ],
  },
  {
    titulo: "Certidão de Nascimento",
    slug: "nascimento",
    categoria: "Registro Civil",
    descricao: "Documentação para realizar o registro de nascimento inicial.",
    sessoes: [
      {
        titulo: "Documentos da Criança e do Hospital",
        itens: [
          "DNV (Declaração de Nascido Vivo) amarela, fornecida pela maternidade/hospital",
        ]
      },
      {
        titulo: "Documentos dos Pais",
        itens: [
          "RG ou CNH original dos pais",
          "CPF dos pais",
          "Certidão de Casamento (caso os pais sejam casados entre si)",
        ]
      }
    ],
    observacoesFinais: [
      "Para pais casados não é obrigatória a presença de ambos. Se não forem casados, e a criança for registrada com o nome do pai, ele precisa estar presente.",
    ]
  },
  {
    titulo: "Procuração Pública",
    slug: "procuracao-publica",
    categoria: "Procurações e Autenticações",
    descricao: "Documentos necessários para a lavratura de Procuração Pública.",
    sessoes: [
      {
        titulo: "Documentos do Outorgante (quem passa os poderes)",
        itens: [
          "RG e CPF originais (ou CNH não vencida)",
          "Certidão de Casamento atualizada (se casado)",
          "Endereço e profissão",
        ]
      },
      {
        titulo: "Dados do Outorgado (quem recebe os poderes)",
        itens: [
          "Cópia do RG e CPF",
          "Estado Civil",
          "Endereço e profissão",
        ]
      }
    ]
  }
];
