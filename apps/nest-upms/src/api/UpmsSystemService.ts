import { System } from '../models/db'
export abstract class UpmsSystemService {
    /**
     * 根据name获取UpmsSystem
     * @param name
     * @return
     */
    abstract selectUpmsSystemByName(name: string): System;
}