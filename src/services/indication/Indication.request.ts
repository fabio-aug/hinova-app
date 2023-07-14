import RestApi from '../../modules/RestApi';
import { IIndicationInput, IIndicationOutput } from './Indication.inteface';

class IndicationRequest {
  private static URL_WORKSHOP = '/Indicacao';

  public IndicationFriend(dto: IIndicationInput): Promise<IIndicationOutput> {
    return RestApi.httpPost(`${IndicationRequest.URL_WORKSHOP}`, dto).then((response) => response);
  }
}

export default new IndicationRequest();
