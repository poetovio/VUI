// @ts-nocheck
import { error } from '@sveltejs/kit';

/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export function load({ params }) {
    // if params.action is not 'userPass' or 'userName' or 'userMail', throw an error
    if (params.action !== 'userPass' && params.action !== 'userName' && params.action !== 'userMail') {
        throw error(400, 'Bad Request');
    }

    return {
        title: params.action,
        content: 'OK -> successfully sent the parameter.'
    };
}