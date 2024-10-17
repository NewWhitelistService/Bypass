local HttpService = game:GetService("HttpService")

-- Define your API URL
local API_URL = "https://uhmyurl-git-main-newwhitelistservices-projects.vercel.app/api/hwid" -- Your API URL

-- Function to send a GET request to retrieve HWIDs
local function getHWIDs()
    local response = (syn and syn.request or http_request) {
        Url = API_URL,
        Method = 'GET',
    }

    -- Check the response and print the result
    if response.Success then
        print("List of HWIDs:\n" .. response.Body) -- Output the list of HWIDs
    else
        print("Error: ", response.StatusCode) -- Output the status code if there's an error
    end
end

-- Call the function to retrieve HWIDs
getHWIDs()
