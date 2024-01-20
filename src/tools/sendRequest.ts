/*
 * The AGPL License (AGPL)
 * Copyright (c) 2022 hans000
 */
import { MatchRule } from "../App"
import { createRunFunc, stringifyParams } from "."
import { sendLog } from './log'

export async function sendRequest(rule: MatchRule, index: number) {
    if (rule.type === 'fetch') {
        const needBody = ! /(get|option)/.test(rule.method)
        return await fetch(stringifyParams(rule.params, rule.url), {
            headers: {
                ...rule.requestHeaders,
                Index: index + ''
            },
            method: rule.method,
            ...(needBody && {
                body: new URLSearchParams(rule.body)
            }),
        })
    } else if (rule.type === 'xhr') {
        const xhr = new XMLHttpRequest()
        xhr.open(rule.method || 'get', rule.url)
        xhr.setRequestHeader('Index', index + '')
        rule.requestHeaders && Object.keys(rule.requestHeaders).forEach(key => xhr.setRequestHeader(key, rule.requestHeaders[key]))
        xhr.send()

        return await new Promise<XMLHttpRequest>(resolve => {
            xhr.addEventListener('load', () => resolve(xhr))
        })
    }
}

export function sendRequestLog(rule: MatchRule, index: number) {
    if (! rule.url) {
        sendLog('url option must be required')
        return
    }
    if (rule.url === rule.redirectUrl) {
        sendLog('url and redirectUrl cannot be the same')
        return
    }
    sendRequest(rule, index).then(inst => {
        if (inst instanceof XMLHttpRequest) {
            try {
                return JSON.parse(inst.responseText)
            } catch (error) {
                return inst.responseText
            }
        } else {
            return inst.json()
        }
    }).then(sendLog)
}

export async function handleCode(matchRule: MatchRule, inst: XMLHttpRequest | Response) {
    let { id, count, enable, code, ...restRule } = matchRule

    const isResponse = inst instanceof Response
    const text = await (isResponse ? inst.text() : inst.responseText)
    restRule.responseText = text

    if (code) {
        try {
            const fn = createRunFunc(code, 'onResponding')
            const partialData = await fn({
                rule: restRule,
                xhr: isResponse ? undefined : inst,
                response: isResponse ? inst : undefined,
            })
            return {
                ...restRule,
                ...partialData || {},
                id,
                count,
                enable,
                code,
            }
        } catch (error) {
            console.error(error)
        }
    }
    return restRule
}
