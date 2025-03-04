export interface Role {
    id: number;
    name: string;
    description?: string;
    active: boolean;
}

const credentials = btoa('dean:dean')

export async function getAllRoles(): Promise<Role[]> {
    try {
        const response = await fetch('/api/user/role?all=true', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${credentials}`,
            },
        })

        if (!response.ok) {
            throw new Error(`Failed to fetch roles: ${response.statusText}`)
        }

        const data = await response.json()
        return data.roles
    } catch (error) {
        throw error
    }
}
