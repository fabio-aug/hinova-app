import RestApi from '../../modules/RestApi';
import { IGetWorkshopListOutput } from './Workshop.interface';

class WorkshopRequest {
  private URL_WORKSHOP = '/Oficina';

  public GetWorkshopList(associationCode: number = 601, cpfMember: string = ''): Promise<IGetWorkshopListOutput> {
    return RestApi.httpGet(`${this.URL_WORKSHOP}?codigoAssociacao=${associationCode}&cpfAssociado=${cpfMember}`).then((response) => response);
  }
}

export default new WorkshopRequest();
