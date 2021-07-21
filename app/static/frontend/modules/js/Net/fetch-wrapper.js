export default class Fetch {
    async testGet() {
        const response = await fetch("/hello", {
            "method": "GET"
        })
        return await response.json()
    }
    async post(method) {
      const response = await fetch("/request", {
        "method": "POST",
        "body": {method},
        "headers": {
          "CONTENT-TYPE": "application/json"
        }
      })
      return await response.json()
    }
}
