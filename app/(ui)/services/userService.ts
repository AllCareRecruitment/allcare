
const credentials = btoa('dean:dean') 

export async function registerUser(userData: {
    name: string;
    surname: string;
    email: string;
    phoneNumber?: string;
  }, roleId: number) {
    try {
        const payload = {
            ...userData,
            roleId,
            active: true,
        }

        const response = await fetch('/api/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${credentials}`,
            },
            body: JSON.stringify(payload),
        })

        if (!response.ok) {
            throw new Error(`Failed to register user: ${response.statusText}`)
        }

        return await response.json()
    } catch (error) {
        throw error
    }
}