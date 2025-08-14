export async function getDataHome() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/689a44e4b032ab872be94478?pretty=true&read_key=${process.env.READ_KEY}&props=slug,title,metadata,type`,{next: {revalidate: 120}} )
        if (!res.ok) {
            throw new Error("Network response was not ok");
        }
        return res.json();
    } catch (error) {
        throw new Error("Failed to fetch data");
    }
}


export async function getSubMenu() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,`, {next: {revalidate: 120}})
        if (!res.ok) {
            throw new Error("Network response was not ok");
        }
        return res.json();
    } catch (error) {
        throw new Error("Failed to fetch data");
    }
}

export async function getItemBySlug(itemSlug: string) {
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`

    const queryParams = new URLSearchParams({
        query: JSON.stringify({
            slug: itemSlug
        }),
        props:  'slug,title,metadata,content',
        read_key: process.env.READ_KEY as string
    })

    const url = `${baseUrl}?${queryParams.toString()}`
 
    try {
        const res = await fetch(url, {next: {revalidate: 120}})
        if (!res.ok) {
            throw new Error("Network response was not ok");
        }
        return res.json();
    } catch (error) {
        throw new Error("Failed to fetch data");
    }
    
}