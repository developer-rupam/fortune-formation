const DEVELOPMENTOBJ = {url : 'http://localhost:3000',api : 'http://devbetahost.000webhostapp.com/fortune_formation_api/admin',baseurl : '/'};
const PRODUCTIONOBJ = {url : 'https://hostingfordevelopment.000webhostapp.com/smart-formation/dev ',api : 'https://devbetahost.000webhostapp.com/fortune_formation_api/admin',baseurl : 'https://hostingfordevelopment.000webhostapp.com/smart-formation/dev/'};

export const mode = "dev" //dev : development; prod : production

if(mode == 'dev'){
    var url = DEVELOPMENTOBJ.url;
    var api = DEVELOPMENTOBJ.api;
    var baseurl = DEVELOPMENTOBJ.baseurl
}else{
    var url = PRODUCTIONOBJ.url;
    var api = PRODUCTIONOBJ.api;
    var baseurl = DEVELOPMENTOBJ.baseurl
}

export const ADDR = url;
export const WEBSERVICE = api;
export const BASEURL = baseurl;

export const SITENAME = 'Fortune Formation';
export const SITENAMEALIAS = 'fortune_formation';