import { Adapter, Model } from 'casbin';
export abstract class CasbinAdapter implements Adapter {
    abstract loadPolicy(model: Model): Promise<void>;
    abstract savePolicy(model: Model): Promise<boolean>;
    abstract addPolicy(sec: string, ptype: string, rule: string[]): Promise<void>;
    abstract removePolicy(sec: string, ptype: string, rule: string[]): Promise<void>;
    abstract removeFilteredPolicy(sec: string, ptype: string, fieldIndex: number, ...fieldValues: string[]): Promise<void>;
}
