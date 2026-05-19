export async function uploadFiles(files: File[]) {

    const formData = new FormData()

    for (const file of files) {
        formData.append("files", file)
    }

    const response = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData
    })

    if (!response.ok) {
        throw new Error("Upload failed")
    }

    return await response.json()
}