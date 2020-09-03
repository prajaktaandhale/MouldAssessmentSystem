import { Action } from '@ngrx/store';

export const GET_DATA = 'GET_DATA';
export const SET_DATA = 'SET_DATA';

export class GetData implements Action {
    readonly type = GET_DATA;

    constructor() {}
}

export class SetData implements Action {
    readonly type = SET_DATA;

    constructor(public payload: any) {}
}

export type all = GetData | SetData;