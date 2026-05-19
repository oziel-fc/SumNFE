import tempfile

from readers.pdf_reader import read_pdf
from readers.xml_reader import read_xml

PDF_TYPES = [
    "application/pdf"
]

XML_TYPES = [
    "text/xml",
    "application/xml"
]

async def process_files(files):

    nfe_values = []
    invalid_files = []

    for file in files:

        is_pdf = file.content_type in PDF_TYPES
        is_xml = file.content_type in XML_TYPES

        if not is_pdf and not is_xml:

            invalid_files.append({
                "file_name": file.filename,
                "reason": "Unsupported file type"
            })

            continue

        file_suffix = ".pdf" if is_pdf else ".xml"

        with tempfile.NamedTemporaryFile(delete=False, suffix=file_suffix) as temp_file:

            content = await file.read()

            temp_file.write(content)

            temp_path = temp_file.name

        total_value = None

        if is_pdf:
            total_value = read_pdf(temp_path)

        if is_xml:
            total_value = read_xml(temp_path)

        if total_value is None:

            invalid_files.append({
                "file_name": file.filename,
                "reason": "Could not extract invoice value"
            })

            continue

        nfe_values.append(total_value)

    return {
        "nfe_values": nfe_values,
        "total_value": sum(nfe_values),
        "invalid_files": invalid_files
    }