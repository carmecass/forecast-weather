import api from '../api'
import validate from '../validate'

const logic = {

    searchItem(query) {
        validate.arguments([
            { name: 'query', value: query, type: 'string' }
        ])

        return api.searchItem(query)
    },

    searchByHours(query) {
        validate.arguments([
            {name:'query', value:query, type: 'string'}
        ])
        return api.searchByHours(query)
    }

}
    export default logic