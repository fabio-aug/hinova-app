import WorkshopRequest from './workshop/Workshop.request';
import IndicationRequest from './indication/Indication.request';

class Services {
  public workshop = WorkshopRequest;
  public indicaton = IndicationRequest;
}

export default new Services();
