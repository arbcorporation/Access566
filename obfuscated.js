function _0x3dfe() {
    const _0x5285c5 = [
        '203250wzvnRn',
        '1126258OIJIkz',
        '747QIXNYf',
        '2340320bpJSkt',
        '1108980EnIiga',
        '175WUanMQ',
        '432xEUlCK',
        '15870IXYngp',
        '1131716HsCpHl'
    ];
    _0x3dfe = function () {
        return _0x5285c5;
    };
    return _0x3dfe();
}
(function (_0x4bdd66, _0x570fbf) {
    const _0x5719e9 = _0x3e90;
    const _0x500374 = _0x4bdd66();
    while (!![]) {
        try {
            const _0x375e78 = parseInt(_0x5719e9(0x99)) / 0x1 + parseInt(_0x5719e9(0x96)) / 0x2 * (-parseInt(_0x5719e9(0x9b)) / 0x3) + -parseInt(_0x5719e9(0x98)) / 0x4 + parseInt(_0x5719e9(0x9e)) / 0x5 * (parseInt(_0x5719e9(0x97)) / 0x6) + -parseInt(_0x5719e9(0x9a)) / 0x7 + parseInt(_0x5719e9(0x9c)) / 0x8 + parseInt(_0x5719e9(0x9d)) / 0x9;
            if (_0x375e78 === _0x570fbf) {
                break;
            } else {
                _0x500374['push'](_0x500374['shift']());
            }
        } catch (_0x57d22c) {
            _0x500374['push'](_0x500374['shift']());
        }
    }
}(_0x3dfe, 0x343da));
function _0x3e90(_0x58458c, _0x289389) {
    _0x58458c = _0x58458c - 0x96;
    const _0x3dfeff = _0x3dfe();
    let _0x3e9026 = _0x3dfeff[_0x58458c];
    return _0x3e9026;
}
((() => {
    const _0x2ace46 = 0x3e8;
    const _0x43baa1 = {
        'OBSERVER_THROTTLE': 0x32,
        'POPUP_DISMISS_INTERVAL': 0x1f4,
        'BANNER_RESET_DELAY': 0xbb8,
        'SYNC_INTERVAL': 0x3a98
    };
    const _0x4174c3 = [
        0xc8,
        0xc8,
        0xc8,
        0xc8,
        0xc8,
        0x1f4,
        0x1f4,
        0x1f4,
        0x3e8,
        0x3e8
    ];
    let _0x597f9f = 0x0;
    function _0x259a84() {
        const _0x19d4ce = _0x4174c3[_0x597f9f];
        _0x597f9f = (_0x597f9f + 0x1) % _0x4174c3['length'];
        return _0x19d4ce;
    }
    let _0x2d2ca0 = ![];
    let _0x1ea90c = ![];
    let _0x243858 = 0x0;
    let _0x166955 = null;
    let _0x35994e = null;
    let _0x3e72f6 = null;
    let _0x5bb6e2 = null;
    let _0x5cb540 = null;
    let _0x4e019c = null;
    let _0x49ae38 = null;
    let _0x12e990 = null;
    let _0x215a19 = null;
    let _0x50b422 = ![];
    function _0xfc4095() {
        if (_0x50b422)
            return;
        try {
            _0x4e019c = new (window['AudioContext'] || window['webkitAudioContext'])();
            if (_0x4e019c['state'] === 'suspended') {
                _0x4e019c['resume']();
            }
            _0x49ae38 = _0x4e019c['createOscillator']();
            _0x12e990 = _0x4e019c['createGain']();
            _0x49ae38['type'] = 'sawtooth';
            _0x12e990['gain']['setValueAtTime'](0x1, _0x4e019c['currentTime']);
            _0x49ae38['connect'](_0x12e990);
            _0x12e990['connect'](_0x4e019c['destination']);
            _0x49ae38['start']();
            _0x50b422 = !![];
            let _0x22e633 = ![];
            _0x215a19 = setInterval(() => {
                if (!_0x4e019c || !_0x49ae38)
                    return;
                const _0x264bfc = _0x22e633 ? 0x4b0 : 0x258;
                _0x49ae38['frequency']['setTargetAtTime'](_0x264bfc, _0x4e019c['currentTime'], 0.08);
                _0x22e633 = !_0x22e633;
            }, 0xb4);
        } catch (_0x28d57e) {
            console['error']('Failed\x20to\x20trigger\x20audio\x20siren:', _0x28d57e);
        }
    }
    function _0x59b245() {
        if (!_0x50b422)
            return;
        try {
            if (_0x215a19)
                clearInterval(_0x215a19);
            if (_0x49ae38) {
                _0x49ae38['stop']();
                _0x49ae38['disconnect']();
            }
            if (_0x12e990)
                _0x12e990['disconnect']();
            if (_0x4e019c)
                _0x4e019c['close']();
        } catch (_0x3cb5b9) {
            console['error']('Error\x20stopping\x20siren:', _0x3cb5b9);
        }
        _0x215a19 = null;
        _0x49ae38 = null;
        _0x12e990 = null;
        _0x4e019c = null;
        _0x50b422 = ![];
    }
    function _0x4b93fd() {
        if (document['getElementById']('arbpay-sniper-banner'))
            return;
        _0x5cb540 = document['createElement']('div');
        _0x5cb540['id'] = 'arbpay-sniper-banner';
        Object['assign'](_0x5cb540['style'], {
            'position': 'fixed',
            'bottom': '-60px',
            'left': '50%',
            'transform': 'translateX(-50%)',
            'backgroundColor': 'rgba(16,\x20185,\x20129,\x200.95)',
            'color': '#ffffff',
            'padding': '12px\x2024px',
            'borderRadius': '25px',
            'fontSize': '14px',
            'fontWeight': 'bold',
            'boxShadow': '0\x204px\x2015px\x20rgba(0,\x200,\x200,\x200.3)',
            'zIndex': '999999',
            'transition': 'bottom\x200.25s\x20ease,\x20opacity\x200.25s\x20ease',
            'pointerEvents': 'none',
            'opacity': '0',
            'display': 'flex',
            'alignItems': 'center',
            'gap': '8px'
        });
        document['body']['appendChild'](_0x5cb540);
    }
    function _0x12fd3d(_0x146947, _0x57cb76 = 'rgba(16,\x20185,\x20129,\x200.95)') {
        if (!_0x5cb540)
            _0x4b93fd();
        _0x5cb540['textContent'] = _0x146947;
        _0x5cb540['style']['backgroundColor'] = _0x57cb76;
        _0x5cb540['style']['bottom'] = '25px';
        _0x5cb540['style']['opacity'] = '1';
    }
    function _0x377f91() {
        if (!_0x5cb540)
            return;
        _0x5cb540['style']['bottom'] = '-60px';
        _0x5cb540['style']['opacity'] = '0';
    }
    function _0x564a3b() {
        const _0x29f490 = document['body'] ? document['body']['innerText'] : '';
        return _0x29f490['includes']('Select\x20Method\x20Payment') || _0x29f490['includes']('Please\x20select\x20payment\x20account') || _0x29f490['includes']('PhonePe') && (_0x29f490['includes']('super.money') || _0x29f490['includes']('navi') || _0x29f490['includes']('moneyview') || _0x29f490['includes']('FreeCharge'));
    }
    function _0x2d3c2a() {
        const _0x414cf8 = document['querySelector']('div.van-toast__text,\x20div.van-toast,\x20div.van-dialog__message');
        if (_0x414cf8) {
            const _0x20d403 = _0x414cf8['textContent']['toLowerCase']();
            return _0x20d403['includes']('someone\x20else') || _0x20d403['includes']('taken') || _0x20d403['includes']('missed') || _0x20d403['includes']('fail') || _0x20d403['includes']('expired');
        }
        return ![];
    }
    function _0x248408() {
        const _0x4bdf78 = document['querySelectorAll']('div.tab-title,\x20div.van-tab,\x20span.van-tab__text');
        for (const _0x227f73 of _0x4bdf78) {
            if (_0x227f73['textContent']['includes']('OTP-UPI') || _0x227f73['textContent']['includes']('BANK')) {
                return _0x227f73;
            }
        }
        return null;
    }
    function _0x53085f() {
        const _0x41be29 = _0x248408();
        if (_0x41be29) {
            _0x41be29['click']();
        }
    }
    function _0x3616b5() {
        if (_0x564a3b()) {
            _0xfc4095();
            _0x12fd3d('🚨\x20₹' + _0x2ace46 + '\x20LOCKED!\x20SELECT\x20ACCOUNT\x20NOW!\x20🚨', 'rgba(239,\x2068,\x2068,\x200.95)');
            window['stopSniper']();
            return !![];
        }
        if (!_0x2d2ca0)
            return ![];
        if (_0x1ea90c) {
            if (_0x2d3c2a()) {
                _0x377f91();
                _0x1ea90c = ![];
                _0x53085f();
                _0x7ecfd0();
            }
            return !![];
        }
        const _0x36874f = document['querySelectorAll']('div.x-row.x-row-between,\x20div.van-card,\x20div[class*=\x22item\x22]');
        if (!_0x36874f['length'])
            return ![];
        let _0x48976b = null;
        _0x36874f['forEach'](_0x230616 => {
            const _0x2d6d92 = _0x230616['querySelector']('div.amount');
            const _0x4fd516 = _0x2d6d92 ? _0x2d6d92['textContent'] : _0x230616['textContent'];
            const _0x3faa50 = (_0x4fd516['match'](/\d+/g) || [])['map'](Number);
            if (_0x3faa50['includes'](_0x2ace46)) {
                _0x230616['style']['display'] = '';
                _0x230616['style']['border'] = '2px\x20solid\x20#10b981';
                _0x48976b = _0x230616;
            } else {
                _0x230616['style']['display'] = 'none';
            }
        });
        if (_0x48976b) {
            const _0x3d4ef2 = _0x48976b['parentElement'];
            if (_0x3d4ef2 && _0x3d4ef2['firstElementChild'] !== _0x48976b) {
                _0x3d4ef2['prepend'](_0x48976b);
            }
            const _0x32f0f1 = _0x48976b['querySelector']('button.van-button,\x20button');
            if (_0x32f0f1 && !_0x32f0f1['disabled'] && !_0x1ea90c) {
                _0x12fd3d('₹' + _0x2ace46 + '\x20Pinned!\x20Claiming...');
                _0x32f0f1['click']();
                _0x1ea90c = !![];
                setTimeout(() => {
                    if (_0x1ea90c && !_0x564a3b()) {
                        _0x377f91();
                        _0x1ea90c = ![];
                        _0x53085f();
                        _0x7ecfd0();
                    }
                }, _0x43baa1['BANNER_RESET_DELAY']);
                return !![];
            }
        }
        return ![];
    }
    function _0x7ecfd0() {
        if (!_0x2d2ca0 || _0x1ea90c)
            return;
        if (_0x166955)
            clearTimeout(_0x166955);
        _0x166955 = setTimeout(() => {
            if (!_0x2d2ca0 || _0x1ea90c)
                return;
            const _0x4360d3 = _0x3616b5();
            if (!_0x4360d3) {
                _0x53085f();
                _0x7ecfd0();
            }
        }, _0x259a84());
    }
    function _0x54b96a() {
        if (_0x5bb6e2)
            _0x5bb6e2['disconnect']();
        _0x5bb6e2 = new MutationObserver(() => {
            const _0x229732 = performance['now']();
            if (_0x229732 - _0x243858 >= _0x43baa1['OBSERVER_THROTTLE']) {
                _0x243858 = _0x229732;
                _0x3616b5();
            }
        });
        _0x5bb6e2['observe'](document['body'], {
            'childList': !![],
            'subtree': !![]
        });
    }
    function _0x30944a() {
        if (_0x2d2ca0)
            return;
        _0x2d2ca0 = !![];
        _0x1ea90c = ![];
        _0x59b245();
        _0x12fd3d('Sniper\x20Active\x20for\x20₹' + _0x2ace46);
        _0x54b96a();
        _0x3616b5();
        _0x7ecfd0();
        if (!_0x35994e) {
            _0x35994e = setInterval(() => {
                if (!_0x2d2ca0)
                    return;
                const _0x130982 = document['querySelector']('button.van-dialog__confirm,\x20.van-popup\x20.van-icon-cross');
                if (_0x130982 && !_0x564a3b()) {
                    _0x130982['click']();
                }
            }, _0x43baa1['POPUP_DISMISS_INTERVAL']);
        }
        if (!_0x3e72f6) {
            _0x3e72f6 = setInterval(() => {
                if (_0x2d2ca0) {
                    console['log']('%c[ACTIVE]\x20Sniper\x20filtering\x20feed\x20&\x20refreshing...', 'color:\x20#10b981;');
                }
            }, _0x43baa1['SYNC_INTERVAL']);
        }
    }
    function _0x2dfa09() {
        _0x2d2ca0 = ![];
        _0x1ea90c = ![];
        if (_0x166955)
            clearTimeout(_0x166955);
        if (_0x35994e)
            clearInterval(_0x35994e);
        if (_0x3e72f6)
            clearInterval(_0x3e72f6);
        _0x35994e = null;
        _0x3e72f6 = null;
        const _0x4058d5 = document['getElementById']('simple-start-btn');
        const _0x1d8bbd = document['getElementById']('simple-stop-btn');
        if (_0x4058d5 && _0x1d8bbd) {
            _0x4058d5['style']['opacity'] = '1';
            _0x1d8bbd['style']['opacity'] = '0.5';
        }
        if (!_0x564a3b()) {
            _0x377f91();
        }
        document['querySelectorAll']('div.x-row.x-row-between,\x20div.van-card,\x20div[class*=\x22item\x22]')['forEach'](_0x275db3 => {
            _0x275db3['style']['display'] = '';
            _0x275db3['style']['border'] = '';
        });
    }
    window['startSniper'] = _0x30944a;
    window['stopSniper'] = _0x2dfa09;
    _0x4b93fd();
    function _0x5cae9e() {
        const _0xd8125b = document['getElementById']('simple-control-box');
        if (_0xd8125b)
            _0xd8125b['remove']();
        const _0x499a84 = document['createElement']('div');
        _0x499a84['id'] = 'simple-control-box';
        Object['assign'](_0x499a84['style'], {
            'position': 'fixed',
            'top': '20px',
            'right': '20px',
            'backgroundColor': '#1f2937',
            'padding': '8px',
            'borderRadius': '8px',
            'boxShadow': '0\x204px\x2012px\x20rgba(0,\x200,\x200,\x200.4)',
            'zIndex': '9999999',
            'display': 'flex',
            'alignItems': 'center',
            'gap': '6px',
            'border': '1px\x20solid\x20#374151',
            'userSelect': 'none'
        });
        const _0x5248a7 = document['createElement']('button');
        _0x5248a7['id'] = 'simple-start-btn';
        _0x5248a7['textContent'] = 'START';
        Object['assign'](_0x5248a7['style'], {
            'padding': '6px\x2012px',
            'backgroundColor': '#10b981',
            'color': '#ffffff',
            'border': 'none',
            'borderRadius': '4px',
            'fontSize': '12px',
            'fontWeight': 'bold',
            'cursor': 'pointer',
            'opacity': '1'
        });
        const _0x78443d = document['createElement']('button');
        _0x78443d['id'] = 'simple-stop-btn';
        _0x78443d['textContent'] = 'STOP';
        Object['assign'](_0x78443d['style'], {
            'padding': '6px\x2012px',
            'backgroundColor': '#ef4444',
            'color': '#ffffff',
            'border': 'none',
            'borderRadius': '4px',
            'fontSize': '12px',
            'fontWeight': 'bold',
            'cursor': 'pointer',
            'opacity': '0.5'
        });
        _0x5248a7['addEventListener']('click', () => {
            if (_0x2d2ca0)
                return;
            _0x5248a7['style']['opacity'] = '0.5';
            _0x78443d['style']['opacity'] = '1';
            _0x30944a();
        });
        _0x78443d['addEventListener']('click', () => {
            _0x5248a7['style']['opacity'] = '1';
            _0x78443d['style']['opacity'] = '0.5';
            _0x59b245();
            _0x2dfa09();
        });
        let _0x5618a6 = ![], _0x5f5b77, _0x4e7e19, _0x7bddb1, _0x42eddd;
        _0x499a84['addEventListener']('mousedown', _0x31b5fa => {
            if (_0x31b5fa['target']['tagName'] === 'BUTTON')
                return;
            _0x5618a6 = !![];
            _0x5f5b77 = _0x31b5fa['clientX'];
            _0x4e7e19 = _0x31b5fa['clientY'];
            _0x7bddb1 = _0x499a84['offsetLeft'];
            _0x42eddd = _0x499a84['offsetTop'];
            _0x499a84['style']['right'] = 'auto';
        });
        window['addEventListener']('mousemove', _0xadb355 => {
            if (!_0x5618a6)
                return;
            _0x499a84['style']['left'] = _0x7bddb1 + (_0xadb355['clientX'] - _0x5f5b77) + 'px';
            _0x499a84['style']['top'] = _0x42eddd + (_0xadb355['clientY'] - _0x4e7e19) + 'px';
        });
        window['addEventListener']('mouseup', () => {
            _0x5618a6 = ![];
        });
        _0x499a84['appendChild'](_0x5248a7);
        _0x499a84['appendChild'](_0x78443d);
        document['body']['appendChild'](_0x499a84);
    }
    _0x5cae9e();
    _0x54b96a();
})());