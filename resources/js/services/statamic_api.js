import axios from 'axios'

const tokenEl = document.querySelector('meta[name="csrf-token"]')
const TOKEN = tokenEl ? tokenEl.getAttribute('content') : null

const api = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-TOKEN': TOKEN || ''
    }
})

const baseAPI = {
    get: async (endpoint) => {
        let res;

        try {
            let req = await api.get(endpoint)
            res = await req.data
        } catch (err) {
            if (err.request) {
                let errors = JSON.parse(err.request.response)
                res = errors
            }
        }
        return res
    }
}

export { baseAPI }
