import axios, { AxiosPromise } from 'axios';

interface Syncable {
  id?: string;
}

export class ApiSync<Schema extends Syncable> {
  constructor(private dataURL: string) {}

  fetch(id: string): AxiosPromise {
    return axios.get(`${this.dataURL}/${id}`);
  }

  save(data: Schema): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.dataURL}/${id}`, data);
    } else {
      return axios.post(`${this.dataURL}`, data);
    }
  }
}
