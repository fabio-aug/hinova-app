export interface IWorkshopDTO {
  Id: number,
  Nome: string,
  Foto: string,
  Email: string,
  Ativo: boolean,
  Endereco: string,
  Latitude: string,
  Descricao: string,
  Longitude: string,
  DescricaoCurta: string,
  AvaliacaoUsuario: number,
  CodigoAssociacao: number,
  Telefone1?: string | null,
  Telefone2?: string | null
}

export interface IGetWorkshopListOutput {
  Token?: string | null,
  ListaOficinas: IWorkshopDTO[],
  RetornoErro: {
    retornoErro?: string | null
  }
}
