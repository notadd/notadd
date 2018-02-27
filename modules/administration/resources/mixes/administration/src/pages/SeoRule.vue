<script>
    import injection from '../helpers/injection';

    export default {
        beforeRouteEnter(to, from, next) {
            injection.loading.start();
            injection.http.post(`${window.api}/administration/seo/list`, {
                identification: to.params.module,
            }).then(response => {
                next(vm => {
                    vm.list = Object.keys(response.data.data).map(index => {
                        const item = response.data.data[index];
                        item.deleted = false;
                        item.show = true;

                        return item;
                    });
                    vm.module = response.data.module;
                    injection.loading.finish();
                });
            }).catch(() => {
                injection.loading.error();
            });
        },
        data() {
            return {
                changed: false,
                list: [],
                loading: false,
                module: '',
                rules: {
                    order: [
                        {
                            message: '规则排序不能为空',
                            required: true,
                            trigger: 'blur',
                            type: 'number',
                        },
                    ],
                    path: [
                        {
                            required: true,
                            message: '规则路由不能为空',
                            trigger: 'change',
                        },
                    ],
                },
            };
        },
        methods: {
            add() {
                const self = this;
                self.list.push({
                    module: self.$route.params.module,
                    open: true,
                    order: 0,
                    path: '',
                    show: true,
                    template: '',
                });
            },
            refresh() {
                const self = this;
                self.$notice.open({
                    title: '正在刷新数据...',
                });
                self.$loading.start();
                self.$http.post(`${window.api}/administration/seo/list`, {
                    identification: self.$route.params.module,
                }).then(response => {
                    self.list = Object.keys(response.data.data).map(index => {
                        const item = response.data.data[index];
                        item.deleted = false;
                        item.show = true;

                        return item;
                    });
                    self.$loading.finish();
                    self.$notice.open({
                        title: '刷新数据成功！',
                    });
                    self.$nextTick(() => {
                        self.changed = false;
                    });
                }).catch(() => {
                    self.$loading.error();
                    self.$notice.error({
                        title: '刷新数据失败！',
                    });
                });
            },
            remove(index) {
                const self = this;
                if (self.list[index].id) {
                    self.list[index].deleted = true;
                    self.list[index].show = false;
                } else {
                    self.list.splice(index, 1);
                }
            },
            update() {
                const self = this;
                const added = [];
                const deleted = [];
                const edited = [];
                Object.keys(self.list).forEach(index => {
                const item = self.list[index];
                    if (item.id && item.deleted) {
                        deleted.push(item);
                     } else if (item.id && !item.deleted) {
                         edited.push(item);
                     } else {
                         added.push(item);
                     }
                });
                if (added.length === 0 && edited.length === 0) {
                    if (deleted.length) {
                        self.$http.post(`${window.api}/administration/seo/batch`, {
                            add: added,
                            delete: deleted,
                            edit: edited,
                        }).then(() => {
                            self.$notice.open({
                                title: '批量更新数据成功！',
                            });
                            self.refresh();
                        }).catch(() => {
                            self.$notice.error({
                                title: '批量更新数据失败！',
                            });
                        }).finally(() => {
                            self.loading = false;
                        });
                    }
                }
                self.$refs.form.validate(valid => {
                    if (valid) {
                        self.loading = true;
                        self.$http.post(`${window.api}/administration/seo/batch`, {
                            add: added,
                            delete: deleted,
                            edit: edited,
                        }).then(() => {
                            self.$notice.open({
                                title: '批量更新数据成功！',
                            });
                            self.refresh();
                        }).catch(() => {
                            self.$notice.error({
                                title: '批量更新数据失败！',
                            });
                        }).finally(() => {
                            self.loading = false;
                        });
                    } else {
                        self.$notice.error({
                            title: '请填写正确的数据！',
                        });
                    }
                });
            },
        },
        watch: {
            list: {
                deep: true,
                handler(value, old) {
                    const self = this;
                    if (old.length > 0) {
                        self.changed = true;
                    }
                },
            },
        },
    };
</script>
<template>
    <div class="seo-wrap">
        <tabs :animated="false" style="overflow: visible;" value="current">
            <router-link slot="extra" style="display: block;height: 37px;line-height: 37px;" to="/seo">返回</router-link>
            <tab-pane :label="`编辑模块：${module}的规则列表`" name="current">
                <card :bordered="false">
                    <div style="margin-bottom: 16px">
                        <i-button style="margin-right: 10px" @click.native="add">添加</i-button>
                        <div style="float: right;" v-if="changed">
                            <p style="color: #aa0000; display: inline-block; margin-right: 10px;">数据已修改！修改后请批量更新数据！</p>
                            <i-button :loading="loading" type="primary" @click.native="update">
                                <span v-if="loading">批量更新中...</span>
                                <span v-else>批量更新</span>
                            </i-button>
                        </div>
                    </div>
                    <i-form :model="list" ref="form">
                        <div class="ivu-table-wrapper">
                            <div class="ivu-table">
                                <div class="ivu-table-header">
                                    <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                        <colgroup>
                                            <col width="200">
                                            <col>
                                            <col width="200">
                                            <col width="300">
                                        </colgroup>
                                        <thead>
                                        <tr>
                                            <th>
                                                <div class="ivu-table-cell"><span>匹配排序</span></div>
                                            </th>
                                            <th>
                                                <div class="ivu-table-cell"><span>路由</span></div>
                                            </th>
                                            <th>
                                                <div class="ivu-table-cell"><span>是否开启</span></div>
                                            </th>
                                            <th>
                                                <div class="ivu-table-cell"><span>操作</span></div>
                                            </th>
                                        </tr>
                                        </thead>
                                    </table>
                                </div>
                                <div class="ivu-table-body" v-if="list.length">
                                    <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                        <colgroup>
                                            <col width="200">
                                            <col>
                                            <col width="200">
                                            <col width="300">
                                        </colgroup>
                                        <tbody class="ivu-table-tbody">
                                        <tr class="ivu-table-row" v-for="(item, index) in list" v-if="item.show">
                                            <td>
                                                <div class="ivu-table-cell">
                                                    <form-item label=""
                                                               :prop="index + '.order'"
                                                               :rules="rules.order"
                                                               style="margin-bottom: 0;">
                                                        <i-input :number="true" placeholder="请输入规则排序" v-model="item.order"></i-input>
                                                    </form-item>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="ivu-table-cell">
                                                    <form-item label=""
                                                               :prop="index + '.path'"
                                                               :rules="rules.path"
                                                               style="margin-bottom: 0;">
                                                        <i-input placeholder="请输入规则路由" v-model="item.path"></i-input>
                                                    </form-item>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="ivu-table-cell">
                                                    <i-switch size="large" v-model="item.open">
                                                        <span slot="close">关闭</span>
                                                        <span slot="open">开启</span>
                                                    </i-switch>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="ivu-table-cell">
                                                    <router-link :to="`/seo/${$route.params.module}/${item.id}`" v-if="item.id">
                                                        <i-button size="small" style="margin-right: 10px" type="primary">编辑模板</i-button>
                                                    </router-link>
                                                    <i-button size="small" type="danger" @click.native="remove(index)">删除</i-button>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="ivu-table-tip" v-if="list.length === 0">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                        <tr>
                                            <td><span>暂无筛选结果</span></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </i-form>
                </card>
            </tab-pane>
        </tabs>
    </div>
</template>