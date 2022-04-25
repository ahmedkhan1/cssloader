// import router from '../router';
/** 
 * @author Ahmed khan
 * ----------------------------------------------------------------------
 * @description Axios Interceptor for handling API requests
 * ----------------------------------------------------------------------
 * @type interceptors.request - For handling the incoming request headers
 * @type interceptors.response - For handling the response (sucess or error) 
 * of the request
 * ----------------------------------------------------------------------
 * @export api - exporting inteceptor instance for initialization
 * 
 * */


export default function ({ $axios, store }) {
    $axios.onRequest(config => {
        // console.log(store.getters.getAuthToken())
        if(store.state.authToken){
            $axios.setToken(store.state.authToken, 'Bearer')
        }
        return config;
    }, error => {
        return Promise.reject(error);
    })

    $axios.onResponse((response) => {
        if (response.status === 200 || response.status === 201) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    })


    $axios.onError(error => {
        /* Handle Errors for all status */
        if (error && 
            typeof error === "object" &&  
            error.hasOwnProperty('status') && 
            error.response.status
            ) {
            switch (error.response.status) {
                case 401:
                    console.log("session expired");
                    redirect();
                    break;
                case 403:
                    redirect();
                    break;
                case 404:
                    console.log('Resource/Page/API not exist');
                    break;
                case 502:
                    redirect();
            } 
            return Promise.reject(error);
        }else{
            return Promise.reject(error);
        }
    })
}

function redirect(){
    // redirect({
    //     path: "/",
    //     query: { redirect: router.currentRoute.fullPath }
    // });
    
}