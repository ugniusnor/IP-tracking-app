
async function run() {
    try {
        // making request to server and getting response object
        const res = await fetch("https://geo.ipify.org/api/v1?apiKey=at_C6EPXDtLEJ8aCnJ0RSqqnykUbEg2g", {
         
        });

        // checking if we managed to get valid response
        if (!res.ok) {
            console.error("Failed to fetch: ", res.status);
            return;
        }

        try {
            // parsing response body
            const data = await res.json();
            // printing response
            console.log(data);
        } catch (err) {
            console.error("Got invalid JSON");
        }
    } catch (err) {
        console.error("Failed to connect: ", err);
    }
}

run();
