(function (window) {
    var af=function(t){"use strict";var e=function(){return e=Object.assign||function(t){for(var e,n=1,r=arguments.length;r>n;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},e.apply(this,arguments)};function n(t){var e="$$"+t;return window.Symbol?Symbol.for(e):e}function r(){}var o,i=n("matchItem"),s=n("xhr"),a=n("requestHeaders"),h=n("responseHeaders"),u=n("events"),c=n("hook"),d={UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},l=["onabort","onerror","onload","onloadend","onloadstart","onprogress","onreadystatechange","ontimeout"],p=l.map((function(t){return t.slice(2)})),f=["readyState","responseURL","status","statusText","response","responseText","responseXML","responseType"],v=["timeout","withCredentials"],y={100:"Continue",101:"Switching Protocols",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",300:"Multiple Choice",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Long",415:"Unsupported Media Type",416:"Requested Range Not Satisfiable",417:"Expectation Failed",422:"Unprocessable Entity",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported"},E={addEventListener:function(t,e){(this[u][t]||(this[u][t]=[])).push(e)},removeEventListener:function(t,e){for(var n=this[u][t]||[],r=n.length-1;r>=0;)n[r]===e&&n.splice(r,1),r--},dispatchEvent:function(t){for(var e=this[u][t.type]||[],n=0;e.length>n;n++)e[n].call(this,t);var r="on"+t.type;this[r]&&this[r](t)}};function w(t,e){if(void 0===e&&(e={}),t)for(var r in t)"function"==typeof t[r]?this[r]=o(r):Object.defineProperty(this,r,{get:s(r),set:i(r),enumerable:!0});function o(n){return function(){for(var r=[],o=0;arguments.length>o;o++)r[o]=arguments[o];if(e[n]){var i=e[n].call(this,r,t);if(i)return i}return t[n].apply(t,r)}}function i(r){return function(o){var i,s=this,a=e[r],h=n(r);if(r.startsWith("on"))this[h]=o,t[r]=function(e){(e=function(t,e){var n={};for(var r in t)n[r]=t[r];return n.target=n.currentTarget=e,n}(e,s),a)?a.call(s,t,e)||o.call(s,e):o.call(s,e)};else{var u=null===(i=a)||void 0===i?void 0:i.setter;o=u&&u(o,this)||o,this[h]=o;try{t[r]=o}catch(t){}}}}function s(r){return function(){var o,i=n(r),s=this.hasOwnProperty(i)?this[i]:t[r],a=null===(o=e[r])||void 0===o?void 0:o.getter;return a&&a(s,this)||s}}}var R={matched:!1,response:"",sendRealXhr:!1,delay:0,status:200},m=function(){var t=this;l.forEach((function(e){return t[e]=null})),this.readyState=d.UNSENT,this.response="",this.responseText="",this.responseType="",this.responseURL="",this.responseXML=null,this.status=0,this.statusText="",this.timeout=0,this.withCredentials=!1,this.upload=Object.create(E),this[s]=null,this[u]={},this[a]={},this[h]={},this[i]=R,this[c]=w};function b(){return null!=o?o:window.XMLHttpRequest}function g(){return new(b())}function N(){o&&(Object.defineProperty(window,"XMLHttpRequest",{value:o,enumerable:!0,writable:!0}),o=null)}return t.FakeXMLHttpRequest=m,t.createXhr=g,t.fake=function(t){void 0===t&&(t={onHandle:r,onMatch:r}),N();var n=e(e({},d),{open:function(n,r,o,a,h){var u,l=this;this.readyState=d.OPENED,this.dispatchEvent(new Event("readystatechange"));"boolean"!=typeof o&&(o=!0);var y={url:r,method:n};if(t.onMatch&&"function"!=typeof t.onMatch)throw"expect `onMatch` to be a function";var E=null===(u=t.onMatch)||void 0===u?void 0:u.call(t,y),w=E;return E&&"function"==typeof t.onHandle&&(w=t.onHandle(E,y)),w?(this[i]=e(e(e({},this[i]),w),{matched:!0}),void(this[i].sendRealXhr&&(this[s]=g(),t.onIntercept&&this[c](this[s],t.onIntercept(E)),this[s].open(n,r,o,a,h)))):(this[s]=g(),t.onIntercept?(this[c](this[s],t.onIntercept(E)),void this[s].open(n,r,o,a,h)):(p.forEach((function(t){l[s].addEventListener(t,(function(t){!function(t,e){for(var n=0;8>n;n++)try{l[f[n]]=e[f[n]]}catch(t){}l.dispatchEvent(new Event(t.type))}(t,this)}))}),this),v.forEach((function(t){try{l[s][t]=l[t]}catch(t){}})),void this[s].open(n,r,o,a,h)))},send:function(t){var e=this,n=this[i],r=n.response,o=n.sendRealXhr,a=n.delay,h=n.status;n.matched?(this.dispatchEvent(new Event("loadstart")),this.readyState=d.HEADERS_RECEIVED,this.dispatchEvent(new Event("readystatechange")),this.readyState=d.LOADING,this.dispatchEvent(new Event("readystatechange")),o&&this[s].send(t),setTimeout((function(){var t;e.status=y[h]?h:200,e.statusText=null!==(t=y[h])&&void 0!==t?t:y[200],e.responseText=e.response="object"==typeof r?JSON.stringify(r):r,e.readyState=d.DONE,e.dispatchEvent(new Event("readystatechange")),e.dispatchEvent(new Event("load")),e.dispatchEvent(new Event("loadend"))}),"number"==typeof a?a:500*Math.random()+500|0)):this[s].send(t)},abort:function(){this[i].matched?(this.readyState=d.UNSENT,this.dispatchEvent(new Event("abort")),this.dispatchEvent(new Event("error"))):this[s].abort()},overrideMimeType:r,setRequestHeader:function(t,e){if(this[i].matched&&!this[i].sendRealXhr){var n=this[a];n[t]?n[t]+=","+e:n[t]=e}else this[s].setRequestHeader(t,e)},getResponseHeader:function(t){return this[i].matched?this[h][t.toLowerCase()]:this[s].getResponseHeader(t)},getAllResponseHeaders:function(){if(!this[i].matched)return this[s].getAllResponseHeaders();var t=this[h],e="";for(var n in t)t.hasOwnProperty(n)&&(e+=n+": "+t[n]+"\r\n");return e}});Object.setPrototypeOf(n,E),m.prototype=n,o=window.XMLHttpRequest,"boolean"==typeof t.force&&t.force?Object.defineProperty(window,"XMLHttpRequest",{value:m,enumerable:!0,writable:!1}):window.XMLHttpRequest=m},t.getOriginXHR=b,t.unfake=N,Object.defineProperty(t,"__esModule",{value:!0}),t}({});

    const matching = (url, method, rules) => {
        url = url.split('?')[0]
        // 解决dev环境下使用相对路径的问题
        url = url.startsWith('.') ? url.slice(1) : url
        return rules.find(rule => {
            // 规则启用且text有值
            if (rule.enable && rule.url) {
                // 请求类型存在且一致
                if (rule.method && rule.method.toLowerCase() !== method.toLowerCase()) {
                    return false
                }
                // regexp匹配 true 正则 false 字符串匹配
                return rule.regexp
                    ? url.match(new RegExp(rule.url, 'i')) || rule.url.match(new RegExp(url, 'i'))
                    : url.indexOf(rule.url) > -1 || rule.url.indexOf(url) > -1
            }
            return false
        })
    }

    const createStream = (text) => new ReadableStream({
        start(controller) {
            controller.enqueue(new TextEncoder().encode(text))
            controller.close()
        }
    })

    const triggerCountEvent = (id) => {
        window.dispatchEvent(new CustomEvent('pagescript', {
            detail: {
                type: '__hs_count__',
                from: '__hs_pagescript__',
                data: { id },
            }
        }))
    }

    const triggerResponseEvent = (response, url) => {
        window.dispatchEvent(new CustomEvent('pagescript', {
            detail: {
                type: '__hs_response__',
                from: '__hs_pagescript__',
                data: { response, url },
            }
        }))
    }

    const handleCode = (match, responseText) => {
        const { response, status, delay, code } = match
        if (code) {
            try {
                const dataStr = JSON.stringify({
                    delay,
                    status,
                    response: JSON.parse(response === 'null' ? responseText : response),
                })
                return {
                    status,
                    delay,
                    ...eval(`;(${code})(${dataStr})`) || {},
                }
            } catch (error) {
                console.error(error)
            }
        }
        return { response, delay, status, }
    }

    const fake = () => {
        af.fake({
            onMatch(req) {
                return matching(req.url, req.method, __interceptor__.rules)
            },
            onHandle(data) {
                if (__interceptor__.action === 'watch') {
                    return
                }
                const sendRealXhr = data.response === 'null' && !!data.code
                if (data && !sendRealXhr) {
                    const { response, status, delay } = handleCode(data, data.response)
                    triggerCountEvent(data.id)
                    return {
                        delay,
                        status,
                        response,
                        sendRealXhr: false,
                    }
                }
            },
            onIntercept(data) {
                function handle(xhr) {
                    if (data) {
                        if (this.readyState === 4) {
                            const { response, status } = handleCode(data, xhr.responseText || xhr.response)
                            this.response = xhr.response
                            this.responseText = response
                            this.status = status
                            triggerCountEvent(data.id)
                        }
                    } else {
                        triggerResponseEvent(JSON.parse(xhr.responseText), xhr.responseURL)
                    }
                }
                return {
                    onload: handle,
                    onloaded: handle,
                    onreadystatechange: handle,
                }
            }
        })
    }

    const __interceptor__ = {
        rules: [],
        action: 'close', // close | watch | intercept,
        OriginalFetch: window.fetch,
        OriginalXhr: window.XMLHttpRequest,
        proxy() {
            window.fetch = __interceptor__.fetch
            fake()
        },
        restore() {
            window.fetch = __interceptor__.OriginalFetch
            af.unfake()
        },
        run() {
            const action = __interceptor__.action
            switch (action) {
                case 'close':
                    return __interceptor__.restore()
                case 'watch':
                case 'intercept':
                    return __interceptor__.proxy()
                default:
                    break;
            }
        },
        fetch: async function (...args) {
            const { rules, action, OriginalFetch } = __interceptor__
            const response = await OriginalFetch(...args)
            if (action === 'intercept') {
                const match = matching(response.url, response.method, rules)
                if (match) {
                    const responseText = await response.text()
                    const result = handleCode(match, responseText).response
                    const newResponse = new Response(createStream(result), { ...response })

                    const proxy = new Proxy(newResponse, {
                        get(target, name) {
                            const fields = ['ok', 'url', 'body', 'type', 'bodyUsed', 'redirected', 'useFinalURL']
                            if (fields.includes(name)) {
                                return response[name]
                            }
                            return target[name]
                        }
                    })

                    for (let key in proxy) {
                        if (typeof proxy[key] === 'function') {
                            proxy[key] = proxy[key].bind(newResponse)
                        }
                    }

                    triggerCountEvent(match.id)

                    return proxy
                }
            } else if (action === 'watch') {
                const responseText = await response.text()
                triggerResponseEvent(JSON.parse(responseText), response.url)
                return new Response(createStream(responseText), { ...response })
            }
            return response
        }
    }

    window.addEventListener("message", (event) => {
        const data = event.data
        if (data.type === '__hs_storage__') {
            if (data.key === 'rules') {
                __interceptor__.rules = data.value.map(item => ({ ...item, response: JSON.stringify(item.response) }))
            } else if (data.key === 'action') {
                __interceptor__.action = data.value
            }
        }
        __interceptor__.run()
    })
})(window)