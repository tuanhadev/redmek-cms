import { observable, action } from 'mobx';

class MapStore {

  @observable geo_lat = null;
  @observable geo_lng = null;

  @action setGeoLat(geo_lat) {
    this.geo_lat = geo_lat;
  }

  @action setGeoLng(geo_lng) {
    this.geo_lng = geo_lng;
  }

}

export default new MapStore();
