export async function uploadFiles(files: File[]) {

    const formData = new FormData()

    for (const file of files) {
        formData.append("files", file)
    }

    const response = await fetch("https://sumnfe-production.up.railway.app/upload", {
        method: "POST",
        body: formData
    })

    if (!response.ok) {
        throw new Error("Upload failed")
    }

    return await response.json()
}