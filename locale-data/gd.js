!function(a,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(a.ReactIntlLocaleData=a.ReactIntlLocaleData||{},a.ReactIntlLocaleData.gd=e())}(this,function(){"use strict";return[{locale:"gd",pluralRuleFunction:function(a,e){var n=String(a).split("."),i=Number(n[0])==a;return e?"other":1==a||11==a?"one":2==a||12==a?"two":i&&a>=3&&a<=10||i&&a>=13&&a<=19?"few":"other"},fields:{year:{displayName:"bliadhna",relative:{0:"am bliadhna",1:"an ath-bhliadhna","-2":"a-bhòn-uiridh","-1":"an-uiridh"},relativeTime:{future:{one:"an ceann {0} bhliadhna",two:"an ceann {0} bhliadhna",few:"an ceann {0} bliadhnaichean",other:"an ceann {0} bliadhna"},past:{one:"{0} bhliadhna air ais",two:"{0} bhliadhna air ais",few:"{0} bhliadhnaichean air ais",other:"{0} bliadhna air ais"}}},month:{displayName:"mìos",relative:{0:"am mìos seo",1:"an ath-mhìos","-1":"am mìos seo chaidh"},relativeTime:{future:{one:"an ceann {0} mhìosa",two:"an ceann {0} mhìosa",few:"an ceann {0} mìosan",other:"an ceann {0} mìosa"},past:{one:"{0} mhìos air ais",two:"{0} mhìos air ais",few:"{0} mìosan air ais",other:"{0} mìos air ais"}}},day:{displayName:"latha",relative:{0:"an-diugh",1:"a-màireach",2:"an-earar",3:"an-eararais","-2":"a-bhòin-dè","-1":"an-dè"},relativeTime:{future:{one:"an ceann {0} latha",two:"an ceann {0} latha",few:"an ceann {0} làithean",other:"an ceann {0} latha"},past:{one:"{0} latha air ais",two:"{0} latha air ais",few:"{0} làithean air ais",other:"{0} latha air ais"}}},hour:{displayName:"uair a thìde",relativeTime:{future:{one:"an ceann {0} uair a thìde",two:"an ceann {0} uair a thìde",few:"an ceann {0} uairean a thìde",other:"an ceann {0} uair a thìde"},past:{one:"{0} uair a thìde air ais",two:"{0} uair a thìde air ais",few:"{0} uairean a thìde air ais",other:"{0} uair a thìde air ais"}}},minute:{displayName:"mionaid",relativeTime:{future:{one:"an ceann {0} mhionaid",two:"an ceann {0} mhionaid",few:"an ceann {0} mionaidean",other:"an ceann {0} mionaid"},past:{one:"{0} mhionaid air ais",two:"{0} mhionaid air ais",few:"{0} mionaidean air ais",other:"{0} mionaid air ais"}}},second:{displayName:"diog",relative:{0:"an-dràsta"},relativeTime:{future:{one:"an ceann {0} diog",two:"an ceann {0} dhiog",few:"an ceann {0} diogan",other:"an ceann {0} diog"},past:{one:"{0} diog air ais",two:"{0} dhiog air ais",few:"{0} diogan air ais",other:"{0} diog air ais"}}}}}]});
