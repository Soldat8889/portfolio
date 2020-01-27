class Cookie {
    /**
     * Cookie (Get/Set a cookie)
     * 
     * @param { String } name Name of the cookie
     * @param { String } value Content of the cookie
     * @param { Number } exDays Add expiry days
     */

    constructor(name, value, exDays) {
        this.name = name;
        this.value = value;
        this.exDays = exDays;
    }

    /**
     * Get Cookie (need only this.name)
     * 
     * @return { String | null }
     */

    getCookie() {
        const name          = this.name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca            = decodedCookie.split(";");

        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];

            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }

            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }

        return null;
    }

    /**
     * Set Cookie
     * 
     * @return { String }
     */

    setCookie() {
        const exDate = new Date();
        exDate.setDate(exDate.getDate() + this.exDays);

        return `${this.name}=${this.value}${((this.exDays == null) ? "" : "; expires=" + exDate.toUTCString())}`;
    }
}

export default Cookie;