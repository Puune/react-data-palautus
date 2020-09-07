import React from 'react';
import hslAPI from 'Utils/hslAPI'

export const getNetwork = () => {
    return hslAPI.get('networks/citybikes-helsinki')
        .then(function(response){
            return response.data.network
        })
        .catch(function(error){
            console.log(error)
            return null
        })
}
