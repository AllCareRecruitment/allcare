export async function getPackagesByRoleId(roleId: number) {
    const credentials = btoa('dean:dean')

    const response = await fetch(`/api/packages/${roleId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${credentials}`,
        },
    })

    if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to fetch packages')
    }

    return await response.json()
}