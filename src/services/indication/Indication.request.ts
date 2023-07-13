import RestApi from '../../modules/RestApi';
import { IIndicationInput, IIndicationOutput } from './Indication.inteface';

class IndicationRequest {
  private URL_WORKSHOP = '/Indicacao';

  public IndicationFriend(dto: IIndicationInput): Promise<IIndicationOutput> {
    return RestApi.httpPost(`${this.URL_WORKSHOP}`, dto).then((response) => response);
  }
}

export default new IndicationRequest();
