const DEVELOPMENTOBJ = {url : 'http://localhost:3000',api : 'https://fortune-formation.herokuapp.com/Admin',baseurl : '/'};
const PRODUCTIONOBJ = {url : 'https://hostingfordevelopment.000webhostapp.com/fortune-formation/admin',api : 'https://fortune-formation.herokuapp.com/Admin',baseurl : 'https://hostingfordevelopment.000webhostapp.com/fortune-formation/admin/'};

export const mode = "prod" //dev : development; prod : production

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