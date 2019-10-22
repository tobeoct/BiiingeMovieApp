import {Injectable} from '@angular/core';

@Injectable()
export class SessionService  {
    constructor(){
        let sessionTime = this.getSession("session-time");
        const duration = 60*60*10;//10 days
        let date =new Date().toString();
        if((Date.parse(date)- Date.parse(sessionTime))/1000 >= duration)
        {
            this.resetSession();
        }
    }
    resetSession=()=>{
        
        this.setSession('session-time',null);
        this.setSession('current-user',null);
    }
    setSession=(key,value)=>{
localStorage.setItem(key,JSON.stringify(value));
    }
    removeSession=(key)=>{
        localStorage.removeItem(key);
            }
            getSession=(key)=>{
                return JSON.parse(localStorage.getItem(key));
            }
            setPage=(title)=>{
                localStorage.setItem('page-title',title);
            }
            getPage=()=>{
                return localStorage.getItem('page-title');
            }
            titleCase(string) {
                if(string===undefined) return "";
                var sentence = string.toLowerCase().split("-");
                for(var i = 0; i< sentence.length; i++){
                   sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
                }
              //document.write(sentence.join(" "));
              return sentence.join(" ");
              }
}
