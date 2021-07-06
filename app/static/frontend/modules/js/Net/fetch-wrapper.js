export default class Fetch {
    async testGet() {
        const response = await fetch("/hello", {
            "method": "GET"
        })
        return await response.json()
    }
}
