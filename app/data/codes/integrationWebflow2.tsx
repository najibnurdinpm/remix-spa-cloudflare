export default `import { SledgeProvider } from '@sledge-app/core';

export default function App() {
    return (
        <SledgeProvider
            apiKey="API-Key-from-Admin-Panel"
            instantSearchApiKey="Instant-Search-API-Key-from-Admin-Panel"
            userId="user-id-from-your-website"
            userEmail="user-email-from-your-website"
            userFullname="user-fullname-from-your-website">
                ...    
        </SledgeProvider>  
    )
};`