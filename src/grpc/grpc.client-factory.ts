import { Injectable } from '@nestjs/common';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Injectable()
export class NotaddGrpcClientFactory {
    @Client({
        transport: Transport.GRPC,
        options: {
            url: 'localhost:50050',
            package: 'notadd_rpc_demo',
            protoPath: join(__dirname, './protobufs/root.proto')
        }
    })
    public readonly rootServiceClient: ClientGrpc;
}