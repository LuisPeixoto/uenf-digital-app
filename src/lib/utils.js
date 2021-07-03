module.exports = {
    FormatDate(dateApi, dateNow, hoursApi, hoursNow) {    

        const Api = new Date(dateApi[1], dateApi[2], dateApi[3], hoursApi[1], hoursApi[2], hoursApi[3])
        const Now = new Date(dateNow[1], dateNow[2], dateNow[3], hoursNow[1], hoursNow[2], hoursNow[3])

        const TimeFeed = Math.abs(Now - Api)

        const day = 1000 * 60 * 60 * 24
        const hour = 1000 * 60 * 60
        const minute = 1000 * 60 

        if (((TimeFeed) / day)<1){
            if(((TimeFeed) / hour)<1){
                if(((TimeFeed) / minute)<1){
                    return `Agora`
                }
                else if(((TimeFeed) / minute)>=1 && ((TimeFeed) / minute)<2){
                    return `1 minuto atrás`
                }
                else{
                    return `${Math.trunc((TimeFeed) / minute)} minutos atrás`
                }
            }
            else if(((TimeFeed) / hour)>=1 && ((TimeFeed) / hour)<2){
                return `1 hora atrás`
            }
            else{
                return `${Math.trunc((TimeFeed) / hour)} horas atrás`
            }
        }
        else if(((TimeFeed) / day)>=1 && ((TimeFeed) / day)<2){
            return `1 dia atrás`
        }
        
        else if(((TimeFeed) / day)<=10){
            return `${Math.trunc((TimeFeed) / day)} dias atrás`
        }
        else{
            return `${dateApi[3]}/${dateApi[2]}/${dateApi[1]}`
        }
    },
    
    RemoveZero(x) {
        for (var i = 1; i <= 3; i++) {
            if (x[i].length == 2) {
                x[i] = x[i].replace(/0/y, "")
            }
        }
        return x
    }

}