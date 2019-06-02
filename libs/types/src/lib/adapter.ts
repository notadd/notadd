export interface AuthorizeOptions {
    ip?: string;
    port?: number;
    userName: string;
    password: string;
}
export interface AuthorizeResult {
    token: string;
}
export interface Adapter {
    /**
     * 会话管理
     */
    /**
     * 创建会话
     */
    authorize(options: AuthorizeOptions): any;
    /**
     * 会话保活
     */
    keepAlive(): any;
    /**
     * 销毁会话
     */
    unauthorize(): any;
    /**
     * 基础功能
     */
    /**
     * 获取设备树
     */
    getDeviceTree(): any;
    /**
     * 获取实时监控URI
     */
    getRealmonitorUri(): any;
    /**
     * 录像查询
     */
    findVideoRecord(): any;
    /**
     * 获取回放URI
     */
    getPlaybackUri(): any;
    /**
     * 云台转动
     */
    moveYunTai(): any;
    /**
     * 获取预置点
     */
    getPreset(): any;
    /**
     * 移动到预置点
     */
    moveToPreset(): any;
    /**
     * 设置预置点
     */
    setPreset(): any;
    /**
     * 清除预置点
     */
    clearPreset(): any;

    /**
     * 车辆智能
     */

    /**
     * 过车查询
     */
    findCar(): any;
    /**
     * 违章查询
     */
    findIllegal(): any;
    /**
     * 违章详情
     */
    getIllegalDetail(): any;
    /**
     * 新增布控
     */
    addSurveillance(): any;
    /**
     * 审核布控
     */
    checkSurveillance(): any;
    /**
     * 撤销布控
     */
    removeSurveillance(): any;
    /**
     * 查询布控
     */
    findSurveillance(): any;
    /**
     * 布控详情
     */
    getSurveillanceDetail(): any;
    /**
     * 报警查询
     */
    findAlarm(): any;
    /**
     * 报警详情
     */
    getAlarmDetail(): any;
    /**
     * 人像库新增
     */
    addRepository(): any;
    /**
     * 人像库修改
     */
    editRepository(): any;
    /**
     * 人像库删除
     */
    deleteRepository(): any;
    /**
     * 人像库查询
     */
    findRepository(): any;
    /**
     * 人像库详情
     */
    getRepositoryDetail(): any;
    /**
     * 库成员新增
     */
    addMember(): any;
    /**
     * 库成员修改
     */
    editMember(): any;
    /**
     * 库成员删除
     */
    deleteMember(): any;
    /**
     * 库成员详情
     */
    getMemberDetail(): any;
    /**
     * 布控设置
     */
    setExecuteControll(): any;
    /**
     * 布控删除
     */
    deleteExecuteControll(): any;
    /**
     * 布控查询
     */
    findExecuteControll(): any;
    /**
     * 报警记录查询
     */
    findAlarm(): any;
    /**
     * 报警记录详情
     */
    getAlarmDetail(): any;
    /**
     * 抓拍记录查询
     */
    findSnap(): any;
    /**
     * 抓拍记录详情
     */
    getSnapDetail(): any;
    /**
     * 人像库的检索和查询
     */
    searchRepository(): any;
    /**
     * 报警总数统计
     */
    alarmStatics(): any;
    /**
     * 报警总数查询
     */
    alarmCount(): any;
    /**
     * 抓拍总数统计
     */
    snapStatics(): any;
    /**
     * 抓拍总数查询
     */
    snapCount(): any;
    /**
     * 人像库总数统计
     */
    repositoryStatics(): any;
}