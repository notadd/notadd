export interface Permission {
    // 系统
    system_id: number;
    // 上级
    pid: number;
    // 名称
    name: string;
    // 类型
    type: number;
    // 值
    permission_value: string;
}
