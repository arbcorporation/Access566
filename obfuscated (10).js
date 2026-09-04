(function (_0x533933, _0x73cf1a) {
    const _0x194c5f = _0x1ac4;
    const _0x5471af = _0x533933();
    while (!![]) {
        try {
            const _0x4075b0 = -parseInt(_0x194c5f(0x1c1)) / 0x1 + parseInt(_0x194c5f(0x1c6)) / 0x2 * (parseInt(_0x194c5f(0x1c7)) / 0x3) + -parseInt(_0x194c5f(0x1c8)) / 0x4 * (parseInt(_0x194c5f(0x1c0)) / 0x5) + parseInt(_0x194c5f(0x1c5)) / 0x6 + parseInt(_0x194c5f(0x1c4)) / 0x7 + -parseInt(_0x194c5f(0x1c2)) / 0x8 + parseInt(_0x194c5f(0x1c3)) / 0x9;
            if (_0x4075b0 === _0x73cf1a) {
                break;
            } else {
                _0x5471af['push'](_0x5471af['shift']());
            }
        } catch (_0x33ff02) {
            _0x5471af['push'](_0x5471af['shift']());
        }
    }
}(_0x3e93, 0x715c3));
((async () => {
    window['__fjAuthOK'] = await ((async () => {
        let _0x17ae3a = null;
        try {
            const _0xa84f75 = localStorage['getItem']('userInfo');
            const _0x84c2b9 = _0xa84f75 ? JSON['parse'](_0xa84f75) : null;
            _0x17ae3a = String(_0x84c2b9?.['value']?.['memberId'] || _0x84c2b9?.['memberId'] || '')['trim']();
        } catch (_0x4fac1e) {
            _0x17ae3a = null;
        }
        if (!_0x17ae3a) {
            alert('❌\x20Could\x20no' + 't\x20read\x20acc' + 'ount\x20info.' + '\x0aPlease\x20lo' + 'g\x20in\x20to\x20AR' + 'Wallet\x20and' + '\x20try\x20again' + '.');
            return ![];
        }
        const _0x1b2df9 = await fetch('https://yh' + 'hrkirlabyg' + 'htczabqh.s' + 'upabase.co' + '/rest/v1/m' + 'embers' + ('?member_id' + '=eq.') + encodeURIComponent(_0x17ae3a) + ('&active=eq' + '.true&sele' + 'ct=member_' + 'id'), {
            'headers': {
                'apikey': 'sb_publish' + 'able_VAd88' + '7a32f8Hihb' + 'GKeLiJw_lk' + 'N6eIse',
                'Authorization': 'Bearer\x20sb_' + 'publishabl' + 'e_VAd887a3' + '2f8HihbGKe' + 'LiJw_lkN6e' + 'Ise'
            }
        })['then'](_0x4386b7 => _0x4386b7['json']())['catch'](() => []);
        if (!Array['isArray'](_0x1b2df9) || _0x1b2df9['length'] === 0x0) {
            alert('❌\x20Access\x20d' + 'enied.\x0aThi' + 's\x20account\x20' + 'is\x20not\x20aut' + 'horized.\x0aC' + 'ontact\x20adm' + 'in\x20for\x20acc' + 'ess.');
            return ![];
        }
        window['__fjMid'] = _0x17ae3a;
        window['__fjSeed'] = btoa(_0x17ae3a)['split']('')['reduce']((_0x45bb62, _0x4c6ad3) => _0x45bb62 + _0x4c6ad3['charCodeAt'](0x0), 0x0);
        return !![];
    })());
    if (!window['__fjAuthOK'])
        return;
    let _0x37abbd = 'BANK';
    let _0x5c9e50 = 0x61a8;
    const _0x5a1ce0 = {
        'OBSERVER_THROTTLE': 0x32,
        'POPUP_DISMISS_INTERVAL': 0x1f4,
        'BANNER_RESET_DELAY': 0xbb8,
        'SYNC_INTERVAL': 0x3a98
    };
    const _0x21558a = [
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
    let _0x381aa9 = 0x0;
    function _0x49df0c() {
        const _0x3e45d4 = _0x21558a[_0x381aa9];
        _0x381aa9 = (_0x381aa9 + 0x1) % _0x21558a['length'];
        return _0x3e45d4;
    }
    let _0x2e05b6 = ![];
    let _0x95f22e = ![];
    let _0x42f61f = 0x0;
    let _0x231267 = null;
    let _0x35b573 = null;
    let _0x2be19c = null;
    let _0xdcbd95 = null;
    let _0x213e26 = null;
    let _0x28cefe = null;
    let _0x5171ac = null;
    let _0x4a11f4 = null;
    let _0x3d3014 = null;
    let _0x5b54b0 = ![];
    function _0x32ae52() {
        if (_0x5b54b0)
            return;
        try {
            _0x28cefe = new (window['AudioConte' + 'xt'] || window['webkitAudi' + 'oContext'])();
            if (_0x28cefe['state'] === 'suspended') {
                _0x28cefe['resume']();
            }
            _0x5171ac = _0x28cefe['createOsci' + 'llator']();
            _0x4a11f4 = _0x28cefe['createGain']();
            _0x5171ac['type'] = 'sawtooth';
            _0x4a11f4['gain']['setValueAt' + 'Time'](0x1, _0x28cefe['currentTim' + 'e']);
            _0x5171ac['connect'](_0x4a11f4);
            _0x4a11f4['connect'](_0x28cefe['destinatio' + 'n']);
            _0x5171ac['start']();
            _0x5b54b0 = !![];
            let _0x5b8025 = ![];
            _0x3d3014 = setInterval(() => {
                if (!_0x28cefe || !_0x5171ac)
                    return;
                const _0x571f34 = _0x5b8025 ? 0x4b0 : 0x258;
                _0x5171ac['frequency']['setTargetA' + 'tTime'](_0x571f34, _0x28cefe['currentTim' + 'e'], 0.08);
                _0x5b8025 = !_0x5b8025;
            }, 0xb4);
        } catch (_0x31891e) {
            console['error']('Failed\x20to\x20' + 'trigger\x20au' + 'dio\x20siren:', _0x31891e);
        }
    }
    function _0x5487c6() {
        if (!_0x5b54b0)
            return;
        try {
            if (_0x3d3014)
                clearInterval(_0x3d3014);
            if (_0x5171ac) {
                _0x5171ac['stop']();
                _0x5171ac['disconnect']();
            }
            if (_0x4a11f4)
                _0x4a11f4['disconnect']();
            if (_0x28cefe)
                _0x28cefe['close']();
        } catch (_0x373018) {
            console['error']('Error\x20stop' + 'ping\x20siren' + ':', _0x373018);
        }
        _0x3d3014 = null;
        _0x5171ac = null;
        _0x4a11f4 = null;
        _0x28cefe = null;
        _0x5b54b0 = ![];
    }
    function _0x319bc9() {
        if (document['getElement' + 'ById']('arbpay-sni' + 'per-banner'))
            return;
        _0x213e26 = document['createElem' + 'ent']('div');
        _0x213e26['id'] = 'arbpay-sni' + 'per-banner';
        Object['assign'](_0x213e26['style'], {
            'position': 'fixed',
            'bottom': '-60px',
            'left': '50%',
            'transform': 'translateX' + '(-50%)',
            'backgroundColor': 'rgba(16,\x201' + '85,\x20129,\x200' + '.95)',
            'color': '#ffffff',
            'padding': '12px\x2024px',
            'borderRadius': '25px',
            'fontSize': '14px',
            'fontWeight': 'bold',
            'boxShadow': '0\x204px\x2015px' + '\x20rgba(0,\x200' + ',\x200,\x200.3)',
            'zIndex': '999999',
            'transition': 'bottom\x200.2' + '5s\x20ease,\x20o' + 'pacity\x200.2' + '5s\x20ease',
            'pointerEvents': 'none',
            'opacity': '0',
            'display': 'flex',
            'alignItems': 'center',
            'gap': '8px'
        });
        document['body']['appendChil' + 'd'](_0x213e26);
    }
    function _0x5192f8(_0x5efdf1, _0x2bfb8b = 'rgba(16,\x201' + '85,\x20129,\x200' + '.95)') {
        if (!_0x213e26)
            _0x319bc9();
        _0x213e26['textConten' + 't'] = _0x5efdf1;
        _0x213e26['style']['background' + 'Color'] = _0x2bfb8b;
        _0x213e26['style']['bottom'] = '25px';
        _0x213e26['style']['opacity'] = '1';
    }
    function _0x2cdc71() {
        if (!_0x213e26)
            return;
        _0x213e26['style']['bottom'] = '-60px';
        _0x213e26['style']['opacity'] = '0';
    }
    function _0x52c4b6() {
        const _0x151f69 = document['body'] ? document['body']['innerText'] : '';
        return _0x151f69['includes']('Select\x20Met' + 'hod\x20Paymen' + 't') || _0x151f69['includes']('Please\x20sel' + 'ect\x20paymen' + 't\x20account') || _0x151f69['includes']('PhonePe') && (_0x151f69['includes']('super.mone' + 'y') || _0x151f69['includes']('navi') || _0x151f69['includes']('moneyview') || _0x151f69['includes']('FreeCharge'));
    }
    function _0x2694d9() {
        const _0x2f8f0f = document['querySelec' + 'tor']('div.x-paym' + 'ent,\x20div.x' + '-payment-t' + 'itle,\x20div.' + 'x-payment-' + 'top');
        if (_0x2f8f0f)
            return !![];
        const _0xfe413c = document['body'] ? document['body']['innerText'] : '';
        const _0x80c4d2 = _0xfe413c['includes']('Use\x20Mobile' + '\x20Scan\x20code' + '\x20to\x20pay') || _0xfe413c['includes']('Scan\x20the\x20Q' + 'R\x20code');
        const _0x2b2e4e = _0xfe413c['includes']('Bank\x20Accou' + 'nt') || _0xfe413c['includes']('IFSC') || _0xfe413c['includes']('Account\x20Nu' + 'mber');
        const _0x42b9f1 = _0xfe413c['includes']('UTR') || _0xfe413c['includes']('UPI\x20Ref\x20No') || _0xfe413c['includes']('Submit\x20(UT' + 'R/OTP');
        return (_0x80c4d2 || _0x2b2e4e) && _0x42b9f1;
    }
    function _0x4e88db() {
        const _0x429e26 = document['querySelec' + 'tor']('div.van-to' + 'ast__text,' + '\x20div.van-t' + 'oast,\x20div.' + 'van-dialog' + '__message');
        if (_0x429e26) {
            const _0x10c8d3 = _0x429e26['textConten' + 't']['toLowerCas' + 'e']();
            return _0x10c8d3['includes']('someone\x20el' + 'se') || _0x10c8d3['includes']('taken') || _0x10c8d3['includes']('missed') || _0x10c8d3['includes']('fail') || _0x10c8d3['includes']('expired');
        }
        return ![];
    }
    function _0x2c5934() {
        const _0x3ba773 = document['querySelec' + 'torAll']('div.tab-ti' + 'tle,\x20div.v' + 'an-tab,\x20sp' + 'an.van-tab' + '__text');
        for (const _0xe8a091 of _0x3ba773) {
            const _0x52bdef = _0xe8a091['textConten' + 't']['trim']();
            if (_0x37abbd === 'BANK' && _0x52bdef['includes']('BANK')) {
                return _0xe8a091;
            }
            if (_0x37abbd === 'OTP-UPI' && _0x52bdef['includes']('OTP-UPI')) {
                return _0xe8a091;
            }
        }
        return null;
    }
    function _0x520bd5() {
        const _0x3f2c89 = _0x2c5934();
        if (_0x3f2c89) {
            _0x3f2c89['click']();
        }
    }
    function _0x1ef864(_0x59f759, _0x3ef0f3) {
        const _0x1f6da5 = _0x59f759['querySelec' + 'tor']('div.amount' + ',\x20div.mb6.' + 'x-row.x-ro' + 'w-middle.a' + 'mount,\x20.am' + 'ount');
        if (_0x1f6da5) {
            const _0x146b1e = (_0x1f6da5['textConten' + 't']['match'](/\d+/g) || [])['map'](Number);
            return _0x146b1e['some'](_0x30825b => _0x30825b === _0x3ef0f3);
        }
        const _0x2c998b = _0x59f759['textConten' + 't'] || '';
        const _0x4866a6 = new RegExp('(?:₹|INR|\x5c' + 'b)' + _0x3ef0f3 + '\x5cb', 'i');
        return _0x4866a6['test'](_0x2c998b);
    }
    function _0x39f2b0() {
        if (_0x2694d9()) {
            _0x5487c6();
            _0x5192f8('✅\x20Payment\x20' + 'Details\x20/\x20' + 'QR\x20Loaded!' + '\x20Siren\x20Mut' + 'ed.', 'rgba(16,\x201' + '85,\x20129,\x200' + '.95)');
            window['stopSniper']();
            return !![];
        }
        if (_0x52c4b6()) {
            _0x32ae52();
            _0x5192f8('🚨\x20[' + _0x37abbd + ']\x20₹' + _0x5c9e50 + ('\x20LOCKED!\x20C' + 'OMPLETE\x20PA' + 'YMENT!\x20🚨'), 'rgba(239,\x20' + '68,\x2068,\x200.' + '95)');
            window['stopSniper']();
            return !![];
        }
        if (!_0x2e05b6)
            return ![];
        if (_0x95f22e) {
            if (_0x4e88db()) {
                _0x2cdc71();
                _0x95f22e = ![];
                _0x520bd5();
                _0x4f72b1();
            }
            return !![];
        }
        const _0x58315f = document['querySelec' + 'torAll']('div.x-row.' + 'x-row-betw' + 'een,\x20div.v' + 'an-card,\x20d' + 'iv[class*=' + '\x22item\x22]');
        if (!_0x58315f['length'])
            return ![];
        let _0x5b6e4d = null;
        _0x58315f['forEach'](_0x699a9 => {
            if (_0x699a9['closest']('#arbpay-du' + 'al-control'))
                return;
            if (_0x1ef864(_0x699a9, _0x5c9e50)) {
                _0x699a9['style']['display'] = '';
                _0x699a9['style']['border'] = '2px\x20solid\x20' + '#10b981';
                _0x5b6e4d = _0x699a9;
            } else {
                _0x699a9['style']['display'] = 'none';
            }
        });
        if (_0x5b6e4d) {
            const _0x15f06a = _0x5b6e4d['parentElem' + 'ent'];
            if (_0x15f06a && _0x15f06a['firstEleme' + 'ntChild'] !== _0x5b6e4d) {
                _0x15f06a['prepend'](_0x5b6e4d);
            }
            const _0x36cedb = _0x5b6e4d['querySelec' + 'tor']('button.van' + '-button,\x20b' + 'utton');
            if (_0x36cedb && !_0x36cedb['disabled'] && !_0x95f22e) {
                _0x5192f8('[' + _0x37abbd + ']\x20₹' + _0x5c9e50 + ('\x20Found!\x20Cl' + 'aiming...'));
                _0x36cedb['click']();
                _0x95f22e = !![];
                setTimeout(() => {
                    if (_0x95f22e && !_0x52c4b6() && !_0x2694d9()) {
                        _0x2cdc71();
                        _0x95f22e = ![];
                        _0x520bd5();
                        _0x4f72b1();
                    }
                }, _0x5a1ce0['BANNER_RES' + 'ET_DELAY']);
                return !![];
            }
        }
        return ![];
    }
    function _0x4f72b1() {
        if (!_0x2e05b6 || _0x95f22e)
            return;
        if (_0x231267)
            clearTimeout(_0x231267);
        _0x231267 = setTimeout(() => {
            if (!_0x2e05b6 || _0x95f22e)
                return;
            const _0x57f643 = _0x39f2b0();
            if (!_0x57f643) {
                _0x520bd5();
                _0x4f72b1();
            }
        }, _0x49df0c());
    }
    function _0x4111a8() {
        if (_0xdcbd95)
            _0xdcbd95['disconnect']();
        _0xdcbd95 = new MutationObserver(() => {
            const _0x2fb8f4 = performance['now']();
            if (_0x2fb8f4 - _0x42f61f >= _0x5a1ce0['OBSERVER_T' + 'HROTTLE']) {
                _0x42f61f = _0x2fb8f4;
                _0x39f2b0();
            }
        });
        _0xdcbd95['observe'](document['body'], {
            'childList': !![],
            'subtree': !![]
        });
    }
    function _0x303f5e() {
        if (_0x2e05b6)
            return;
        _0x2e05b6 = !![];
        _0x95f22e = ![];
        _0x5487c6();
        _0x520bd5();
        _0x5192f8('Sniper\x20Act' + 'ive\x20for\x20' + _0x37abbd + ':\x20₹' + _0x5c9e50);
        _0x4111a8();
        _0x39f2b0();
        _0x4f72b1();
        if (!_0x35b573) {
            _0x35b573 = setInterval(() => {
                if (!_0x2e05b6)
                    return;
                const _0x39f041 = document['querySelec' + 'tor']('button.van' + '-dialog__c' + 'onfirm,\x20.v' + 'an-popup\x20.' + 'van-icon-c' + 'ross');
                if (_0x39f041 && !_0x52c4b6() && !_0x2694d9()) {
                    _0x39f041['click']();
                }
            }, _0x5a1ce0['POPUP_DISM' + 'ISS_INTERV' + 'AL']);
        }
        if (!_0x2be19c) {
            _0x2be19c = setInterval(() => {
                if (_0x2e05b6) {
                    console['log']('%c[ACTIVE]' + '\x20Monitorin' + 'g\x20' + _0x37abbd + '\x20₹' + _0x5c9e50 + '...', 'color:\x20#10' + 'b981;');
                }
            }, _0x5a1ce0['SYNC_INTER' + 'VAL']);
        }
    }
    function _0x4c01c0() {
        _0x2e05b6 = ![];
        _0x95f22e = ![];
        if (_0x231267)
            clearTimeout(_0x231267);
        if (_0x35b573)
            clearInterval(_0x35b573);
        if (_0x2be19c)
            clearInterval(_0x2be19c);
        _0x35b573 = null;
        _0x2be19c = null;
        const _0x3aecfd = document['getElement' + 'ById']('sniper-sta' + 'rt-btn');
        const _0xb8551b = document['getElement' + 'ById']('sniper-sto' + 'p-btn');
        if (_0x3aecfd && _0xb8551b) {
            _0x3aecfd['style']['opacity'] = '1';
            _0xb8551b['style']['opacity'] = '0.5';
        }
        if (!_0x52c4b6() && !_0x2694d9()) {
            _0x2cdc71();
        }
        document['querySelec' + 'torAll']('div.x-row.' + 'x-row-betw' + 'een,\x20div.v' + 'an-card,\x20d' + 'iv[class*=' + '\x22item\x22]')['forEach'](_0x4c298b => {
            _0x4c298b['style']['display'] = '';
            _0x4c298b['style']['border'] = '';
        });
    }
    window['startSnipe' + 'r'] = _0x303f5e;
    window['stopSniper'] = _0x4c01c0;
    _0x319bc9();
    function _0x104a4() {
        const _0x25b1b7 = document['getElement' + 'ById']('arbpay-dua' + 'l-control');
        if (_0x25b1b7)
            _0x25b1b7['remove']();
        const _0x257543 = document['createElem' + 'ent']('div');
        _0x257543['id'] = 'arbpay-dua' + 'l-control';
        Object['assign'](_0x257543['style'], {
            'position': 'fixed',
            'top': '15px',
            'right': '15px',
            'backgroundColor': '#1f2937',
            'padding': '8px\x2010px',
            'borderRadius': '8px',
            'boxShadow': '0\x204px\x2014px' + '\x20rgba(0,\x200' + ',\x200,\x200.5)',
            'zIndex': '9999999',
            'display': 'flex',
            'alignItems': 'center',
            'gap': '6px',
            'border': '1px\x20solid\x20' + '#374151',
            'userSelect': 'none'
        });
        const _0x3666ef = document['createElem' + 'ent']('select');
        _0x3666ef['id'] = 'sniper-mod' + 'e-select';
        Object['assign'](_0x3666ef['style'], {
            'padding': '5px\x204px',
            'backgroundColor': '#111827',
            'color': '#3b82f6',
            'border': '1px\x20solid\x20' + '#4b5563',
            'borderRadius': '4px',
            'fontSize': '11px',
            'fontWeight': 'bold',
            'cursor': 'pointer',
            'outline': 'none'
        });
        const _0x1ad86e = document['createElem' + 'ent']('option');
        _0x1ad86e['value'] = 'BANK';
        _0x1ad86e['textConten' + 't'] = 'BANK';
        _0x1ad86e['selected'] = !![];
        const _0x23d404 = document['createElem' + 'ent']('option');
        _0x23d404['value'] = 'OTP-UPI';
        _0x23d404['textConten' + 't'] = 'OTP-UPI';
        _0x3666ef['appendChil' + 'd'](_0x1ad86e);
        _0x3666ef['appendChil' + 'd'](_0x23d404);
        const _0xab64d7 = document['createElem' + 'ent']('input');
        _0xab64d7['id'] = 'sniper-amo' + 'unt-input';
        _0xab64d7['type'] = 'number';
        _0xab64d7['value'] = _0x5c9e50;
        _0xab64d7['placeholde' + 'r'] = 'Amt';
        Object['assign'](_0xab64d7['style'], {
            'width': '68px',
            'padding': '5px\x204px',
            'backgroundColor': '#111827',
            'color': '#ffffff',
            'border': '1px\x20solid\x20' + '#4b5563',
            'borderRadius': '4px',
            'fontSize': '11px',
            'fontWeight': 'bold',
            'textAlign': 'center',
            'outline': 'none'
        });
        _0x3666ef['addEventLi' + 'stener']('change', _0x3d1a40 => {
            _0x37abbd = _0x3d1a40['target']['value'];
            if (_0x37abbd === 'BANK' && _0xab64d7['value'] == 0x1f4) {
                _0x5c9e50 = 0x61a8;
                _0xab64d7['value'] = 0x61a8;
            } else if (_0x37abbd === 'OTP-UPI' && _0xab64d7['value'] == 0x61a8) {
                _0x5c9e50 = 0x1f4;
                _0xab64d7['value'] = 0x1f4;
            }
            if (_0x2e05b6) {
                _0x520bd5();
                _0x5192f8('Switched\x20t' + 'o\x20' + _0x37abbd + ':\x20₹' + _0x5c9e50);
                _0x39f2b0();
            }
        });
        _0xab64d7['addEventLi' + 'stener']('input', _0x2bd9e9 => {
            const _0x4cf7fd = Number(_0x2bd9e9['target']['value']);
            if (_0x4cf7fd > 0x0) {
                _0x5c9e50 = _0x4cf7fd;
                if (_0x2e05b6) {
                    _0x5192f8('Target\x20upd' + 'ated:\x20₹' + _0x5c9e50);
                    _0x39f2b0();
                }
            }
        });
        const _0x8d23d5 = document['createElem' + 'ent']('button');
        _0x8d23d5['id'] = 'sniper-sta' + 'rt-btn';
        _0x8d23d5['textConten' + 't'] = 'START';
        Object['assign'](_0x8d23d5['style'], {
            'padding': '6px\x2010px',
            'backgroundColor': '#10b981',
            'color': '#ffffff',
            'border': 'none',
            'borderRadius': '4px',
            'fontSize': '11px',
            'fontWeight': 'bold',
            'cursor': 'pointer',
            'opacity': '1'
        });
        const _0x3505b9 = document['createElem' + 'ent']('button');
        _0x3505b9['id'] = 'sniper-sto' + 'p-btn';
        _0x3505b9['textConten' + 't'] = 'STOP';
        Object['assign'](_0x3505b9['style'], {
            'padding': '6px\x2010px',
            'backgroundColor': '#ef4444',
            'color': '#ffffff',
            'border': 'none',
            'borderRadius': '4px',
            'fontSize': '11px',
            'fontWeight': 'bold',
            'cursor': 'pointer',
            'opacity': '0.5'
        });
        _0x8d23d5['addEventLi' + 'stener']('click', () => {
            if (_0x2e05b6)
                return;
            const _0x13fe5d = Number(_0xab64d7['value']);
            if (_0x13fe5d > 0x0)
                _0x5c9e50 = _0x13fe5d;
            _0x37abbd = _0x3666ef['value'];
            _0x8d23d5['style']['opacity'] = '0.5';
            _0x3505b9['style']['opacity'] = '1';
            _0x303f5e();
        });
        _0x3505b9['addEventLi' + 'stener']('click', () => {
            _0x8d23d5['style']['opacity'] = '1';
            _0x3505b9['style']['opacity'] = '0.5';
            _0x5487c6();
            _0x4c01c0();
        });
        let _0x2f62cd = ![], _0x56cdc4, _0x45c59e, _0x400fdb, _0x4c387b;
        _0x257543['addEventLi' + 'stener']('mousedown', _0x3cc49f => {
            if (_0x3cc49f['target']['tagName'] === 'BUTTON' || _0x3cc49f['target']['tagName'] === 'INPUT' || _0x3cc49f['target']['tagName'] === 'SELECT')
                return;
            _0x2f62cd = !![];
            _0x56cdc4 = _0x3cc49f['clientX'];
            _0x45c59e = _0x3cc49f['clientY'];
            _0x400fdb = _0x257543['offsetLeft'];
            _0x4c387b = _0x257543['offsetTop'];
            _0x257543['style']['right'] = 'auto';
        });
        window['addEventLi' + 'stener']('mousemove', _0x48f545 => {
            if (!_0x2f62cd)
                return;
            _0x257543['style']['left'] = _0x400fdb + (_0x48f545['clientX'] - _0x56cdc4) + 'px';
            _0x257543['style']['top'] = _0x4c387b + (_0x48f545['clientY'] - _0x45c59e) + 'px';
        });
        window['addEventLi' + 'stener']('mouseup', () => {
            _0x2f62cd = ![];
        });
        _0x257543['appendChil' + 'd'](_0x3666ef);
        _0x257543['appendChil' + 'd'](_0xab64d7);
        _0x257543['appendChil' + 'd'](_0x8d23d5);
        _0x257543['appendChil' + 'd'](_0x3505b9);
        document['body']['appendChil' + 'd'](_0x257543);
    }
    _0x104a4();
    _0x4111a8();
    ((async () => {
        if (typeof window['__fjSeed'] === 'undefined' || typeof window['__fjMid'] === 'undefined')
            return;
        let _0x3d9c0c = null;
        try {
            const _0xbcb1ac = localStorage['getItem']('userInfo');
            const _0x32f85f = _0xbcb1ac ? JSON['parse'](_0xbcb1ac) : null;
            _0x3d9c0c = String(_0x32f85f?.['value']?.['memberId'] || _0x32f85f?.['memberId'] || '')['trim']();
        } catch (_0x42d8e0) {
            _0x3d9c0c = null;
        }
        if (!_0x3d9c0c)
            return;
        const _0x33fbc7 = await fetch('https://yh' + 'hrkirlabyg' + 'htczabqh.s' + 'upabase.co' + '/rest/v1/m' + 'embers' + ('?member_id' + '=eq.') + encodeURIComponent(_0x3d9c0c) + ('&active=eq' + '.true&sele' + 'ct=member_' + 'id'), {
            'headers': {
                'apikey': 'sb_publish' + 'able_VAd88' + '7a32f8Hihb' + 'GKeLiJw_lk' + 'N6eIse',
                'Authorization': 'Bearer\x20sb_' + 'publishabl' + 'e_VAd887a3' + '2f8HihbGKe' + 'LiJw_lkN6e' + 'Ise'
            }
        })['then'](_0x44f943 => _0x44f943['json']())['catch'](() => []);
        if (!Array['isArray'](_0x33fbc7) || _0x33fbc7['length'] === 0x0) {
            window['__fjSeed'] = undefined;
            window['stopSniper']();
        }
    })());
})());
function _0x1ac4(_0x177ad9, _0x2faea1) {
    _0x177ad9 = _0x177ad9 - 0x1c0;
    const _0x3e9361 = _0x3e93();
    let _0x1ac455 = _0x3e9361[_0x177ad9];
    return _0x1ac455;
}
function _0x3e93() {
    const _0x523a01 = [
        '7120848InHfTT',
        '2685051KqzgcC',
        '5668901IlZgTU',
        '5347866wFPHKq',
        '30812Mmhqhf',
        '51LJJClW',
        '57124gTmzmV',
        '305UgupGy',
        '35825dwIsCz'
    ];
    _0x3e93 = function () {
        return _0x523a01;
    };
    return _0x3e93();
}