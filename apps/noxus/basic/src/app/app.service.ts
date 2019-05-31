import { Injectable } from '@nestjs/common';
import { MagnusClient, gql } from '@notadd/magnus-client'
@Injectable()
export class AppService {
  constructor(public client: MagnusClient) { }
  getData(): { message: string } {
    this.client.query({
      query: gql``,
      variables: {}
    })
    return ({ message: 'Welcome to basic!' });
  }
}
