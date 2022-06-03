import api from './axios'
import { AxiosResponse } from 'axios';
interface IResfulOptions {
  path?: string;
}

export interface IResfulRequestConfig {
  path: string;
  method: string;
}

export default class Restful {
  protected path = '';
  protected api = api;

  public async getRequest<Type>(params = {}, options: IResfulOptions = {}): Promise<Type> {
    const { path } = this.optionsParser(options);
    return this.handleRequest<Type>({ path: <string>path, method: 'GET' }, params);
  }

  public async getOneRequest<Type>(id: string | number, options: IResfulOptions = {}): Promise<Type> {
    const { path } = this.optionsParser(options);
    return this.handleRequest<Type>({ path: `${<string>path}/${id}`, method: 'GET' });
  }

  public async postRequest<Type>(body = {}, options: IResfulOptions = {}): Promise<Type> {
    const { path } = this.optionsParser(options);
    return this.handleRequest<Type>({ path: <string>path, method: 'POST' }, body);
  }

  public async putRequest<Type>(id: string | number, body = {}, options: IResfulOptions = {}): Promise<Type> {
    const { path } = this.optionsParser(options);
    return this.handleRequest<Type>({ path: `${<string>path}/${id}`, method: 'PUT' }, body);
  }

  public async patchRequest<Type>(id: string | number | null, body = {}, options: IResfulOptions = {}): Promise<Type> {
    const { path } = this.optionsParser(options);
    if (id) {
      return this.handleRequest<Type>({ path: `${<string>path}/${id}`, method: 'PATCH' }, body);
    } else {
      return this.handleRequest<Type>({ path: `${<string>path}`, method: 'PATCH' }, body);
    }

  }

  public async deleteRequest<Type>(id: string | number, options: IResfulOptions = {}): Promise<Type> {
    const { path } = this.optionsParser(options);
    return this.handleRequest<Type>({ path: `${<string>path}/${id}`, method: 'DELETE' });
  }

  protected onResponse<Type>(response: AxiosResponse): Type {
    return response.data as Type;
  }

  private async handleRequest<Type>(config: IResfulRequestConfig, payload = {}): Promise<Type> {
    switch (config.method) {
      case 'POST':
        return this.onResponse<Type>(await this.api.post(config.path, payload));
      case 'PUT':
        return this.onResponse<Type>(await this.api.put(config.path, payload));
      case 'PATCH':
        return this.onResponse<Type>(await this.api.patch(config.path, payload));
      case 'DELETE':
        return this.onResponse<Type>(await this.api.delete(config.path, payload));
      case 'GET':
      default:
        return this.onResponse<Type>(await this.api.get(config.path, { params: payload }));
    }
  }

  private optionsParser(options: IResfulOptions): IResfulOptions {
    if (!options.path) {
      options.path = this.path;
    }

    return options;
  }
}
