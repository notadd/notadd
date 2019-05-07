export interface Log {
    log_id: number;
    description: string;
    username: string;
    start_time: number;
    spend_time: number;
    basepath: string;
    uri: string;
    url: string;
    method: string;
    parameter: string;
    user_agent: string;
    ip: string;
    result: string;
    permission: string;
}