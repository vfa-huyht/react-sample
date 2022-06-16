import Restful from './restful'
class City extends Restful {
  path = '/api/cities'
  public async searchName(data: string) {
    return super.getRequest(
      {},
      {
        path: `${this.path}?name_like=${data}`,
      }
    )
  }
}

export const cityApi = new City()
