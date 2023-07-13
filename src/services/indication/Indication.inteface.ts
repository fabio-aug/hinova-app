export interface IIndicationDto {
  NomeAmigo: string,
  DataCriacao: Date,
  EmailAmigo: string,
  Observacao: string,
  CpfAssociado: string,
  NomeAssociado: string,
  TelefoneAmigo?: string,
  EmailAssociado: string,
  CodigoAssociacao: number,
  TelefoneAssociado: string,
  PlacaVeiculoAssociado: string
}

export interface IIndicationInput {
  Copias: [],
  Remetente: string,
  Indicacao: IIndicationDto
}

export interface IIndicationOutput {
  Sucesso: string | null,
  RetornoErro: {
    retornoErro?: string | null
  }
}
