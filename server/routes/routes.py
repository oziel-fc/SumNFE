from fastapi import APIRouter, UploadFile, File

from services.invoice_service import process_files

router = APIRouter()

@router.post("/upload")
async def upload_files(files: list[UploadFile] = File(...)):

    return await process_files(files)